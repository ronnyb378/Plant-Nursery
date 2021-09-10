import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('clicked')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Username</span>
                    <input value={username} onChange={e => setUsername(e.target.value)}/>
                </label>
                <br />
                <label>
                    <span>Password</span>
                    <input value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
                <Link to="/signup">Sign Up</Link>
                <Link to="/garden">Guest</Link>
        </div>
    )
}
