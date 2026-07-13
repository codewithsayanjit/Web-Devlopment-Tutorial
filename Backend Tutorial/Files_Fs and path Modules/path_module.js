import path from "path";
console.log(path)


// File path
let myPath = "C:/Users/sayan/Desktop/Web Devlopment ( Code With Harry )/Backend Tutorial/Files_Fs and path Modules/main.js";

// Get file extension
console.log(path.extname(myPath)); // .js

// Get directory (folder) path
console.log(path.dirname(myPath));

// Get file name
console.log(path.basename(myPath)); // main.js

// Join path segments safely
console.log(path.join("c:/", "programs\\sayanjit.txt"));