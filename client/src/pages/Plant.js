import React from 'react'
import Calendar from '../components/Calendar'
import { Dropdown, DropdownButton, FloatingLabel, Form, Button, Container, Row, Col, Image } from 'react-bootstrap'
import plant from '../images/placeholderPlant.jpeg'

export default function Plant(props) {
    console.log(props)
    return (
        <div>
            <h2>plant</h2>
            
            {/* <Container> */}
                <Row style={{height: "300px"}} xs={1} sm={1} md={2} className="justify-content-center align-items-center">
                    <Col >
                    <Image src={plant} alt="placeholder plant" fluid/>
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
                        <Calendar />
                    </Col>
                </Row>
            {/* </Container> */}
        </div>
    )
}
