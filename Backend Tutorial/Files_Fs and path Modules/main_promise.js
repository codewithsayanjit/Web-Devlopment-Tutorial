import fs from "fs/promises"
console.log(fs)

// * Here we are use await function without using async function because we have set "type": "module" in package.json file. If we don't set this type then we have to use async function to use await function.

let a = await fs.readFile("Sayanjit.txt")

let b = await fs.appendFile("Sayanjit.txt", "\n\nthis is amazing promise")
console.log(a.toString(), b)