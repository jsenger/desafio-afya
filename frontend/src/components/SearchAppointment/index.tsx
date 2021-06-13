import React from "react";
import {
  Accordion,
  Form,
  Row,
  Col,
  Button,
  FormLabel,
  Card,
} from "react-bootstrap";
import { BsChevronDoubleDown } from "react-icons/bs";

import AppointmentResults from "../AppointmentResults";

import { SearchContainer } from "./styles";

const SearchAppointment: React.FC = () => {
  return (
    <SearchContainer>
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
                  <Form.Control as="select">
                    <option>Luciana</option>
                    <option>Jéssica</option>
                    <option>Sillas</option>
                  </Form.Control>
                </Col>
                <Col md="6">
                  <FormLabel>Especialista</FormLabel>
                  <Form.Control as="select">
                    <option>João</option>
                    <option>Anna</option>
                    <option>Maria</option>
                  </Form.Control>
                </Col>
              </Row>
              <Row className="m-2">
                <Col md="4">
                  <FormLabel>Status</FormLabel>
                  <Form.Control as="select">
                    <option>Agendado</option>
                    <option>Realizado</option>
                    <option>Cancelado</option>
                  </Form.Control>
                </Col>
                <Col>
                  <FormLabel>Data de agendamento</FormLabel>
                  <Form.Control type="date" />
                </Col>
                <Col>
                  <FormLabel>Data de Atendimento</FormLabel>
                  <Form.Control type="date" />
                </Col>
              </Row>
              <Row className="m-4">
                <button type="submit" className="search-btn mx-auto">
                  Pesquisar
                </button>
              </Row>
              <Row>
                <AppointmentResults />
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </SearchContainer>
  );
};

export default SearchAppointment;
