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
            <Container className="pt-4">
                <Row className="align-items-center" xs={1} md={2}>
                    <Col>
                        {error && (<div className="error">{error}</div>)}
                        <h2 className="signup-heading">Create<br /> Account</h2><p className="greySmall">Already have an account? Login <Link to="/">here</Link>.</p>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username or Email</Form.Label>
                                <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control size="lg"type="password" value={password} onChange={e => setPassword(e.target.value)} />
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
