import React from 'react'
import { Link } from 'react-router-dom'
import { AuthButtons } from './AuthButtons'

export const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <AuthButtons />
        </div>
    )
}
