import React from "react"

import Router from "./utils/Router"
import { Route, Switch } from "react-router-dom"
import { AuthUserProvider, useAuthUser } from "./utils/AuthUser"

import Login from "./auth/login"

import "./styles/main.scss"
import UnauthorizedLayout from "./layouts/UnauthorizedLayout"

const App = () => {
    return (
        <Router>
            <AuthUserProvider>
                <Switch>
                    <Route path="/login" component={UnauthorizedLayout} />
                </Switch>
            </AuthUserProvider>
        </Router>
    )
}


export default App