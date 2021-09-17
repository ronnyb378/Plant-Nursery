import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import plant from '../images/placeholderPlant.jpeg'
import EditPlant from './EditPlant'

export default function Plant(props) {
    return (
        <Col style={{ width: '12rem' }}>
            <Card className="plantCards">
                    <Card.Img width="100%" variant="top" src={props.data.photo || plant}/>
                <Card.Body>
                    <Card.Title>{props.data.name}</Card.Title>
                    <Card.Text>
                        {props.data.location}
                    </Card.Text>
                    {/* <Button variant="primary">Edit</Button> */}
                    <EditPlant data={props.data}/>
                    <Button as={Link} to="/:user/:plantId"variant="primary">New Event</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
