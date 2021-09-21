import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap'

export default function Entry(props) {
    const { type, notes, createdAt } = props.data

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
        <div><i><b>{type}</b></i><br />{notes}</div> <Badge >{ createdAt }</Badge>
    </ListGroup.Item>
    )
}
