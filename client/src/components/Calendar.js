import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function Calendar({ events }) {

    let eventsArray = events.map((event) => {
        let createdAt = (event.createdAt).slice(0,10);
        let title = event.type
        return {title: `${title}`, date: `${createdAt}`}
    })

    // useEffect(() => {
    //     fetch(`api/v1/plants/${plantId}`)
    //         .then(res=>res.json())
    //         .then(data=> {
    //             // console.log(data)
    //             setDbEventsArray(data)
    //             // console.log(dbEventsArray)
    //         })
    // }, [plantId])

    // // useEffect(() => {
    // //     setDbEventsArray([...dbEventsArray])
    // // }, [dbEventsArray])

    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={eventsArray}
            />
        </div>
    )
}
