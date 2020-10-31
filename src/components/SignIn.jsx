import React from 'react'
import firebase from 'firebase/app' 
export default function SignIn() {
    const signIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
    }
    return (
        <>
            <button onClick={signIn}>Sign in with Google</button>
        </>
    )
}
