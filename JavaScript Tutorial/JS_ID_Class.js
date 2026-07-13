console.log("Sayanjit")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor = "red"

document.getElementById("redbox").style.backgroundColor = "red" // It is used for global ID and it can not be used for multiple elements. It is used to select a single element by its ID.

// document.querySelector(".box").style.backgroundColor = "green"; // It is used to select the first element with the class "box" and change its background color to green.
// console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{ // It is used to select all elements with the class "box" and change their background color to green.`
    e.style.backgroundColor = "green";
}) 