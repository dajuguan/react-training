import React from "react"
import { BrowserRouter as Router, Route, Link, useParams, Switch } from "react-router-dom"

function Child() {
    console.log(useParams())
    let { id } = useParams()
    return (
        <div>
            <h3> ID:{id}</h3>
        </div>
    )
}
function App() {
    return (
        <Router>
            <div>
                <h2> Accounts</h2>
                <ul>
                    <li>
                        <Link to="/baidu" >Baidu</Link>
                    </li>
                </ul>
                <Switch >
                    <Route path="/:id" children={<Child />} />
                </Switch>


            </div>
        </Router>
    )
}

export default App