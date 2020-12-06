import React, { useState } from "react"
import loadable from "@loadable/component"

const Hello = loadable(() => import('./Hello'))
const Dynamic = loadable(props => import(`./${props.name}`))

function App() {
    const [name, setName] = useState(null)
    return (
        <div>
            <button type="button" onClick={() => {
                setName('A')
            }

            }>Go to A</button>
            <button type="button" onClick={() => {
                setName('B')
            }

            }>Go to B</button>
            {name !== null ? <Dynamic name={name} /> : null}
            <Hello />
        </div>
    )
}

export default App