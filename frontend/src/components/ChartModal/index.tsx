import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  Accordion,
  Card,
  Container,
  Form,
  Row,
  Col,
  Button,
  FormLabel,
} from 'react-bootstrap';

import { CgMoreO } from 'react-icons/cg';
import { Client, Record } from '../../types';
import { api } from '../../services/api';
import { ChartModalContainer } from './styles';
import { logout } from '../../services/logout';
import Swal from 'sweetalert2';

interface ChartsModalProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
  currentClient: Client;
}

interface RecordHistoric {
  dateFromLasterMedicalCare: string;
  medicalRecordHistoric: Record[];
}

const ChartModal = ({ state, setState, currentClient }: ChartsModalProps) => {
  const [currentRecordHistoric, setCurrentRecordHistoric] =
    useState<RecordHistoric>({} as RecordHistoric);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleModalClose = () => {
    setState(false);
  };

  useEffect(() => {
    if (currentClient.id) {
      setIsLoading(true);
      api
        .get(`medical-records?client_id=${currentClient.id}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('@tokenVitality')}`,
          },
        })
        .then(response => setCurrentRecordHistoric(response.data))
        .catch(err => {
          if (err.response.data.message === 'Invalid JWT token') {
            logout();
          } else {
            Swal.fire({
              title: 'Ops!',
              text: 'Houve um erro ao carregar seus dados.',
              icon: 'error',
              confirmButtonText: 'Atualizar',
              confirmButtonColor: '#ff312e',
            }).then(response => window.location.reload());
          }
        })
        .finally(() => setIsLoading(false));
    }
  }, [currentClient]);

  return (
    <ChartModalContainer className={state ? 'show' : ''}>
      <Form className="p-4 rounded">
        <div className="chart-header">
          <h1>Prontuário</h1>
          <span className="close" onClick={handleModalClose}>
            &times;
          </span>
        </div>
        <Container>
          <fieldset disabled>
            <Row className="m-2">
              <Col className="">
                <FormLabel>Paciente</FormLabel>
                <Form.Control
                  placeholder="Nome do paciente"
                  value={currentClient.name}
                />
              </Col>
              <Col md="4">
                <FormLabel>Tipo sanguíneo</FormLabel>
                <Form.Control
                  placeholder="tipo sanguíneo"
                  value={currentClient.blood_type}
                />
              </Col>
            </Row>
            <Row className="m-2">
              <Col>
                <FormLabel>Data de abertura</FormLabel>
                <Form.Control
                  type="date"
                  value={
                    currentClient.created_at
                      ? currentClient.created_at.split('T')[0]
                      : ''
                  }
                />
              </Col>
              <Col>
                <FormLabel>Último atendimento</FormLabel>
                {isLoading ? (
                  <div>Carregando...</div>
                ) : !currentRecordHistoric.medicalRecordHistoric.length ? (
                  <p>Nenhum atendimento cadastrado.</p>
                ) : (
                  <Form.Control
                    type="date"
                    value={
                      currentRecordHistoric.dateFromLasterMedicalCare &&
                      new Intl.DateTimeFormat('default', {
                        month: '2-digit',
                        day: '2-digit',
                      }).format(
                        new Date(
                          currentRecordHistoric.dateFromLasterMedicalCare
                        )
                      )
                    }
                  />
                )}
              </Col>
            </Row>
          </fieldset>
        </Container>
        <div className="appointments-container">
          <Row className="m-2">
            <Col className="col-lg-10 mx-auto">
              <h3>Atendimentos:</h3>
              <Accordion defaultActiveKey="0">
                <Card>
                  {isLoading ? (
                    <div>Carregando...</div>
                  ) : !currentRecordHistoric.medicalRecordHistoric.length ? (
                    <div>Nenhum atendimento cadastrado.</div>
                  ) : (
                    currentRecordHistoric.medicalRecordHistoric.map(record => (
                      <>
                        <Card.Header>
                          <Accordion.Toggle
                            as={Button}
                            variant="success"
                            eventKey="1"
                          >
                            {record.date &&
                              new Intl.DateTimeFormat('pt-BR').format(
                                new Date(record.date)
                              )}
                            <CgMoreO />
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <h4>Especialista:</h4>
                            <p>{record.specialist && record.specialist.name}</p>

                            <h4>Hora do atendimento:</h4>
                            <p>
                              {record.date &&
                                new Intl.DateTimeFormat('default', {
                                  hour: 'numeric',
                                  minute: 'numeric',
                                  hour12: false,
                                }).format(new Date(record.date))}
                            </p>

                            <h4>Descrição:</h4>
                            <p>{record.description}</p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </>
                    ))
                  )}
                </Card>
              </Accordion>
            </Col>
          </Row>
        </div>
      </Form>
    </ChartModalContainer>
  );
};

export default ChartModal;
