import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function Calendar({ events }) {

    let eventsArray = events.map((event) => {
        let createdAt = (event.createdAt).slice(0,10);
        let title = event.type
        return {title: `${title}`, date: `${createdAt}`}
    })
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