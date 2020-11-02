import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Redirect } from 'react-router-dom'
import { LobbyActions } from '../components/LobbyActions'
import { LobbyContext } from '../contexts/LobbyContext'
import { auth } from '../firebase'

export const Lobby = () => {
    const [user] = useAuthState(auth)
    const { lobby } = useContext(LobbyContext)
    return !user
        ? <Redirect to="/sign-in" from="/tasks" />
        : (
            <div>
                Lobby
                {lobby.map(m => (
                    <article key={m.email}>
                        {m.displayName} - {m.ready ? 'Ready 🎮' : 'Not Ready ❌'}
                    </article>
                ))}
                <LobbyActions />
            </div>
        )
}
