import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Navbar sticky="top" bg="color" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">
            <span className="brand">Food's House</span>
          </Navbar.Brand>
          <Navbar.Toggle id="toggle" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="text-center" id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/home">
                <span className="nav-text">Home</span>
              </Nav.Link>
              <Nav.Link href="#features">
                <span className="nav-text">About</span>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <span className="nav-text">Menu</span>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <span className="nav-text">Service</span>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <span className="nav-text">Gallery</span>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <span className="nav-text">Blogs</span>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <span className="nav-text">Contact</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
