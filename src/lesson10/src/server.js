import React from 'react'
import { renderToString } from "react-dom/server"
import App from "./components/app"

import { Provider } from "react-redux"
import configureStore from "./redux/configureStore"

module.exports = function render(initialState) {
    const store = configureStore(initialState)
    let content = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    )
    const preloadedState = store.getState()
    return { content, preloadedState }
}