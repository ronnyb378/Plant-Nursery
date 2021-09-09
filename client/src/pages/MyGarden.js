import React from 'react'
import plant1 from '../images/plant1.jpeg'
import plant2 from '../images/plant2.jpeg'
import plant3 from '../images/plant3.jpeg'

export default function MyGarden() {
    return (
        <div>
            <h2>Welcome, Planter Person</h2>
            <div class="plant-container">
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
        </div>
    )
}
