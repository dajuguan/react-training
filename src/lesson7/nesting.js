import React from "react"
import { BrowserRouter as Router, Route, Link, useParams, useRouteMatch, Switch } from "react-router-dom"

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    )
}

function Topic() {
    let { topicId } = useParams()
    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    )
}

function Topics() {
    const { path, url } = useRouteMatch()
    return <div>
        <h2> Topics</h2>
        <ul>
            <li>
                <Link to={`${url}/rendering`}> Rendering With React</Link>
            </li>
            <li>
                <Link to={`${url}/components`}>Components </Link>
            </li>
            <li>
                <Link to={`${url}/props-v-state`}> Props vs State
            </Link>
            </li>
        </ul>
        <Switch>
            <Route exact path={path}>
                <h3>Please select a topic</h3>
            </Route>
            <Route path={`${path}/:topicId`}>
                <Topic />
            </Route>
        </Switch>
    </div>

}

function App() {
    return <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/topics">
                    <Topics />
                </Route>
            </Switch>
        </div>

    </Router>
}


export default App