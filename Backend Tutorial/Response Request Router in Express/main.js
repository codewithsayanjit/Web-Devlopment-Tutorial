const express = require('express') // Import Express
const blog = require('./routes/blog') // Import blog routes
const shop = require('./routes/shop') // Import shop routes
const birds = require('./routes/birds'); // Import birds routes 


const app = express() // Create Express app
const port = 3000 // Server port

app.use(express.static("public")) // Serve static files
app.use('/blog', blog) // Blog route
app.use('/shop', shop) // Shop route
app.use('/birds', birds); // Birds route

app.get('/', (req, res) => {
    console.log("Hey its a get request")
    res.send('Hello World get!')
}).post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello World post!')
})

app.put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello World put!')
})

app.get("/index", (req, res) => {
    console.log("Hey its index")
    res.sendFile('templates/index.html', { root: __dirname }) // Send HTML file
})

app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["Sayanjit", "Jana"] }) // Send JSON response
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`) // Start server
})