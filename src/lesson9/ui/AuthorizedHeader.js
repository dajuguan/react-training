import React from "react"

import { Link, withRouter } from "react-router-dom"
import { useAuthUser } from "../utils/AuthUser"

import classnames from "classnames"
const AuthorizedHeader = ({ location }) => {
    const { setLogged } = useAuthUser()

    const lightBackground = ['/projects', '/projects/add'].includes(location.pathname)

    return (
        <header className="authorized-primary-header">
            <Link to="/projects" className={classnames('logo', { 'logo-light': !lightBackground })}>
                <img src="/static/firebase.svg" alt="Logo"></img>
                <span>IBM Training</span>
            </Link>
            <nav className="primary-nav">
                <button
                    onClick={() => setLogged(false)}
                    className="logout text-light-tint"
                >
                    Logout
                </button>
                <div className="avatar"></div>
            </nav>

        </header>
    )

}

export default withRouter(AuthorizedHeader)