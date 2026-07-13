const express = require('express')
const app = express()
const port = 3000
const bird = require('./routes/bird')
const fs = require("fs")

app.use(express.static("public"))

app.use('/bird', bird)

// Middleware 1 - Login Page
app.use((req, res, next) => {
    console.log(req.headers)
    req.sayanjit = "I am sayanjit jana";

    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)

    // next() is used to pass control to the next middleware function. If next() is not called, the request will be left hanging and the client will not receive a response.
    next()
})

// Middleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.sayanjit = "I am dipayan pradhan";
    next()
})

// Home Route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// About Route
app.get('/about', (req, res) => {
    res.send('Hello about!' + req.sayanjit)
})

// Contact Route
app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

// Start Server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})