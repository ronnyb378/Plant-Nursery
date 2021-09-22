import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { actionSetResults } from '../redux/actions/results';
import AddPhoto from './AddPhoto'
import DatePicker from "react-datepicker"
import trash from '../images/trash-icon.png'

export default function EditPlant(props) {
    // const date = dateacquired.slice(0,10)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const results = useSelector((state) => state.results)
    const selectedPlant = results.find(function (currentPlant) {
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
    const [dateacquired, setDateAcquired] = useState(new Date(selectedPlant.dateacquired))
    const [healthrating, sethealthrating] = useState(selectedPlant.healthrating)
    const [location, setLocation] = useState(selectedPlant.location)
    const [photo, setPhoto] = useState(selectedPlant.photo)

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
                    let updatedPlant = { ...selectedPlant }
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
    }

    const handleDeletePlant = () => {
        fetch(`api/v1/plants/mygarden/${props.data.id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                fetch('api/v1/plants/mygarden')
                .then(res => res.json())
                .then(data => {
                    dispatch(actionSetResults(data))
                })
            })
    }
    return (
        <div>
            {!edit && <Button onClick={handleShow}>
                Edit
            </Button>}

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Plant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Label>Photo</Form.Label>
                        <AddPhoto value={photo} onChange={url => setPhoto(url)} />
                        <hr />
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name} onChange={e => setName(e.target.value)} />
                        <hr />
                        <Form.Label>Nickname</Form.Label>
                        <Form.Control value={nickname} onChange={e => setNickname(e.target.value)} />
                        <hr />
                        <Form.Label>Health</Form.Label>
                        <Form.Range value={healthrating} onChange={e => sethealthrating(e.target.value)} />
                        <hr />
                        <Form.Label>Species</Form.Label>
                        <Form.Control value={species} onChange={e => setSpecies(e.target.value)} />
                        <hr />
                        <Form.Label>How much sun?</Form.Label>
                        <Form.Range value={sun} onChange={e => setSun(e.target.value)} />
                        <hr />
                        <Form.Label>Water Frequency?</Form.Label>
                        {/* <Form.Control value={waterfrequency} onChange={e => setWaterfrequency(e.target.value)} /> */}
                        <br />
                        <Form.Check inline label="1-2 Week" name="water" type="radio" id="inline-radio-2" onChange={e => setWaterfrequency("1-2 Week")} />
                        <Form.Check inline label="3-4 Week" name="water" type="radio" id="inline-radio-2" onChange={e => setWaterfrequency("3-4 Week")} />
                        <Form.Check inline label="5+ Week" name="water" type="radio" id="inline-radio-2" onChange={e => setWaterfrequency("5+ Week")} />
                        <hr />
                        <Form.Label>Active Growth Period</Form.Label>
                        <Form.Control value={activegrowthperiod} onChange={e => setactivegrowthperiod(e.target.value)} />
                        <hr />
                        <Form.Label>Soil type</Form.Label>
                        <Form.Control value={soiltype} onChange={e => setSoiltype(e.target.value)} />
                        <hr />
                        <Form.Label>Fertilizer?</Form.Label>
                        <br />
                        <Form.Check inline label="yes" name="fertilizer" type="radio" id="inline-radio-1" onChange={e => setFertilizer("yes")} />
                        <Form.Check inline label="no" name="fertilizer" type="radio" id="inline-radio-1" onChange={e => setFertilizer("no")} />
                        <hr />
                        <Form.Label>Plant Description</Form.Label>
                        <Form.Control value={plantdescription} onChange={e => setPlantDescription(e.target.value)} />
                        <hr />
                        <Form.Label>Date Acquired</Form.Label>
                        <br />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg>
                        <DatePicker value={dateacquired} selected={dateacquired} onChange={e => setDateAcquired(e)} />
                        <hr />
                        <Form.Label>location</Form.Label>
                        <Form.Control value={location} onChange={e => setLocation(e.target.value)} />

                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                        <Button className="deletePlant" onClick={handleDeletePlant}>
                            <img className="trashIcon" src={trash} /> Delete Plant
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )

}
