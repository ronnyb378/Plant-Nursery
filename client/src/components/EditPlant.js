import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux';

export default function EditPlant(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [name, setName] = useState(props.data.name)
    const [nickname, setNickname] = useState(props.data.nickname)
    const [species, setSpecies] = useState(props.data.species)
    const [sun, setSun] = useState(props.data.sun)
    const [waterfrequency, setWaterfrequency] = useState(props.data.waterfrequency)
    const [activegrowthperiod, setactivegrowthperiod] = useState(props.data.activegrowthperiod)
    const [soiltype, setSoiltype] = useState(props.data.soiltype)
    const [fertilizer, setFertilizer] = useState(props.data.fertilizer)
    const [plantdescription, setPlantDescription] = useState(props.data.plantdescription)
    const [dateacquired, setDateAcquired] = useState(props.data.dateacquired)
    const [healthrating, sethealthrating] = useState(props.data.healthrating)
    const [location, setLocation] = useState(props.data.location)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
        fetch(`/api/v1/plants/mygarden/${props.data.id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                healthrating,
                species,
                nickname,
                waterfrequency,
                activegrowthperiod,
                soiltype,
                fertilizer,
                plantdescription,
                dateacquired,
                location,
                sun
            })
        })
        // .then((res=>res.json()))
        // .then(data=>{
        //     // if (data.error) {
        //         // alert(data.error)
        //     // }
        //     setShow(false)
        // })
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>

        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>Name</Form.Label>        
                    <Form.Control value={name} onChange={e => setName(e.target.value)}/>
                    <Form.Label>Nickname</Form.Label>        
                    <Form.Control value={nickname} onChange={e => setNickname(e.target.value)}/>
                    <Form.Label>healthrating (1-5)</Form.Label>        
                    <Form.Control value={healthrating} onChange={e => sethealthrating(e.target.value)}/>
                    <Form.Label>Species</Form.Label>        
                    <Form.Control value={species} onChange={e => setSpecies(e.target.value)}/>
                    <Form.Label>How much sun?</Form.Label>        
                    <Form.Control value={sun} onChange={e => setSun(e.target.value)}/>
                    <Form.Label>Water Frequency?</Form.Label>        
                    <Form.Control value={waterfrequency} onChange={e => setWaterfrequency(e.target.value)}/>
                    <Form.Label>Active Growth Period</Form.Label>        
                    <Form.Control value={activegrowthperiod} onChange={e => setactivegrowthperiod(e.target.value)}/>
                    <Form.Label>Soil type</Form.Label>        
                    <Form.Control value={soiltype} onChange={e => setSoiltype(e.target.value)}/>
                    <Form.Label>Fertilizer</Form.Label>        
                    <Form.Control value={fertilizer} onChange={e => setFertilizer(e.target.value)}/>
                    <Form.Label>Plant Description</Form.Label>        
                    <Form.Control value={plantdescription} onChange={e => setPlantDescription(e.target.value)}/>
                    <Form.Label>Date Acquired</Form.Label>        
                    <Form.Control value={dateacquired} onChange={e => setDateAcquired(e.target.value)}/>
                    <Form.Label>location</Form.Label>        
                    <Form.Control value={location} onChange={e => setLocation(e.target.value)}/>
                    <Button variant="primary" type="submit">
                    Save Changes
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    </div>
    )
}
