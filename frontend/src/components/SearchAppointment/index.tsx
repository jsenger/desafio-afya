import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import {
  Accordion,
  Form,
  Row,
  Col,
  Button,
  FormLabel,
  Card,
} from 'react-bootstrap';
import { BsChevronDoubleDown } from 'react-icons/bs';
import Select from 'react-select';
import Swal from 'sweetalert2';

import AppointmentResults from '../AppointmentResults';

import { SearchContainer } from './styles';
import { Appointment, SelectOption } from '../../types';
import { search } from '../../services/search';

interface SearchAppointmentProps {
  clients: SelectOption[];
  specialists: SelectOption[];
  handleModalOpen: () => void;
  setCurrentAppointment: Dispatch<SetStateAction<Appointment>>;
}

interface SearchParams {
  status: string | null;
  client_id: string | null;
  specialist_id: string | null;
  date: string | null;
  appointment_date: string | null;
}

const SearchAppointment = ({
  clients,
  specialists,
  handleModalOpen,
  setCurrentAppointment,
}: SearchAppointmentProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [searchParams, setSearchParams] = useState<SearchParams>(
    {} as SearchParams
  );

  const [result, setResult] = useState<Appointment[]>([{} as Appointment]);

  const searchSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setIsLoading(true);

      const response = await search({
        endpoint: 'medical-cares',
        params: searchParams,
      });

      console.log(response.data)

      if (response.data.length) {
        setIsLoading(false);

        setResult(response.data);
      } else {
        setIsLoading(false);
        Swal.fire({
          title: 'Ops!',
          text: 'Nenhum resultado encontrado.',
          icon: 'error',
          confirmButtonText: 'Fechar',
          confirmButtonColor: '#ff312e',
        });
      }
    },
    [setResult, searchParams]
  );

  return (
    <SearchContainer onSubmit={searchSubmit}>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} eventKey="0">
              Pesquisa <BsChevronDoubleDown />
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Row className="m-2">
                <Col md="6">
                  <FormLabel>Paciente</FormLabel>
                  <Select
                    className="select"
                    name="name"
                    id="name"
                    options={[
                      ...clients,
                      { value: '', label: 'Nenhum paciente' },
                    ]}
                    required
                    onChange={e =>
                      setSearchParams({
                        ...searchParams,
                        client_id: e?.value || '',
                      })
                    }
                  ></Select>
                </Col>
                <Col md="6">
                  <FormLabel>Especialista</FormLabel>
                  <Select
                    className="select"
                    name="name"
                    id="name"
                    options={[
                      ...specialists,
                      { value: '', label: 'Nenhum especialista' },
                    ]}
                    required
                    onChange={e =>
                      setSearchParams({
                        ...searchParams,
                        specialist_id: e?.value || '',
                      })
                    }
                  ></Select>
                </Col>
              </Row>
              <Row className="m-2">
                <Col md="4">
                  <FormLabel>Status</FormLabel>
                  <Form.Control
                    as="select"
                    onChange={e =>
                      setSearchParams({
                        ...searchParams,
                        status: e.target.value,
                      })
                    }
                  >
                    <option value=""></option>
                    <option value="AGENDADO">Agendado</option>
                    <option value="REALIZADO">Realizado</option>
                    <option value="CANCELADO">Cancelado</option>
                  </Form.Control>
                </Col>
                <Col>
                  <FormLabel>Data de agendamento</FormLabel>
                  <Form.Control
                    type="date"
                    onChange={e => {
                      const date =
                        new Date(e.target.value) instanceof Date &&
                        !isNaN(new Date(e.target.value).valueOf())
                          ? new Date(e.target.value).toISOString()
                          : null;

                      setSearchParams({
                        ...searchParams,
                        appointment_date: date,
                      });
                    }}
                  />
                </Col>
                <Col>
                  <FormLabel>Data de Atendimento</FormLabel>
                  <Form.Control
                    type="date"
                    onChange={e => {
                      const date =
                        new Date(e.target.value) instanceof Date &&
                        !isNaN(new Date(e.target.value).valueOf())
                          ? new Date(e.target.value).toISOString()
                          : null;

                      setSearchParams({
                        ...searchParams,
                        date,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row className="m-4">
                <button type="submit" className="search-btn mx-auto">
                  {isLoading ? 'Pesquisando...' : 'Pesquisar'}
                </button>
              </Row>
              <Row>
                <AppointmentResults
                  result={result}
                  handleModalOpen={handleModalOpen}
                  setCurrentAppointment={setCurrentAppointment}
                  isLoading={isLoading}
                />
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </SearchContainer>
  );
};

export default SearchAppointment;
