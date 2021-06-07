import { Dispatch, SetStateAction, useCallback, useState } from "react";
import {
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
      <Form className="p-2 rounded">
        <Button variant="dark" onClick={handleModalClose}>
          Fechar
        </Button>{" "}
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
        <Row className="m-2">
          <Col className="col-md-6">
            <FormLabel>Atendimentos agendados</FormLabel>
            <ListGroup variant="flush" className="rounded">
              <ListGroupItem className="list">Atendimento</ListGroupItem>
              <ListGroupItem className="list">Atendimento</ListGroupItem>
              <ListGroupItem className="list">Atendimento</ListGroupItem>
              <ListGroupItem className="list">Atendimento</ListGroupItem>
              <ListGroupItem className="list">Atendimento</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row className="m-2">
          <Col>
            <Form.Control as="textarea" placeholder="Queixa" />
          </Col>
        </Row>
      </Form>
    </ChartModalContainer>
  );
};

export default ChartModal;
