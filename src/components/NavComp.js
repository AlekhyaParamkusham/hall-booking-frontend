import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavComp = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          HALL - BOOKING
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/halls">
              HALLS
            </Nav.Link>
            <Nav.Link as={Link} to="/customers">
              CUSTOMERS
            </Nav.Link>
            <Nav.Link as={Link} to="/create-customer">
              NEW CUSTOMER
            </Nav.Link>
            <Nav.Link as={Link} to="/create-hall">
              NEW HALLS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComp;
