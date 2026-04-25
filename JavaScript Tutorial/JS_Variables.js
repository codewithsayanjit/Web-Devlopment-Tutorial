console.log("Hey I am Sayanjit Jana");

var a = 5; // var is globally scoped ,can be updated & re-declared . 
// a = a + 1
let b = 6;
let c = "Sayanjit";
// var 55a = "Rohan"; // Not Allowed

console.log(a, b, c);
console.log(typeof a, typeof b, typeof c);
{
    let a = 66; // let is block scoped , can be updated but not re-declared .
    console.log(a)
}
console.log(a)
const a1 = 40; // const is block scoped , can neither be updated  nor be declared .
console.log(a1);
// a1 = a1 + 1; // Not Allowed because a1 is constant


let x = "Sayanjit";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null; // type of null is "Object"

console.log(x, y, z, p, q, r) // These x,y,z,p,q,r  data types are called Primitive Data Types. 
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)


let o = {               // This is called an Object in JavaScript. 
    name: "Harry", 
    "job code": 5600,
    "is_handsome": true
}

console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);