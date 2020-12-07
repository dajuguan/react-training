import React from "react"

const Tiles = ({ children, ...rest }) => {
    return (
        <div {...rest} className="tiles">
            {React.Children.map(children, child => (
                <div>{child}</div>
            ))}
        </div>
    )
}

export default Tiles