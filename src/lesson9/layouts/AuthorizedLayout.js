import React from "react"
import { Switch, Route } from "react-router-dom"

import AccountSubLayout from "./AccountSubLayout"
import ProjectSubLayout from "./ProjectSubLayout"
const AuthorizedLayout = ({ match }) => (
    <div className="app authorized-layout">
        <Switch>
            <Route path="/projects" exact component={AccountSubLayout} />
            <Route path="/projects/:projectId" component={ProjectSubLayout} />
        </Switch>
    </div>
)

export default AuthorizedLayout