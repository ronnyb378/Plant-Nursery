import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { actionSetResults } from '../redux/actions/results';
import AddPhoto from './AddPhoto'

export default function EditPlant(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const results = useSelector((state) => state.results)
    const selectedPlant = results.find(function(currentPlant) {
        return currentPlant.id === props.data.id
    })

    const dispatch = useDispatch()

    const [name, setName] = useState(selectedPlant.name)
    const [nickname, setNickname] = useState(selectedPlant.nickname)
    const [species, setSpecies] = useState(selectedPlant.species)
    const [sun, setSun] = useState(selectedPlant.sun)
    const [waterfrequency, setWaterfrequency] = useState(selectedPlant.waterfrequency)
    const [activegrowthperiod, setactivegrowthperiod] = useState(selectedPlant.activegrowthperiod)
    const [soiltype, setSoiltype] = useState(selectedPlant.soiltype)
    const [fertilizer, setFertilizer] = useState(selectedPlant.fertilizer)
    const [plantdescription, setPlantDescription] = useState(selectedPlant.plantdescription)
    const [dateacquired, setDateAcquired] = useState(selectedPlant.dateacquired)
    const [healthrating, sethealthrating] = useState(selectedPlant.healthrating)
    const [location, setLocation] = useState(selectedPlant.location)
    const [photo, setPhoto] = useState(selectedPlant.photo)

    const [error, setError] = useState('')
    const [edit, setEdit] = useState(false)

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
                sun,
                photo
            })
        })
        .then(res => {
            const doneEdit = res.status === 200
            setEdit(!doneEdit)
            if (doneEdit) {
                let updatedPlant = {...selectedPlant}
                updatedPlant.name = name
                
            }
            setShow(false)
            // window.location.reload();
            fetch('api/v1/plants/mygarden')
            .then(res => res.json())
            .then(data => {
                dispatch(actionSetResults(data))
            })
        })
        .catch(err => {
            setError(err)
        })
    }

    const handleDeletePlant = () => {
        fetch(`api/v1/plants/mygarden/${props.data.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div>
            {!edit && <Button variant="primary" onClick={handleShow}>
                Edit
            </Button>}

        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Plant</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>Photo</Form.Label>
                    <AddPhoto value={photo} onChange={url => setPhoto(url)}/>
                    <Form.Label>Name</Form.Label>        
                    <Form.Control  value={name} onChange={e => setName(e.target.value)}/>
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
                    <Button variant="primary" onClick={handleDeletePlant}>
                        Delete Plant
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    </div>
    )

    }
