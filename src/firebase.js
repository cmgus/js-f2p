import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyBYr9mQovAKkmtvOFi7WQ9y4aroX0kgAXQ",
    authDomain: "tasker-react-firebase.firebaseapp.com",
    databaseURL: "https://tasker-react-firebase.firebaseio.com",
    projectId: "tasker-react-firebase",
    storageBucket: "tasker-react-firebase.appspot.com",
    messagingSenderId: "659542180620",
    appId: "1:659542180620:web:dcb2d47963f9821d6d7f29"
})

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export { firebase }
