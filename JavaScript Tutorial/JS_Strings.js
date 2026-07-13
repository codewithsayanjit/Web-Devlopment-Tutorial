let a = "Sayanjit";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);
console.log(a[8]);

console.log(a.length)

let real_name = "Sayanjit"
let friend = "Dipayan"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`)       // This is Template Literals.It use backtics(``) instead of quotes to define a string.

let b = "Shivam"
// String Properties and Methods
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length) 
console.log(b.slice(1, 5))      // 1 start point , 5 not included
console.log(b.slice(2))         // start from 2 to end 
console.log(b.replace("ivam", "ubhankar"))
console.log(b.concat(a, "\tAishwariya", "\tRahul", "\tPriya"))
console.log(b.indexOf("a"))
console.log(b.startsWith("S"))
console.log(b.endsWith("a"))

let c = "Sayanjit\tJana"      // This is called Escape Sequence Characters: \n - New Line , \t - Tab, \r - Carriage Return
console.log(c)