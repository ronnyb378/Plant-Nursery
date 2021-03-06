import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'
import { actionLoggedIn } from '../redux/actions/user'
import { actionSetSuccess } from '../redux/actions/status'

export default function Profile() {
    const user = useSelector((state) => state.user.user)
    const [error, setError] = useState('')
    const [username, setUsername] = useState(user.username)
    const [newpassword, setNewpassword] = useState('')
    const [oldpassword, setOldpassword] = useState('')
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        fetch('/api/v1/users/edit', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                newpassword,
                oldpassword
            }),
        })
        .then(res => {
            const doneEdit = res.status === 200
            setEdit(!doneEdit)
            if (doneEdit) {
                let updatedUser = {...user}
                updatedUser.username=username
                dispatch(actionLoggedIn(updatedUser))
                setNewpassword('')
                setOldpassword('')
                dispatch(actionSetSuccess({success:'User information successfully changed'}))
                
            }
        })
        .catch(err => {
            setError(err)
        })
    }


    return (
        <div>
            <h2>Account</h2>
            <Container className="pt-4">
            {error && (<div className="error">{error}</div>)}
            <Row className="align-items-center justify-content-center">
            <Col  xs={12} md={8} lg={6}>
            <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control disabled={!edit} size="lg" value={username} onChange={e => setUsername(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control disabled={!edit} size="lg" value={newpassword} type="password" onChange={e => setNewpassword(e.target.value)}/>
                            </Form.Group>
                            {edit && <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Old Password</Form.Label>
                                <Form.Control required={newpassword.length} size="lg" value={oldpassword} type="password" onChange={e => setOldpassword(e.target.value)}/>
                            </Form.Group> }
                            {edit && <Button type="submit">Save</Button> }
                           {!edit && <Button onClick={() => setEdit(true)}>Edit</Button>}
                            
                        </Form>
                </Col>
                </Row>
            </Container>
        </div>
    )
}
