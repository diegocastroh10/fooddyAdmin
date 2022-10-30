import React from 'react';
import {Navbar, Nav, NavItem, Container, Dropdown} from 'react-bootstrap';
import '../index.css';

function MainNavbar() {
    return (
        <Container fluid className="Navbar">
            <Navbar     bg="white" sticky="top" expand="lg" className="justify-content-center">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto">
                        <Nav.Link href="/catalog">Bodega de productos</Nav.Link>
                    </Nav>
                    <Nav className="Navbar-Language">
                        <Dropdown as={NavItem} onSelect={()=>{console.log("CERRAR SESION")}}>
                            <Nav.Link href="/catalog">Cerrar Sesión</Nav.Link>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default MainNavbar;