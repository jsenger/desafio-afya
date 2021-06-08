import { Dispatch, SetStateAction, useCallback, useState } from "react";
import {
  Accordion,
  AccordionCollapse,
  AccordionToggle,
  Card,
  Form,
  FormGroup,
  FormControl,
  Row,
  Col,
  Button,
  FormLabel,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";
import { CgMoreO } from "react-icons/cg";
import { ChartModalContainer } from "./styles";

interface ChartsModalProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

const ChartModal = ({ state, setState }: ChartsModalProps) => {
  const handleModalClose = () => {
    setState(false);
  };

  return (
    <ChartModalContainer className={state ? "show" : ""}>
      <Form className="p-4 rounded">
        <div className="chart-header">
          <h1>Prontuário</h1>
          <span className="close" onClick={handleModalClose}>
            &times;
          </span>{" "}
        </div>
        <div className="pacients-data">
          <fieldset disabled>
            <Row className="m-2">
              <Col>
                <Form.Control placeholder="Nome do paciente" />
              </Col>
              <Col>
                <Form.Control placeholder="Idade" />
              </Col>
            </Row>
            <Row className="m-2">
              <Col>
                <Form.Control placeholder="Último atendimento" />
              </Col>
            </Row>
          </fieldset>
        </div>
        <div className="appointments-container">
          <Row className="m-2">
            <Col className="col-lg-10 mx-auto">
              <h3>Atendimentos:</h3>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Atendimento agendado <CgMoreO />
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <div>
                        <h4>Hora do atendimento:</h4>
                        <p>00:00:00</p>
                      </div>
                      <div>
                        <h4>Data:</h4>
                        <p>00/00/0000</p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      Atendimento Realizado <CgMoreO />
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <div>
                        <h4>Hora do atendimento:</h4>
                        <p>00:00:00</p>
                      </div>
                      <div>
                        <h4>Data:</h4>
                        <p>00/00/0000</p>
                      </div>
                      <div>
                        <h4>Descrição:</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </p>
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      Atendimento Cancelado <CgMoreO />
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <div>
                        <h4>Hora do atendimento:</h4>
                        <p>00:00:00</p>
                      </div>
                      <div>
                        <h4>Data:</h4>
                        <p>00/00/0000</p>
                      </div>
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
