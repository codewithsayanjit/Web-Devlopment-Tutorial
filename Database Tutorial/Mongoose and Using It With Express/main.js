// https://mongoosejs.com/docs/

// Import mongoose package to connect and interact with MongoDB
import mongoose from "mongoose";

// Import Express framework
import express from "express";

// Import Todo model from models folder
import { Todo } from "./models/Todo.js";

// Connect to MongoDB running on localhost at port 27017
let conn = await mongoose.connect("mongodb://localhost:27017/")

// Create an Express application
const app = express()
// Define server port
const port = 3000

// Route for homepage "/"
app.get('/', (req, res) => {

    // Create a new Todo document
    const todo = new Todo({
        // Title field
        title: "Sayanjit Jana",

        // Description field
        desc: "Description of this todo",

        // Status of task (not completed)
        isDone: false,

        // Generate a random number for days field
        days: Math.floor(Math.random() * 45 + 5 * Math.random())
    })

    // Save the Todo document to MongoDB
    todo.save()

    // Send response to browser
    res.send('Hello mongoose')
})

// Route "/a" to fetch one Todo document from database
app.get('/a', async (req, res) => {

    // Find the first Todo document in collection
    let todo = await Todo.findOne()

    // Print fetched document in terminal
    console.log(todo)

    // Send selected fields as JSON response
    res.json({
        title: todo.title,
        desc: todo.desc,
        isDone: todo.isDone,
        days: todo.days
    })
})

// Start Express server on port 3000
app.listen(port, () => {

    // Display message when server starts successfully
    console.log(`Example app listening on port ${port}`)
})