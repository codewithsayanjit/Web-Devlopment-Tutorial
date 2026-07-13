const express = require('express') // Import Express.js
const app = express() // Create Express application
const port = 3000 // Port number

app.set('view engine', 'ejs'); // * Set EJS as template engine

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
    let siteName = "Adidas" // Website name
    let searchText = "Search Now" // Search button text
    let arr = ["Hello", 54, 65] // Sample array data

    // Render index.ejs and send data
    res.render("index", { siteName: siteName, searchText: searchText, arr }) // Don't need mention folder name "views" because it is default folder for EJS templates and also don't need mention file extension ".ejs" because it is default extension for EJS templates
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas why and when?" // Blog title
    let blogContent = "Its a very good brand" // Blog content

    // Render blogpost.ejs and send data
    res.render("blogpost", {blogTitle: blogTitle, blogContent: blogContent})
})

app.listen(port, () => {
    // Server start message
    console.log(`Example app listening on port ${port}`)
})