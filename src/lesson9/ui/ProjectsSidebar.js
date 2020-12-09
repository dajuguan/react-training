import React from "react"

import { NavLink, withRouter } from "react-router-dom"

const ProjectSideBar = ({ match }) => {
    return <aside className="project-sidebar">
        <nav className="overview">
            <NavLink activeClassName="active" to={`{match.url}/overview`} className="heading-4">
                Project Overview
            </NavLink>
        </nav>
        <nav className="open spacing">
            <h1 className="heading-4">Develop</h1>
            <div className="spacing-medium">
                <NavLink activeClassName="active" to={`${match.url}/authentication`}>
                    Authentication
                </NavLink>
                <NavLink activeClassName="active" to={`${match.url}/database`}>
                    Database
                </NavLink>
                <NavLink activeClassName="active" to={`${match.url}/storage`}>
                    Storage
                </NavLink>
                <NavLink activeClassName="active" to={`${match.url}/functions`}>
                    Functions
                </NavLink>
                <NavLink activeClassName="active" to={`${match.url}/ml-kit`}>
                    ML KIT
                </NavLink>
            </div>
        </nav>
        <nav className="spacing-small">
            <h1 className="heading-4">Quality</h1>
            <p>Test performance, Test trainning</p>
        </nav>
        <nav className="spacing-small">
            <h1 className="heading-4">Quality</h1>
            <p>Test performance, Test trainning</p>
        </nav>
        <nav className="spacing-small">
            <h1 className="heading-4">Quality</h1>
            <p>Test performance, Test trainning</p>
        </nav>
    </aside>
}

export default withRouter(ProjectSideBar)