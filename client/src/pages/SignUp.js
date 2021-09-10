import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

export default function SignUp() {
    return (
        <div>
            <Container>
                <Row xs={1} md={2} className="justify-content-center">
                    <Col>
                    <h2>Sign up</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username or Email</Form.Label>
                                <Form.Control type="text"/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
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
