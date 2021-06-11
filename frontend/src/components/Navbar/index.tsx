import { Link } from "react-router-dom";
import { Navigation } from "./styles";

import { Navbar, Nav, Button, Form } from "react-bootstrap";

const NavigationBar: React.FC = () => {
  return (
    <Navigation>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img
            src="./img/vit_logo.svg"
            width="80"
            height="80"
            className="d-inline-block align-center"
            alt="Vitality logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav-links-container">
          <Nav className="mr-auto nav-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#app">Aplicação</Nav.Link>
            <Nav.Link href="#about">Sobre nós</Nav.Link>
            <Nav.Link href="#contact">Contato</Nav.Link>
          </Nav>
          <Form inline>
            <Button className="nav-btns">Login</Button>
            <Button className="nav-btns">Cadastro</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Navigation>
  );
};

export default NavigationBar;
