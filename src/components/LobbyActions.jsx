import React, { useContext } from 'react'
import { LobbyContext } from '../contexts/LobbyContext'

export const LobbyActions = () => {
    const { userInLobby, joinLobby, leaveLobby, toggleReadiness } = useContext(LobbyContext)
    return userInLobby
        ? (
            <>
                <button onClick={() => toggleReadiness(!userInLobby.ready)}>{userInLobby.ready ? 'Not ready¡' : 'Ready'}</button>
                <button onClick={leaveLobby}>Leave</button>
            </>
        )
        : (
            <>
                <button onClick={joinLobby}>Join</button>
            </>
        )
}
