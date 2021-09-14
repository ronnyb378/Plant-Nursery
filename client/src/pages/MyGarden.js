import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import AddPlant from '../components/AddPlant'
import Plant from '../components/Plant'
import NewPlant from '../components/NewPlant'


import plant1 from '../images/plant1.jpeg'
import plant2 from '../images/plant2.jpeg'
import plant3 from '../images/plant3.jpeg'
import { actionSetResults } from '../redux/actions/results'

export default function MyGarden() {

    const dispatch = useDispatch();
    const results = useSelector((state) => state.results)
    useEffect(() => {
        fetch('api/v1/plants/mygarden')
            .then(res => res.json())
            .then(data => {
                dispatch(actionSetResults(data))
                console.log(data)
            })
    }, [dispatch])

    return (
        <div>
            <h2>Welcome, Planter Person</h2>
            <div className="plant-container">
                <div>
                    <img className="plant-pic" src={plant1} alt="white flower" />
                </div>
                <div>
                    <img className="plant-pic" src={plant2} alt="hanging plants" />
                </div>
                <div>
                    <img className="plant-pic" src={plant3} alt="plant stems" />
                </div>
            </div>

            {/* PLANTS */}
            <Container className="text-center">
                <Row sm={2} md={4} lg={6} className="justify-content-center">
                    <AddPlant />
                    {results.length ? (results.map((result) => {
                        return <Plant key={result.id} data={result} />
                    })) : ('')}

                </Row>
            </Container>
        </div>
    )
}
