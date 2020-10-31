import React from 'react'

import firebase from 'firebase/app'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import SignOut from './SignOut'
import SignIn from './SignIn'

firebase.initializeApp({
    apiKey: "AIzaSyBYr9mQovAKkmtvOFi7WQ9y4aroX0kgAXQ",
    authDomain: "tasker-react-firebase.firebaseapp.com",
    databaseURL: "https://tasker-react-firebase.firebaseio.com",
    projectId: "tasker-react-firebase",
    storageBucket: "tasker-react-firebase.appspot.com",
    messagingSenderId: "659542180620",
    appId: "1:659542180620:web:dcb2d47963f9821d6d7f29"
})

export const App = () => {
    const [user] = useAuthState(firebase.auth())
    console.log(user)
    return (
        <>
            <header>
                <h1>JS-F2P Lobby</h1>
                <SignOut />
            </header>
            <section>
                <SignIn />
            </section>
        </>
    )
}
