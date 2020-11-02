import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
export const AuthButtons = () => {
    const [user] = useAuthState(auth)
    return user
        ? <button onClick={() => auth.signOut()}>Sign Out</button>
        : (
            <>
                <Link to="/sign-in">Sing In</Link>
                <Link to="/sign-up">Sign Up</Link>
            </>
        )
}
