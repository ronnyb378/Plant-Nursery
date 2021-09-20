import React, { useEffect } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function Calendar({ plantId }) {
    const eventsArray = [
        {title: 'event 1', date: '2021-09-15'},
        {title: 'event 2', date: '2021-09-10'}
    ]

    useEffect(() => {
        fetch(`api/v1/plants/${plantId}`)
            .then(res=>res.json())
            .then(data=> {
                // console.log(data)
                data.forEach(event => {
                    console.log(event)
                });

            })
    }, [plantId])

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
