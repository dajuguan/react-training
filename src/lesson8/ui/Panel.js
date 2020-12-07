import React from "react"

import classnames from "classnames"

const Panel = ({ children, useMaxWidth, className }) => (
    <div
        className={
            classnames('panel', className, {
                'max-width': useMaxWidth
            })}
    >
        <div className="spacing">{children}</div>
    </div>
)


export default Panel