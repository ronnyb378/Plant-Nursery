import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function Calendar() {
    const eventsArray = [
        {title: 'event 1', date: '2021-09-15'},
        {title: 'event 2', date: '2021-09-10'}
    ]

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
