// CustomNavbar.js
import { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
    const [hovered, setHovered] = useState<number | null>(null);

    const navItems = [
        { label: "Projects", to: "/projects" },
        { label: "About", to: "/about" },
        { label: "Contact Me", to: "/contact" },
    ];

    return (
        <Container fluid className="custom-navbar position-fixed top-0 start-0 d-flex align-items-center px-4">
            <Nav className="ms-auto">
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.to}
                        className={`nav-item ${hovered === index ? "hovered" : ""}`}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        {item.label}
                    </Link>
                ))}
            </Nav>
        </Container>
    );
}

export default Navbar;