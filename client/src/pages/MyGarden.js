import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useSelector } from "react-redux";
import plant1 from '../images/plant1.jpeg'
import plant2 from '../images/plant2.jpeg'
import plant3 from '../images/plant3.jpeg'
import { actionSetResults } from '../redux/actions/results'

export default function MyGarden() {
    const dispatch = useDispatch()
    // const {user, checked} = useSelector(state => state.user);

    // if (!checked) {
    //     return 'Loading...'
    // }  
    
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
                    <img className="plant-pic" src={plant3} alt="plant stems"/>
                </div>
            </div>
            {results.map((result) => {
                return <div key={result.id}>{result.name}</div>
            })}
        </div>
    )
}
