import React, { useState } from 'react'
import plus from '../images/plusIcon.png'
import { Modal, Button, Col, Card } from 'react-bootstrap'
import NewPlant from './NewPlant';
import plus2 from '../images/plus-icon.png'

export default function AddPlant() {
    const [show, setShow] = useState(false);

    const handleClose = (event) => setShow(false);
    const handleShow = () => setShow(true);


    return (
        // <Col style={{ width: '12rem' }}>
        //     <Card className="plantCards">
        //         <Card.Img width="100%" variant="top" src={plus} />
        //         <Card.Body>
        //             <Card.Title></Card.Title>
        //             <Card.Text>
        //             </Card.Text>
        //             <Button variant="primary" onClick={handleShow} className='newButton'> 
        //                 Create New Plant
        //             </Button>

        //             <Modal show={show} onHide={handleClose} animation={false}>
        //                 <Modal.Header closeButton>
        //                     <Modal.Title>New Plant</Modal.Title>
        //                 </Modal.Header>
        //                 <Modal.Body>
        //                     <NewPlant hidden="hide" handleClose={handleClose}/>
        //                 </Modal.Body>
        //             </Modal>
        //         </Card.Body>
        //     </Card>
        // </Col>

        <Col className="newPlant" style={{ width: '12rem' }}>
        <Card className="plantCards">
            <Card.Img width="100%" variant="top" src={plus2} />
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                </Card.Text>
                <Button onClick={handleShow} variant="primary" className="newButton"> 
                    Create New Plant
                </Button>

                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Plant</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewPlant hidden="hide" handleClose={handleClose}/>
                    </Modal.Body>
                </Modal>
            </Card.Body>
        </Card>
    </Col>
    )
}
