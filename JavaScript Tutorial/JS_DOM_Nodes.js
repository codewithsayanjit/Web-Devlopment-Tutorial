console.log("Hello world")

document.body.firstElementChild // returns the first child element of the body, which is usually the <h1> element in this case
document.body.firstElementChild.childNodes // returns all the child nodes, including text nodes (like whitespace) , comment nodes, and element nodes
document.body.firstElementChild.children // returns only the element nodes