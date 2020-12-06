import React from "react"
import { BrowserRouter as Router, Link, Route, Redirect, withRouter } from "react-router-dom"

const Public = () => <h3>Pulic</h3>
const Protected = () => <h3>Protected</h3>

const fakeAuth = {
    isAuthed: false,
    authenticate(cb) {
        this.isAuthed = true
        setTimeout(cb, 100)
    },
    signout(cb) {
        this.isAuthed = false
        setTimeout(cb, 100)
    }
}
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={
            props =>
                fakeAuth.isAuthed ? (
                    <Component {...props} />
                ) : <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }
                        }
                    />

        }
    />
)


const AuthButton = withRouter(
    ({ history }) =>
        fakeAuth.isAuthed ? (
            <p>
                Welcome!
                <button onClick={() => {
                    fakeAuth.signout(() => history.push("/"))
                }}>
                    sign out
                </button>
            </p>
        ) : (
                <p> Login first</p>
            )
)

class Login extends React.Component {
    state = {
        redictToLocation: false
    }
    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redictToLocation: true })
        })
    }
    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } }
        const { redictToLocation } = this.state
        if (redictToLocation) {
            return <Redirect to={from} />
        }
        return (<div>
            <p>You must login to view this page</p>
            <button onClick={this.login}>Login</button>
        </div>)
    }
}

const App = () => (
    <Router>
        <AuthButton />
        <div>
            <ul>
                <li>
                    <Link to="/public">Public Page</Link>
                </li>
                <li>
                    <Link to="/protected">Protected Page</Link>
                </li>
            </ul>
            <Route path="/public" component={Public} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/protected" component={Protected} />
        </div>
    </Router>
)



export default App