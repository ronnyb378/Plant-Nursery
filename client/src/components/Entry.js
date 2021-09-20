import React from 'react'
import { ListGroup } from 'react-bootstrap'

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
        <ListGroup.Item variant={entryType}>{notes}</ListGroup.Item>
    )
}
