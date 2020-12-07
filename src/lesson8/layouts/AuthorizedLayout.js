import React from "react"
import { Switch, Route } from "react-router-dom"

import AccountSubLayout from "./AccountSubLayout"
const AuthorizedLayout = ({ match }) => (
    <div className="app authorized-layout">
        <Switch>
            <Route path="/projects" exact component={AccountSubLayout} />
        </Switch>
    </div>
)

export default AuthorizedLayout