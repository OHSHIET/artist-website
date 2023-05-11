import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import globalvars from '../globalvars';

export default function NavbarHeader() {
      console.log(globalvars)
      return (
            <Navbar bg="dark" variant="dark" expand="lg">
                  <Container fluid>
                        <Link className="navbar-brand" to='/'>Aesti Wearlienn</Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="me-auto">
                                    <Link className="nav-link" to={globalvars.addToMainPath('about')}>О сайте</Link>
                                    
                              </Nav>
                        </Navbar.Collapse>
                  </Container>
            </Navbar>
      );
}