import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actionLoggedIn } from '../redux/actions/user'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('clicked')
        fetch('/api/v1/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(res=>res.json())
        .then(data=> {
            if (data.error) {
                setError(data.error)
            } else {
                dispatch(actionLoggedIn(data.user))
            }
        })
    }

    return (
        <div>
            {error && (<div className="error">{error}</div>)}
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Username</span>
                    <input value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    <span>Password</span>
                    <input value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
            <Link to="/signup">Sign Up</Link>
            <Link to="/api/v1/login/guest">Guest</Link>
        </div>
    )
}
