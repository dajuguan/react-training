import React from "react"
import { Switch, Route } from "react-router-dom"

import Login from "../auth/login"

const UnauthorizedLayout = ({ match }) => (
    <div className="app unauthorized-layout">
        <Switch>
            <Route path="/login" component={Login} />
        </Switch>
    </div>
)

export default UnauthorizedLayout