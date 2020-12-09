import React, { useState, useEffect } from "react"
import { Switch, Route, Redirect, Link } from "react-router-dom"

import ProjectSideBar from "../ui/ProjectsSidebar"
import Overview from "../projects/Overview"
import AuthenticationLayout from "../projects/authentication/AuthenticationLayout"
import DatabaseHome from "../projects/database/DatabaseHome"
import DatabaseLayout from "../projects/database/DatabaseLayout"
import ProjectContext from "../utils/ProjectContext"

import { getProject } from "../utils/Api"

const ProjectSubLayout = ({ match, pathname }) => {
    const [project, setProject] = useState(false)
    const projectId = match.params.projectId


    useEffect(() => {
        let isCurrent = true
        getProject(projectId).then(project => {
            console.log(project)
            if (isCurrent) {
                setProject(project)
            }
        })
        return () => (isCurrent = false)
    }, [projectId])

    return (
        <ProjectContext.Provider value={project}>
            <div className="project-sub-layout">
                <ProjectSideBar />
                <div className="project-primary-content">
                    <nav className="project-nav horizontal-spacing" style={{ color: 'white' }}>
                        <span className="text-light-tint">{project && project.name}</span>
                        <span> : </span>
                        <Link
                            to={{ pathname: '/projects/add', state: { cancelPathname: pathname } }}
                            className="text-light-tint"
                        >
                            Add Project
                        </Link>
                    </nav>
                    <main>
                        <Switch>
                            <Route path={`${match.path}/overview`} component={Overview} />
                            <Route path={`${match.path}/authentication`} component={AuthenticationLayout} />
                            <Route path={`${match.path}/database`} component={DatabaseHome} />
                            <Route path={`${match.path}/database/:databaseType`} component={DatabaseLayout} />
                            <Redirect to={`${match.path}/overview`} />
                        </Switch>
                    </main>

                </div>
            </div>
        </ProjectContext.Provider>
    )
}

export default ProjectSubLayout