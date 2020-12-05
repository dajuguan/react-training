import { css } from "@emotion/react"
export default function App() {
    return (
        <form css={
            `display:flex,
            margin:0.25em,
            button: {
                margin:0.25em
            },
            input{
                margin:0.25em
            }
            `
        }>
            <input />
            <button>ADD</button>
        </form>
    )
}