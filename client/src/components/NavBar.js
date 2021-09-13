import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function NavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">🌱 Plant Nursery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Something</Nav.Link>
                            <Nav.Link href="#pricing">Something2</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="/login">
                                Log in
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
