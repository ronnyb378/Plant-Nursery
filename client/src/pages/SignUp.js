import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <div>
            <Container className="pt-4">
                <Row className="align-items-center" xs={1} md={2}>
                    <Col >
                        <h2 className="signup-heading">Create<br /> Account</h2><p>Already have an account? Login <Link to="/">here.</Link></p>
                    </Col>
                    <Col >
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username or Email</Form.Label>
                                <Form.Control size="lg"type="text"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control size="lg"type="password" />
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
