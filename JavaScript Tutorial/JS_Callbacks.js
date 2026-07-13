// Print messages to the console
console.log("Sayanjit is a hacker")
console.log("Rohan is a hacker")

// setTimeout with 0 ms delay
// These callbacks are placed in the event queue and run after the current synchronous code finishes executing.
setTimeout(() => {
    console.log("I am inside settimeout 1")
}, 0);

// Another setTimeout with 1000 ms delay
setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 1000);

// This will execute before the setTimeout callbacks because it is synchronous code.
console.log("The End")

// Arrow function that simply prints "Nothing"
const fn = () => {
  console.log("Nothing")
}

// Callback function
// arg = value passed to the callback
// fn = function passed as an argument
const callback = (arg, fn) => {     
    // When you type "anfn" in a JavaScript or TypeScript file and press Tab or Enter, VS Code can automatically create an arrow function. This is a shortcut for creating arrow functions.

    console.log(arg)  // Print the received argument
    fn()              // Execute the received function
}

// Function to dynamically load an external script
const loadScript = (src, callback) => {

    // Create a new <script> element
    let sc = document.createElement("script");

    // Set the source URL of the script
    sc.src = src;

    // Assign the callback to run when the script loads
    // NOTE: callback("Sayanjit", fn) is executed immediately, and its return value is assigned to sc.onload.
    sc.onload = callback("Sayanjit", fn);

    // Add the script element to the document head
    document.head.append(sc)
}

// Load the Prism.js library from CDN and use the callback function
loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
    callback
)

// Expected console output order:
/* Sayanjit is a hacker
Rohan is a hacker
The End
Sayanjit
Nothing
I am inside settimeout 1
I am inside settimeout 2 */