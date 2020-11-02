import React from 'react'
import { auth, firebase } from '../firebase'

export const SignIn = () => {
    const signInGoogle = () => {
        auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }
    return (
        <div>
            <h1>Sign in with:</h1>
            <button onClick={signInGoogle}>Google</button>
        </div>
    )
}
