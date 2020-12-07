import React from "react"

import { BrowserRouter as Router, Route, Switch, Link, useParams, } from "react-router-dom"

function Home() {
    return <h1>Home</h1>
}

function Contact() {
    return <h1>Contact</h1>
}


function UserProfile(props) {
    const { userId } = useParams()
    return (
        <div>
            User profile for : { userId}

        </div>
    )
}
const App = () => (
    <Router>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/user/:userId" component={UserProfile} />
        </Switch>
    </Router>
)

export default App