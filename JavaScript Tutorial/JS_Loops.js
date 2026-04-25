console.log("I am a tutorial on Loops")

let a = 1;
for (let i = 0; i < 3; i++) {    // for loop is used to execute a block of code a certain number of times
    console.log(a + i);
}

let obj = {                         // an object with key and properties
    name: "Sayanjit",
    role: "Programmer",
    Github: "Code With Sayanjit"
}

for (const key in obj) {        // for in loop is used to iterate over the properties of an object
    console.log(key, obj)
}

for (const s of "Sayanjit") {      // for of loop is used to iterate over the values of an iterable object (like arrays, strings, etc.)
    console.log(s)
}

let i = 0;
while (i < 4) {             // while loop is used to execute a block of code as long as a specified condition is true
    console.log(i)
    i++;
}

let j = 10;
do {                            // do while loop is similar to while loop but it executes the block of code at least once before checking the condition
    console.log(j)
    j++;
} while (j < 5)
