const express = require('express'); // Import Express framework
const app = express(); // Create an Express application instance

const mongoose = require('mongoose'); // Import Mongoose for MongoDB connection
const Employee = require("./models/Employee"); // Import Employee model


// Connect to MongoDB database named "company"
conn = mongoose.connect('mongodb://127.0.0.1:27017/company');

const port = 3000; // Define server port

// Set EJS as the template/view engine
app.set('view engine', 'ejs');

const getRandom = (arr) => {
    let rno = Math.floor(Math.random() * (arr.length - 1)); // Generate random index
    return arr[rno]; // Return element at random index
};

// Home route
app.get('/', (req, res) => {
    // Render index.ejs and pass a variable named foo
    res.render('index', { foo: 'FOO' });
});

// Route to generate random employee data
app.get('/generate', async (req, res) => {

    // Delete all existing employee records from collection
    await Employee.deleteMany({});

    // Arrays containing sample data
    let randomNames = [
        'Rohan',
        "Sohan",
        "Mohan",
        "Sobhan",
        "Sayanjit",
        "Dipayan",
        "Asim",
        "Soumyadip"
    ];

    let randomLang = [
        "Python",
        "js",
        "C++",
        "Java"
    ];

    let randomCities = [
        "Bilaspur",
        "Moradabad",
        "Mysore",
        "Kolkata"
    ];

    // Create 10 random employee records
    for (let index = 0; index < 10; index++) {

        let e = await Employee.create({
            name: getRandom(randomNames), // Random employee name
            salary: Math.floor(Math.random() * 22000) + 10000, // Random salary between 10000 and 30000
            language: getRandom(randomLang), // Random programming language
            city: getRandom(randomCities), // Random city
            isManager: (Math.random() > 0.5) ? true : false // Random manager status
        });

        // Print created employee document in console
        console.log(e);
    }

    // Render index page after data generation
    res.render('index', { foo: 'FOO' });
});

// Start the server and listen on specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});