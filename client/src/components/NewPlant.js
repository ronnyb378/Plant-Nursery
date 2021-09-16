import Button from '@restart/ui/esm/Button'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import DatePicker from "react-datepicker"
import AddPhoto from './AddPhoto';

import "react-datepicker/dist/react-datepicker.css";

export default function NewPlant() {
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')
    const [species, setSpecies] = useState('')
    const [sun, setSun] = useState('')
    const [waterfrequency, setWaterfrequency] = useState('')
    const [activegrowthperiod, setactivegrowthperiod] = useState('')
    const [soiltype, setSoiltype] = useState('')
    const [fertilizer, setFertilizer] = useState('')
    const [plantdescription, setPlantDescription] = useState('')
    const [dateacquired, setDateAcquired] = useState('')
    const [healthrating, sethealthrating] = useState('')
    const [location, setLocation] = useState('')

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
                sun
            })
        })
            .then((res => res.json()))
            .then(data => {
                console.log(data)
            })
        }
        // console.log()
    return (
        <Form onSubmit={handleSubmit}>
            <AddPhoto />
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
            <Form.Control value={waterfrequency} onChange={e => setWaterfrequency(e.target.value)} />
            <hr />
            <Form.Label>Active Growth Period</Form.Label>
            <Form.Control value={activegrowthperiod} onChange={e => setactivegrowthperiod(e.target.value)} />
            <hr />
            <Form.Label>Soil type</Form.Label>
            <Form.Control value={soiltype} onChange={e => setSoiltype(e.target.value)} />
            <hr />
            <Form.Label>Fertilizer</Form.Label>
            <Form.Control value={fertilizer} onChange={e => setFertilizer(e.target.value)} />
            <hr />
            <Form.Label>Plant Description</Form.Label>
            <Form.Control value={plantdescription} onChange={e => setPlantDescription(e.target.value)} />
            <hr />
            <Form.Label>Date Acquired</Form.Label>
            <DatePicker value={dateacquired} selected={dateacquired} onChange={e => setDateAcquired(e)} />
            <hr />
            <Form.Label>location</Form.Label>
            <Form.Control value={location} onChange={e => setLocation(e.target.value)} />
            <Button type="submit" >Add new plant</Button>
        </Form>
    )
}
