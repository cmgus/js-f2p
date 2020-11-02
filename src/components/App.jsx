import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LobbyProvider } from '../contexts/LobbyContext'

import { Home } from '../pages/Home'
import { Lobby } from '../pages/Lobby'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { Navbar } from './Navbar';

export const App = () => {
    return (
        <LobbyProvider>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/sign-in" component={SignIn} />
                    <Route exact path="/sign-up" component={SignUp} />
                    <Route exact path="/lobby" component={Lobby} />
                </Switch>
            </Router>
        </LobbyProvider>
    )
}
