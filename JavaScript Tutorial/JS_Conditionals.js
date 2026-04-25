// console.log("This is a conditional tutorial")

let age = 5;
let grace = 2;

age += grace // age = age + grace
console.log(age)
console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace) // ** is used for exponentiation (multiplication of a number by itself a certain number of times)     7^2 = 7*7 = 49
console.log(age % grace)

/*
I am a 
multiline 
comment
*/

if (age == 18) {
    console.log("You can drive");
}

else if (age == 0) {
    console.log("Are you kidding?")
}

else if (age == 1) {
    console.log("Are you again kidding?")
}

else {
    console.log("You cannot drive");
}


a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);  //Ternary operator is a shorthand for if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. 
// The syntax is: condition ? expressionIfTrue : expressionIfFalse
console.log(c)
/*
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}
*/