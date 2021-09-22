import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import AddPlant from '../components/AddPlant'
import Plant from '../components/Plant'

import tools from '../images/tools.jpg'
import { actionSetResults } from '../redux/actions/results'

export default function MyGarden() {

    const dispatch = useDispatch();
    const results = useSelector((state) => state.results)

    const orderedResults = results.sort((a, b) => {
        let aId = a.id;
        let bId = b.id;
        if (aId < bId) {
            return -1;
        }
        if (aId > bId) {
            return 1;
        }
        return 0;
    })


    useEffect(() => {
        fetch('api/v1/plants/mygarden')
            .then(res => res.json())
            .then(data => {
                dispatch(actionSetResults(data))
            })
    }, [dispatch])


    return (
        <div>
            {/* <h2>My Garden</h2> */}
             {/* <div className="plant-container"> */}
                {/* <div> */}
                <div className="container">
                    <img className="plant-photo" src={tools} alt="overhead view of numerous tiny potted plants" />
                    <div class="centered nowrap">My Garden</div>
                </div>
                {/* </div> */}
            {/* </div> */}

            <div className='display-container pt-4'>
                {/* PLANTS */}
                <Container className="text-center">
                    <Row xs={6} sm={6} md={6} lg={6} className="justify-content-center">
                        <AddPlant />
                        {orderedResults.length ? (orderedResults.map((result) => {
                            return <Plant key={result.id} data={result} />
                        })) : ('')}
                    </Row>
                </Container>
            </div>
        </div>
    )
}
