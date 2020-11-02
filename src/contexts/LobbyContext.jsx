import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth, firestore } from '../firebase'
export const LobbyContext = React.createContext([])

export const LobbyProvider = ({ children }) => {
    const { email, displayName, uid } = auth.currentUser ?? {}
    const [lobby] = useCollectionData(firestore.collection('lobby'))

    const userInLobby = lobby ? lobby.find(m => m.email === email) : null
    const leaveLobby = async () => {
        await firestore.collection('lobby').doc(uid).delete()
    }
    const joinLobby = async () => {
        await firestore.collection('lobby').doc(uid).set({ email, displayName, ready: false })
    }
    const toggleReadiness = async newReadiness => {
        await firestore.collection('lobby').doc(uid).set({ ready: newReadiness }, { merge: true })
    }
    return (
        <LobbyContext.Provider value={{ lobby, joinLobby, leaveLobby, toggleReadiness, userInLobby }}>
            {children}
        </LobbyContext.Provider>
    )
}
