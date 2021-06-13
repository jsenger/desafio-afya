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

import AppointmentResults from '../AppointmentResults';

import { SearchContainer } from './styles';
import { SelectOption } from '../../types';

interface SearchAppointmentProps {
  clients: SelectOption[];
  specialists: SelectOption[];
}

const SearchAppointment = ({
  clients,
  specialists,
}: SearchAppointmentProps) => {
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
                  <Select
                    className="select"
                    name="name"
                    id="name"
                    options={[...clients, {value: '', label: 'Nenhum paciente'}]}
                    required
                  ></Select>
                </Col>
                <Col md="6">
                  <FormLabel>Especialista</FormLabel>
                  <Select
                    className="select"
                    name="name"
                    id="name"
                    options={[...specialists, {value: '', label: 'Nenhum especialista'}]}
                    required
                  ></Select>
                </Col>
              </Row>
              <Row className="m-2">
                <Col md="4">
                  <FormLabel>Status</FormLabel>
                  <Form.Control as="select">
                    <option value=""></option>
                    <option value="AGENDADO">Agendado</option>
                    <option value="REALIZADO">Realizado</option>
                    <option value="CANCELADO">Cancelado</option>
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
