import React from "react"

import PropTypes from "prop-types"
import Panel from "./Panel"

const PageHeader = ({ children, title, useMaxWidth, ...rest }) => (
    <header className="page-header" {...rest}>
        <Panel useMaxWidth={useMaxWidth}>
            {title && <h1 className="heading-2">{title}</h1>}
            {children}
        </Panel>
    </header>
)

PageHeader.propTypes = {
    useMaxWidth: PropTypes.bool
}

export default PageHeader