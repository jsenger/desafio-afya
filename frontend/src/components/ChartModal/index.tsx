import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  Accordion,
  Card,
  Container,
  Form,
  Row,
  Col,
  Button,
  FormLabel,
} from "react-bootstrap";
import { CgMoreO } from "react-icons/cg";
import { Client } from "../../types";
import { api } from "../../services/api";
import { ChartModalContainer } from "./styles";

interface ChartsModalProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
  currentClient: Client;
}

const ChartModal = ({ state, setState, currentClient }: ChartsModalProps) => {
  const handleModalClose = () => {
    setState(false);
  };

  useEffect(() => {
    if (currentClient.id) {
      // api
      //   .get(`medical-records?client_id${currentClient.id}`, {
      //     headers: {
      //       authorization: `Bearer ${localStorage.getItem("@tokenVitality")}`,
      //     },
      //   })
      //   .then((response) => {
      //     console.log(response.data);
      //   });
    }
  }, [currentClient]);
  return (
    <ChartModalContainer className={state ? "show" : ""}>
      <Form className="p-4 rounded">
        <div className="chart-header">
          <h1>Prontuário</h1>
          <span className="close" onClick={handleModalClose}>
            &times;
          </span>{" "}
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
                      ? currentClient.created_at.split("T")[0]
                      : ""
                  }
                />
              </Col>
              <Col>
                <FormLabel>Último atendimento</FormLabel>
                <Form.Control type="date" />
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
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="info" eventKey="0">
                      Atendimento agendado <CgMoreO />
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <h4>Especialista:</h4>
                      <p>--------------</p>

                      <h4>Hora do atendimento:</h4>
                      <p>00:00:00</p>

                      <h4>Data:</h4>
                      <p>00/00/0000</p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant="success"
                      eventKey="1"
                    >
                      Atendimento Realizado <CgMoreO />
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <h4>Especialista:</h4>
                      <p>--------------</p>

                      <h4>Hora do atendimento:</h4>
                      <p>00:00:00</p>

                      <h4>Data:</h4>
                      <p>00/00/0000</p>

                      <h4>Descrição:</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="danger" eventKey="2">
                      Atendimento Cancelado <CgMoreO />
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <h4>Especialista:</h4>
                      <p>--------------</p>

                      <h4>Hora do atendimento:</h4>
                      <p>00:00:00</p>

                      <h4>Data:</h4>
                      <p>00/00/0000</p>
                    </Card.Body>
                  </Accordion.Collapse>
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
