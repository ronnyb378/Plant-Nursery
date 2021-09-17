import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker"
import AddPhoto from './AddPhoto';


import "react-datepicker/dist/react-datepicker.css";

export default function NewPlant() {
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')
    const [species, setSpecies] = useState('')
    const [sun, setSun] = useState(50)
    const [waterfrequency, setWaterfrequency] = useState('')
    const [activegrowthperiod, setactivegrowthperiod] = useState('')
    const [soiltype, setSoiltype] = useState('')
    const [fertilizer, setFertilizer] = useState('')
    const [plantdescription, setPlantDescription] = useState('')
    const [dateacquired, setDateAcquired] = useState('')
    const [healthrating, sethealthrating] = useState(50)
    const [location, setLocation] = useState('')
    const [photo, setPhoto] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
        fetch('/api/v1/plants/newplant', {
            method: 'POST',
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
            .then((res => res.json()))
            .then(data => {
                console.log(data)
            })
    }
    // console.log(fertilizer)
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label>Photo</Form.Label>
            <AddPhoto value={photo} onChange={url => setPhoto(url)}/>
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
            {/* <Form.Control value={sun} onChange={e => setSun(e.target.value)}/> */}
            <hr />
            <Form.Label>Water Frequency?</Form.Label>
            {/* <Form.Control value={waterfrequency} onChange={e => setWaterfrequency(e.target.value)} /> */}
            <br/>
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
            <Button type="submit" variant="primary" className="submit-button">Add new plant</Button>
        </Form>
    )
}
