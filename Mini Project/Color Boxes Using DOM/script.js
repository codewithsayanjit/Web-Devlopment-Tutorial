console.log(" Given 5 boxes, Assign a random color and a random background to each box using DOM concepts. ")
// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children


function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255); // This will give us a random number between 0 and 255. Math.random() gives us a random number between 0 and 1, and we multiply it by 255 to scale it up to the range we want. Math.ceil() is used to round the number up to the nearest whole number, ensuring we get an integer value for the RGB color.
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
Array.from(boxes).forEach(e => {    // We use Array.from() to convert the HTMLCollection (which is what getElementsByClassName returns) into an array, allowing us to use the forEach method to iterate over each box element.
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})

// To check the random color generation, we can log some random colors to the console:
console.log(Math.ceil(0 + Math.random() * 255))
console.log(Math.ceil(0 + Math.random() * 255))
console.log(Math.ceil(0 + Math.random() * 255))
console.log(Math.ceil(0 + Math.random() * 255))
console.log(Math.ceil(0 + Math.random() * 255))
console.log(Math.ceil(0 + Math.random() * 255))