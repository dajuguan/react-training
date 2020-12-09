import React from "react"
import { Switch, Route } from "react-router-dom"

import Login from "../auth/login"

// import ProjectsSidebar from "../ui/ProjectsSidebar"
import PageHeader from "../ui/PageHeader"
import Overview from "../projects/Overview"
import AuthenticationLayout from "../projects/authentication/AuthenticationLayout"

import DatabaseLayout from "../projects/database/DatabaseLayout"

const UnauthorizedLayout = ({ match }) => (
    <div className="app unauthorized-layout">
        <Switch>
            <Route path="/login" component={Login} />
        </Switch>
    </div>
)

export default UnauthorizedLayout