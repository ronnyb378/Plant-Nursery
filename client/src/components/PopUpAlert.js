import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actionSetError } from '../redux/actions/error';

export default function PopUpAlert() {
    const errorMessage = useSelector(state => state.errors)
    const  [ show, setShow ] = useState(true);
    const dispatch = useDispatch();

    if (show) {
        return (
            <Alert variant="danger" onClose={() => {
                setShow(false);
                dispatch(actionSetError(''))}} dismissible>
                <Alert.Heading>{errorMessage}</Alert.Heading>
            </Alert>
        )
    }
}
