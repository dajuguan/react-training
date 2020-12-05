import React, { Component } from "react"

export default class ErrorBoundary extends Component {
    state = { error: null }
    static getDerivedStateFromError(error) {
        return { error }
    }
    render() {
        const { error } = this.state
        const { children } = this.props
        if (error != null) {
            return <h1> Something went wrong</h1>
        }
        return children
    }
}