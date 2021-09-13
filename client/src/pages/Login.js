import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { actionLoggedIn } from '../redux/actions/user'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
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
                setError(data.error)
            } else {
                dispatch(actionLoggedIn(data.user))
                history.push('/api/v1/plants')
            }
        })
    }

    return (
        <div>
            <Container className="pt-4">
                <Row className="align-items-center" xs={1} md={2}>
                    <Col>
                        {error && (<div className="error">{error}</div>)}
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
                                <Form.Control size="lg" value={password} onChange={e => setPassword(e.target.value)}/>
                            </Form.Group>
                            <Button type="submit">Login</Button>
                            <p style={{textAlign: 'center'}}className="greySmall">-or-</p>
                        </Form>
                        <Button as={Link} to="/garden">Sign in as a guest</Button>
                        {/* <Link to="/signup">Sign Up</Link> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
