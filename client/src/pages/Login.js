import React, { useState } from 'react'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('clicked')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>Username</span>
                <input vlaue={username} onChange={e => setUsername(e.target.value)}/>
            </label>
            <br />
            <label>
                <span>Password</span>
                <input vlaue={password} onChange={e => setPassword(e.target.value)}/>
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
    )
}
