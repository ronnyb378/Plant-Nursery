import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

export default function PopUpAlert(props) {

    // when PopUpAlert component called, show already set to true
    const  [ show, setShow ] = useState(true);

    if (show) {
        return (
            <Alert variant={props.type} onClose={() => {
                // when alert dismissed, show set to false
                setShow(false)}} dismissible>
                {props.content}
            </Alert>
        )
    } else { return null }
}
