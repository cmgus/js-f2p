import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
export const Home = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    return (
        <div>
            Home
            {user && <Link to="/lobby">Lobby</Link>}
        </div>
    )
}
