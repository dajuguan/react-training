import React, { Fragment, useState } from "react"

import { Link, Route } from "react-router-dom"
import Panel from "../ui/Panel"
import Tiles from "../ui/Tiles"
import Card from "../ui/Card"

const AccountSubLayout = ({ match, history }) => {
    const [projects, setProjects] = useState([
        {
            "id": "react-training",
            "name": "React Training"
        },
        {
            "id": "secrect-project",
            "name": "Secrect Project"
        }
    ])
    return (
        <div className="account-sub-layout">
            <Panel className="panel-welcome-to-firebase">
                <h1 className="heading-1">Almost IBM</h1>
                <p>
                    Tools for u to develop great apps, you are welcome to use it!
                     <br />
                    Thanks a lot!
                </p>
            </Panel>
            <Panel className="panel-recent-projects">
                <Route
                    path="/projects"
                    exact
                    render={() => {
                        return <Fragment>
                            <p>Recent Projects</p>
                            <div>
                                <Tiles>
                                    <Card className="card-recent-project center-blocks" style={{ height: '14em', cursor: 'pointer' }}>
                                        <Link className="block" to="/projects/add">
                                            Add Project
                                        </Link>
                                    </Card>
                                    {
                                        Array.isArray(projects) &&
                                        projects.map(p => (
                                            <div role="link" key={p.id} onClick={() => history.push(`/projects/${p.id}`)}>
                                                <Card className="card-recent-project spacing-small"
                                                    style={{
                                                        height: '14em', cursor: 'pointer'
                                                    }}
                                                >
                                                    <h1 className="heading-3">{p.name}</h1>
                                                    <div>{p.id}</div>
                                                </Card>
                                            </div>
                                        ))
                                    }
                                </Tiles>
                            </div>
                        </Fragment>
                    }}
                />
            </Panel>
        </div>
    )
}

export default AccountSubLayout