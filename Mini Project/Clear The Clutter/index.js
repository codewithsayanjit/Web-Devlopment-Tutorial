/* 
You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders.

Example:
file1.jpg  → jpg/file1.jpg
file2.png  → png/file2.png
file3.txt  → txt/file3.txt

All files having the same extension will be moved into a folder named after that extension.
*/


// Import Promise-based File System module
import fs from "fs/promises"

// Import normal File System module
// Used here because existsSync() is available in this module
import fsn from "fs"

// Import Path module to safely work with file and folder paths
import path from "path"


// Path of the folder that contains the files to organize
const basepath = "C:\\Users\\sayan\\Desktop\\Web Devlopment ( Code With Harry )\\Mini Project\\Clear The Clutter"


// Read all files and folders present inside basepath
let files = await fs.readdir(basepath)


// Loop through every item found in the directory
for (const item of files) {

    // Print current file/folder name in the console
    console.log("running for ", item)

    // Get file extension
    // Example:
    // photo.jpg → jpg
    // notes.txt → txt
    let ext = item.split(".")[item.split(".").length - 1]

    // Conditions:
    // 1. Ignore JavaScript files (.js)
    // 2. Ignore JSON files (.json)
    // 3. Ensure the item actually has an extension
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {


        // Check whether a folder with the extension name already exists
        // Example:
        // If ext = "jpg", check if "jpg" folder exists
        if (fsn.existsSync(path.join(basepath, ext))) {

            // Folder already exists

            // Move the file into the existing extension folder
            // Example:
            // photo.jpg → jpg/photo.jpg
            fs.rename(          // Rename function is used to move files from one location to another.
                path.join(basepath, item),
                path.join(basepath, ext, item)
            )
        }
        else {

            // Folder does not exist

            // Create a new folder with extension name
            // Example:
            // Create folder "jpg"
            fs.mkdir(ext)

            // Move file into newly created folder
            fs.rename(
                path.join(basepath, item),
                path.join(basepath, ext, item)
            )
        }
    }

}