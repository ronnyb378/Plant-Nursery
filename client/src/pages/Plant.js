import React, { useState } from 'react'
import { Card, Dropdown, DropdownButton, FloatingLabel, Form, Button, Container, Row, Col, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Calendar from '../components/Calendar'
import plant from '../images/placeholderPlant.jpeg'

export default function Plant(props) {
    // console.log(props)

    // grabbing plant id from route
    const { plantId } = useParams()

    // parsing since integer
    const stringPlantId = parseInt(plantId)

    // grabbing results array from redux
    const results = useSelector((state) => state.results)

    // grabbing specific plant that was clicked on from results array
    const selectedPlant = results.find(function(currentPlant) {
        return currentPlant.id === stringPlantId
    })

    const [ type, setType ] = useState('');
    const [ text, setText ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div>
            <Container className="pt-4">
                <h2>Plant Profile</h2>
                <Card>
                    <Row className="justify-content-center" >
                        <Col xs={6} md={4} >
                            <Card.Img className="h-100" src={plant} />
                        </Col>
                        <Col xs={12} md={8}>
                            <Card.Body>
                                <Card.Title>{selectedPlant.name}</Card.Title><hr />
                                <Card.Text>
                                <Row className="plantDetails">
                                    <Col >
                                        <b>Nickname:</b> {selectedPlant.nickname}<br />
                                        <b>Description:</b> {selectedPlant.plantdescription} <br />
                                        <b>Fertilizer:</b> {selectedPlant.fertilizer} <br />
                                        <b>Health Rating:</b> {selectedPlant.healthrating}<br />
                                        <b>Location:</b> {selectedPlant.location}
                                    </Col>
                                    <Col>
                                        <b>Species: </b>{selectedPlant.species}<br />
                                        <b>Sun: </b>{selectedPlant.sun}<br />
                                        <b>Water Frequency: </b>{selectedPlant.waterfrequency}<br />
                                        <b>Soil Type: </b>{selectedPlant.soiltype}<br />
                                        <b>Active Growth Period: </b>{selectedPlant.activegrowthperiod}
                                    </Col>
                                </Row>
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <Row style={{ height: "auto"}}xs={1} sm={1} md={2} className="justify-content-center align-items-center pb-3">
                    <Col >
                        <h4>Add an Entry</h4>
                        <Form onSubmit={handleSubmit}>
                            <DropdownButton onSelect={(e) => setType(e)} id="dropdown-item-button" title="Type">
                                <Dropdown.Item eventKey="Watered">Watered</Dropdown.Item>
                                <Dropdown.Item eventKey="Potted">Potted</Dropdown.Item>
                                <Dropdown.Item eventKey="Fertilized">Fertilized</Dropdown.Item>
                                <Dropdown.Item eventKey="Relocated">Relocated</Dropdown.Item>
                                <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
                            </DropdownButton>
                            <FloatingLabel className="pt-1" controlId="floatingTextarea2" label="Comments">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Comments"
                                    style={{ height: '100px' }}
                                    onChange={(e => setText(e.target.value))}
                                />
                            </FloatingLabel>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                        {/* Consider putting calendar in this column */}
                        <Calendar className="calColumn" />
                    </Col>
                </Row>
                <h4>Entries</h4>
            </Container>
        </div>
    )
}
