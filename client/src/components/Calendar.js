import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function Calendar({ plantId }) {

    // const eventsArray = [
    //     {title: 'event 1', date: '2021-09-15'},
    //     {title: 'event 2', date: '2021-09-10'}
    // ]

    const [ dbEventsArray, setDbEventsArray ] = useState([])

    let eventsArray = dbEventsArray.map((event) => {
        let createdAt =(event.createdAt).slice(0,10);
        let title = event.type
        return {title: `${title}`, date: `${createdAt}`}
    })

    useEffect(() => {
        fetch(`api/v1/plants/${plantId}`)
            .then(res=>res.json())
            .then(data=> {
                setDbEventsArray(data)
                // console.log(data)
                // data.forEach(event => {
                //     const createdAt =(event.createdAt).slice(0,10)
                //     const title = event.type
                    // console.log(event)
                    // console.log(createdAt)

                    // const oneEvent = {title: `${title}`, date: `${createdAt}`}
                    // console.log(oneEvent)
                    // eventsArray.push(oneEvent)
                    // console.log(eventsArray)
                    // let copyArray = [...eventsArray]
                    // copyArray.push(oneEvent)
                    // console.log(copyArray)
                    // setEventsArray(copyArray)
                // });

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
