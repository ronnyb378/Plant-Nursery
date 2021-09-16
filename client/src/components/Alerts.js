import React from 'react'
import { useSelector } from 'react-redux';
import PopUpAlert from './PopUpAlert';

export default function Alerts() {
    // component Alerts called on App.js

    // if error or success in redux:
    const status = useSelector(state => state.status)

    let errors = []
    if (status.error) {
        errors.push({msg: status.error})
    }
    let successes = []
    if (status.success) {
        successes.push({msg: status.success})
    }

    return (
        <div>
            {/* for each erorr in errors array, PopUpAlert component will show up */}
            {/* error.msg in content prop may be something like username already in use or please include username and password */}
            {errors.map((error) => {
                return <PopUpAlert type="danger" content={error.msg} />
            })}
            {/* for each success in successes array, PopUpAlert component will show up  */}
            {/* success.msg in content prop may be something like User created when account is created on signup page */}
            {successes.map((success) => {
                return <PopUpAlert type="success" content={success.msg} />
            })}
        </div>
    )
}
