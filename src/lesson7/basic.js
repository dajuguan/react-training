import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const Home = () => {
    return <div>
        <h2>Home</h2>
    </div>
}

const About = () => {
    return <div>
        <h2>About</h2>
    </div>
}

const Topic = ({ match }) => {
    return <div>
        <h2>{match.params.name}</h2>
    </div>
}


const Topics = ({ match }) => {
    return <div>
        <h2> Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}> Rendering With React</Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>Components </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}> Props vs State
                </Link>
            </li>
        </ul>
        <Route path={`${match.url}/:name`} component={Topic} />


    </div>
}

const App = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>
            <hr />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
    </Router>
)


export default App