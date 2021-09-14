import Button from '@restart/ui/esm/Button'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

export default function NewPlant() {
    // todo: list -> 
    // name, healthrating, species, nickname, sun, waterfrequency, activegrowthperiod, soiltype, fertilizer, plantdescription, dateacquired, location
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')
    const [species, setSpecies] = useState('')
    const [sun, setSun] = useState('')
    const [waterfrequency, setWaterfrequency] = useState('')
    const [growthPeriod, setGrowthperiod] = useState('')
    const [soilType, setSoilType] = useState('')
    const [fertilizer, setFertilizer] = useState('')
    const [plantdescription, setPlantDescription] = useState('')
    const [dateacquired, setDateAcquired] = useState('')
    const [health, setHealth] = useState('')
    const [location, setLocation] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label>Name</Form.Label>        
            <Form.Control value={name} onChange={e => setName(e.target.value)}/>
            <Form.Label>Nickname</Form.Label>        
            <Form.Control value={nickname} onChange={e => setNickname(e.target.value)}/>
            <Form.Label>Health (1-5)</Form.Label>        
            <Form.Control value={health} onChange={e => setHealth(e.target.value)}/>
            <Form.Label>Species</Form.Label>        
            <Form.Control value={species} onChange={e => setSpecies(e.target.value)}/>
            <Form.Label>How much sun?</Form.Label>        
            <Form.Control value={sun} onChange={e => setSun(e.target.value)}/>
            <Form.Label>Water Frequency?</Form.Label>        
            <Form.Control value={waterfrequency} onChange={e => setWaterfrequency(e.target.value)}/>
            <Form.Label>Active Growth Period</Form.Label>        
            <Form.Control value={growthPeriod} onChange={e => setGrowthperiod(e.target.value)}/>
            <Form.Label>Soil type</Form.Label>        
            <Form.Control value={soilType} onChange={e => setSoilType(e.target.value)}/>
            <Form.Label>Fertilizer</Form.Label>        
            <Form.Control value={fertilizer} onChange={e => setFertilizer(e.target.value)}/>
            <Form.Label>Plant Description</Form.Label>        
            <Form.Control value={plantdescription} onChange={e => setPlantDescription(e.target.value)}/>
            <Form.Label>Date Acquired</Form.Label>        
            <Form.Control value={dateacquired} onChange={e => setDateAcquired(e.target.value)}/>
            <Form.Label>location</Form.Label>        
            <Form.Control value={location} onChange={e => setLocation(e.target.value)}/>
            <Button>Add new plant</Button>
        </Form>
    )
}
