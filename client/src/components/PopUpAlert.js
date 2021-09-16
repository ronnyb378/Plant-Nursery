import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { actionSetError, actionSetShow, actionSetSuccess } from '../redux/actions/status';

export default function PopUpAlert(props) {

    const show = useSelector(state => state.show)
    const message = useSelector(state => state.status)
    // const  [ show, setShow ] = useState(false);
    const dispatch = useDispatch();

    if (show) {
        return (
            <Alert variant={props.type} onClose={() => {
                dispatch(actionSetShow(false))
                dispatch(actionSetError(''));
                dispatch(actionSetSuccess(''))}} dismissible>
                {message.error ? 
                    <Alert.Heading>{message.error}</Alert.Heading>
                : <Alert.Heading>{message.success}</Alert.Heading>}
            </Alert>
        )
    } else { return null }
}
