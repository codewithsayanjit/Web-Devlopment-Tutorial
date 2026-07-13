const fs = require("fs");
console.log(fs)

console.log("starting");

// * fs.writeFileSync("Sayanjit.txt", "Sayanjit is a good)  // writeFileSync is a block function.We avoid this function because it blocks the code execution until the file is written. It is not recommended to use this function in production code.

// Create a file and write data
fs.writeFile("Sayanjit2.txt", "Sayanjit is a good boy2", () => {
    console.log("done");

    // Read the file content
    fs.readFile("Sayanjit2.txt", (error, data) => {
        console.log(error, data.toString());
    });
});

// Append data to an existing file
fs.appendFile("Sayanjit.txt", "\n Sayanjit is a good programmer", (e, d) => {
    console.log(d);
});

console.log("ending");