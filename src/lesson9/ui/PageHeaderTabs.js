import React from "react"

import { NavLink } from "react-router-dom"

export const PageHeaderTabs = ({ children }) => <div className="page-header-tabs">{children}</div>

export const Tab = ({ ...rest }) => <NavLink activeClassName="active" {...rest}></NavLink>