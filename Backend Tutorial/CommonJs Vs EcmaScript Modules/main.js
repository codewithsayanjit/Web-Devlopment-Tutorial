// * This code is using ES(EcmScript) Modules (import)


// Import named exports (a, b, d) from module.js
import { a, b, d } from "./module.js";
console.log(a, b, d);

// Import the default export from module.js
// You can give any name to the default import
import sayanjit from "./module.js";
console.log(sayanjit);


/* CommonJS Wrapper Function (used internally by Node.js)
Node.js wraps every CommonJS file inside a function before executing it.

(function (exports, require, module, __filename, __dirname) {

    Your module code actually runs here 

});


? CommonJS Example (Older Node.js Module System)

Import data from module2.js using require() */
// const a = require("./module2.js");

// Print imported data along with current file and folder paths
// console.log(a, __dirname, __filename);