import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap'

export default function Entry(props) {
    const { type, notes } = props.data
    let dateObj = new Date(props.data.createdAt)
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    const newdate = month + "/" + day + "/" + year;
    console.log(newdate)
    
    let entryType;
    if (type === 'Watered') {
        entryType = 'info'
    } else if (type === 'Potted') {
        entryType = 'warning'
    } else if (type === 'Fertilized') {
        entryType = 'success'
    } else if (type === 'Relocated') {
        entryType = 'danger'
    } else {
        entryType = 'secondary'
    }

    return (
        // <ListGroup.Item variant={entryType}>
        //     <i><b>{type}</b></i><br /> {notes}
        //     {/* <p className="me-auto">test</p> */}
        // </ListGroup.Item>
        <ListGroup.Item variant={entryType} className="d-flex align-items-center justify-content-between">
        <div><i><b>{type}</b></i><br />{notes}</div> <Badge >{ newdate }</Badge>
    </ListGroup.Item>
    )
}
