import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Redirect } from 'react-router-dom'
import { auth } from '../firebase'

export const Tasks = () => {
    const [user] = useAuthState(auth)
    return !user
        ? <Redirect to="/sign-in" from="/tasks" />
        : (
            <div>
                Tasks
            </div>
        )
}
