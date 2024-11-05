// CustomNavbar.js
import { Nav, Navbar, Container } from "react-bootstrap";
import "../styles/components/navbar.css";

function NavbarComponent() {
    return (
        <Navbar expand="md" variant="dark" className="custom-navbar">
            <Container fluid>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
                    <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
                    <Nav.Link href="#contact" className="nav-link-custom">Contact Me</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;