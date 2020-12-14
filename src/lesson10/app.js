import express from 'express'
import path from 'path'

import data from "./assets/data.json"
import ssr from "./src/server"
import template from "./src/template"
const app = express()


console.log(__dirname)
app.use('/assets', express.static(path.resolve(__dirname, 'assets')))
app.use('/media', express.static(path.resolve(__dirname, 'media')))

app.listen(3000, () => {
    console.log("app start listening at 3000...")
})


let initialState = {
    isFetchting: false,
    apps: data
}


//设置服务端渲染的home page
app.get('/', (req, res) => {
    const { preloadedState, content } = ssr(initialState)
    const resp = template("SSR", preloadedState, content)
    res.setHeader("Cache-Control", 'assets, max-age=604800')
    res.send(resp)
})

//pure client side page
app.get('/client', (req, res) => {
    let resp = template("Client Rendering")
    res.setHeader("Cache-Control", 'assets, max-age=604800')
    res.send(resp)
})