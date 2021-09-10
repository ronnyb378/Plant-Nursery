import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function SignUp() {
    return (
        <div>
            <h2>Sign up</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username or Email</Form.Label>
                    <Form.Control type="email"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Sign me up!
                </Button>
            </Form>
        </div>
    )
}
