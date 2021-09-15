import { Store } from 'express-session'
import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function NavBar() {
    const user = useSelector((state)=>state.users)
    // console.log(user)
    function nBar(toggle) {((toggle === true)?
            (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
            </Navbar>)
    : 
            (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                                Log out
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>)
    )
    // console.log(user.checked)
}
    return (
        <div>
            {nBar(user.checked)}
        </div>
    )
}
