import React, { useState } from "react"
import Panel from "../ui/Panel"
import Card from "../ui/Card"


import { useAuthUser } from "../utils/AuthUser"
const apiLogin = (userName, password) => {
    return new Promise((res, rej) => {
        if (userName === 'react' && password === "react") {
            res()
        } else {
            rej()
        }
    })
}

const Login = ({ history }) => {
    const { setLogged } = useAuthUser()
    const [errorMsg, setErrorMsg] = useState()
    function handleSubmit(e) {
        e.preventDefault()
        const [userNameNode, passwordNode] = e.target.elements
        apiLogin(userNameNode.value, passwordNode.value)
            .then(() => {
                setLogged(true)
                history.push('/projects')
            })
            .catch(() => {
                setLogged(false)
                setErrorMsg("Invalid Username or Password")
            })

    }
    return (
        <Panel>
            <Card style={{ minHeight: '10em' }}>
                <h1 className="heading-2">Welcome to IBM...</h1>
                <p>
                    This mock app will demostrate how to use React React Router with lots of Routes
                </p>
                <p>
                    The username is <strong>react</strong> and password is <strong>react</strong>
                </p>
                {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
                <form className="spacing" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit" className="button">
                        Login
                    </button>
                </form>
            </Card>
        </Panel>
    )
}

export default Login