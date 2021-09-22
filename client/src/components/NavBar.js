import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import avatar from '../images/profile-icon.png'
import plantIcon from '../images/plant-icon.png'

export default function NavBar(props) {
    const history = useHistory()
    const handleLogOut = (e) => {
        e.preventDefault()
        console.log('clicked and prevented default')
        fetch('/api/v1/users/logout')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                history.push('/')
                history.go(0)
            })
    }

    const user = useSelector((state) => state.user.user)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/"><img className="avatar" src={plantIcon} /> Plant Nursery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/mygarden">My Garden</Nav.Link>
                        </Nav>
                        <Nav>
                        <Nav.Link eventKey={3} as={Link} to="/profile">
                                {(user) ? ( <div><img className="avatar"src={avatar} /> {user.username}</div>) : ''}
                        </Nav.Link>
                        {(user) ? 
                            (<Nav.Link eventKey={2} href="/logout" onClick={handleLogOut}>
                                Log out
                            </Nav.Link>) : (
                                <Nav.Link eventKey={2} href="/">
                                Log in
                            </Nav.Link>
                            )
                        }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}