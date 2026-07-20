// Import the Express framework
import express from "express"

// Import CORS middleware to allow requests from different origins
import cors from "cors"

// Import Body Parser middleware to parse JSON request bodies
import bodyParser from "body-parser"

// Create an Express application
const app = express()

// Define the port number on which the server will run
const port = 3000

// Enable CORS for all incoming requests
app.use(cors())

// Parse incoming JSON data and store it in req.body
app.use(bodyParser.json())

// Handle GET requests to the root ("/") route
app.get('/', (req, res) => {

    // Send a simple response to the client
    res.send('Hello World!')
})

// Handle POST requests to the root ("/") route
app.post('/', (req, res) => {

    // Print the received JSON data in the terminal
    console.log(req.body)

    // Send a response back to the client
    res.send('Hello World!')
})

// Start the server and listen for incoming requests
app.listen(port, () => {

    // Display a message in the terminal when the server starts
    console.log(`Example app listening on port ${port}`)
})