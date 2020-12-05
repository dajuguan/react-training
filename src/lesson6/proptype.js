import React from "react"
import PropTypes from "prop-types"
function App({ name = "test", children }) {

    return (
        <div>
            {name}
        </div>

    )
}

App.propTypes = {
    children: PropTypes.element.isRequired
}



export default App