import React from 'react'
import { Card, Dropdown, DropdownButton, FloatingLabel, Form, Button, Container, Row, Col, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import plant from '../images/placeholderPlant.jpeg'

export default function Plant() {

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
                                <Card.Title>{selectedPlant.name}</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col>
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
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <Row style={{ height: "300px"}}xs={1} sm={1} md={2} className="justify-content-center align-items-center">
                    <Col >
                        {/* <Image src={plant} alt="placeholder plant" fluid /> */}
                        <DropdownButton id="dropdown-item-button" title="Dropdown button">
                            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                            <Dropdown.Item as="button">Action</Dropdown.Item>
                            <Dropdown.Item as="button">Another action</Dropdown.Item>
                            <Dropdown.Item as="button">Something else</Dropdown.Item>
                        </DropdownButton>
                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                    <Col className="h-100">
                        {/* Consider putting calendar in this column */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
