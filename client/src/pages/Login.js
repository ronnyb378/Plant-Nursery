import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { actionLoggedIn } from '../redux/actions/user'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { actionClearAlerts, actionSetError } from '../redux/actions/status'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const [error, setError] = useState()
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('clicked')
        fetch('/api/v1/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(res=>res.json())
        .then(data=> {
            if (data.error) {
                dispatch(actionSetError(data))
            } else {
                dispatch(actionLoggedIn(data.user))
                // if successfully logged in after having errors on login page, 
                // state.status is set to empty object
                dispatch(actionClearAlerts())
                history.push('/mygarden')
            }
        })
    }

    const handleGuestLogin = () => {
        fetch('/api/v1/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: "guest",
                password: "password"
            })
        })
        .then(res=>res.json())
        .then(data=> {
            if (data.error) {
                // setError(data.error)
            } else {
                dispatch(actionLoggedIn(data.user))
                history.push('/mygarden')
            }
        })
    }

    return (
        <div>
            <Container className="pt-4">
                <Row className="align-items-center" xs={1} md={2}>
                    <Col>
                        <h2 className="signup-heading">Log in<br />to your<br/>account</h2>
                        <p className="greySmall">Don't have an account? <Link to="/signup">Sign up</Link></p>
                    </Col>
                    <Col>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control size="lg" value={username} onChange={e => setUsername(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control size="lg" value={password} type="password" onChange={e => setPassword(e.target.value)}/>
                            </Form.Group>
                            <Button type="submit">Login</Button>
                            <p style={{textAlign: 'center'}}className="greySmall">-or-</p>
                        </Form>
                        <Button onClick={handleGuestLogin} className="guestButton">Sign in as a guest</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
