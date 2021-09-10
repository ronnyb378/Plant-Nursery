import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/api/v1/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setError(data.error)
                } else {
                    // history.push('/login')
                }
            })
    }

    return (
        <div>
            <Container>
                <Row xs={1} md={2} className="justify-content-center">
                    <Col>
                        {error && (<div className="error">{error}</div>)}
                        <h2>Sign up</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username or Email</Form.Label>
                                <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                            </Form.Group>
                            <Button type="submit">
                                Sign me up!
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
