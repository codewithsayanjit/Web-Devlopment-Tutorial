// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


// Get the button element
let button = document.getElementById("btn");

// Double-click event
button.addEventListener("dblclick", () => {
    // Change the content of the box
    document.querySelector(".box").innerHTML =
        "<b>Yayy you were clicked</b> Enjoy your click!";
});

// Right-click event
button.addEventListener("contextmenu", () => {
    // Show alert when right-clicked
    alert("Don't hack us by Right click Please");
});

// Keyboard event
document.addEventListener("keydown", (e) => {
    // Print key information in console
    console.log(e, e.key, e.keyCode);
});