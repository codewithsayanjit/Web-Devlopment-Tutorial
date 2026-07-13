let a = prompt("Enter first number");
let b = prompt("Enter second number");

// Check if inputs are valid numbers
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed"); // * throw is used to manually generate an error (exception) in JavaScript.
}

let sum = parseInt(a) + parseInt(b); // * parseInt() is a JavaScript function that converts a string into an integer (whole number).

function main() {
    let x = 2;

    try {
        // Calculate and print sum
        console.log("The sum is", sum * x);
        return true;
    } catch (error) {
        // Handle error
        console.log("Error aa gaya bhai");
        return false;
    } finally {
        // * This block ALWAYS executes
        // * even if there is a return statement above
        // Always runs
        console.log("Files are being closed and DB connection is being closed");
    }
}

main();