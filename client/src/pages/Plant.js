import React, { useEffect, useState } from 'react'
import { Card, Dropdown, DropdownButton, FloatingLabel, Form, Button, Container, Row, Col, ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Calendar from '../components/Calendar'
import Entry from '../components/Entry'
import plant from '../images/placeholderPlant.jpeg'

export default function Plant() {
    // console.log(props)

    // grabbing plant id from route
    const { plantId } = useParams();

    // parsing since integer
    const stringPlantId = parseInt(plantId)

    // grabbing results array from redux
    const results = useSelector((state) => state.results)
    // console.log(results)
    // grabbing specific plant that was clicked on from results array
    const selectedPlant = results.find(function(currentPlant) {
        return currentPlant.id === stringPlantId
    })
    // console.log(selectedPlant)

    const [ title, setTitle ] = useState('Type')
    const [ type, setType ] = useState('');
    const [ text, setText ] = useState('');
    const [ entries, setEntries ] = useState([])

    const orderedEvents = entries.sort((a, b) => {
        let aId = a.id;
        let bId = b.id;
        if(aId > bId) {
            return -1;
        }
        if(aId < bId ) {
            return 1;
        }
        return 0;
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`api/v1/plants/events/${stringPlantId}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                type,
                text             
            })
        })
        .then(res => res.json())
        .then(data => {
            fetchPlant(stringPlantId)
        })
    }

    useEffect(() => {
        fetchPlant(stringPlantId)
    }, [stringPlantId])

    function fetchPlant(id) {
        fetch(`api/v1/plants/${id}`)
        .then(res => res.json())
        .then(data => {
            setEntries(data)
        })
    }


    return (
        <div>
            <Container className="pt-4">
                <h2>Plant Profile</h2>
                <Card>
                    <Row className="justify-content-center">
                        <Col xs={6} md={4} >
                            <Card.Img className="h-100" src={selectedPlant.photo} />
                        </Col>
                        <Col xs={12} md={8}>
                            <Card.Body>
                                <Card.Title>{selectedPlant.name}</Card.Title><hr />
                                <Card.Text>
                                <Row className="plantDetails">
                                    <Col >
                                        <div>
                                            <b>Nickname:</b> {selectedPlant.nickname}<br />
                                            <b>Description:</b> {selectedPlant.plantdescription} <br />
                                            <b>Fertilizer:</b> {selectedPlant.fertilizer} <br />
                                            <b>Health Rating:</b> {selectedPlant.healthrating}<br />
                                            <b>Location:</b> {selectedPlant.location}
                                        </div>
                                    </Col>
                                    <Col>
                                        <div>
                                            <b>Species: </b>{selectedPlant.species}<br />
                                            <b>Sun: </b>{selectedPlant.sun}<br />
                                            <b>Water Frequency: </b>{selectedPlant.waterfrequency}<br />
                                            <b>Soil Type: </b>{selectedPlant.soiltype}<br />
                                            <b>Active Growth Period: </b>{selectedPlant.activegrowthperiod}
                                        </div>
                                    </Col>
                                </Row>
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <Row style={{ height: "auto"}}xs={1} sm={1} md={2} className="justify-content-center align-items-center pb-3 pt-4">
                    <Col >
                        <h4>Add an Entry</h4>
                        <Form onSubmit={handleSubmit}>
                            <DropdownButton justified onSelect={(e) => {
                                setTitle(e);
                                setType(e)}} id="dropdown-item-button" title={title}>
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
                        <Calendar className="calColumn" plantId={plantId} events={entries}/>
                    </Col>
                </Row>
                <h4>Entries</h4>
                <ListGroup>
                    {entries && orderedEvents.map((entry) => {
                        return <Entry key={entry.id} data={entry} />
                    }) }
                </ListGroup>
            </Container>
        </div>
    )
}
