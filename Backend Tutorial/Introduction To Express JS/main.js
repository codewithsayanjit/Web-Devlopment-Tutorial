const express = require('express') // Import the Express framework
const app = express() // Create an Express application
const port = 3000 // Define the port number

// Serve static files (HTML, CSS, JS, Images, etc.) from the "public" folder
app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path, handler)
// Route for the home page
app.get('/', (req, res) => {
    res.send('Hello World!') // Send response to the client
})

// Route for the about page
app.get('/about', (req, res) => {
    res.send('About us') // Send About Us text
})

// Route for the contact page
app.get('/contact', (req, res) => {
    res.send('Hello contact me!') // Send Contact page text
})

// Route for the blog page
app.get('/blog', (req, res) => {
    res.send('Hello blog!') // Send Blog page text
})

// Dynamic route for individual blog posts
app.get('/:slug', (req, res) => {      // :slug is a parameter in the URL that can be accessed via req.params.slug

    // Logic to fetch {slug} from the database
    // Example URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in

    // req.params contains route parameters
    console.log(req.params)    

    // req.query contains query string parameters
    console.log(req.query)      // Output: { mode: 'dark', region: 'in' }

    // Send the slug value in the response
    res.send(`hello ${req.params.slug}`)
})

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})