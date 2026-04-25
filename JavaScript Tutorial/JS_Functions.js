function nice(name) {       // Function Declaration
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
}

nice("Sayanjit")

function sum(a, b, c = 3) {     // "C=3" is the default value , It is called Default Parameter
    console.log(a, b, c)
    return a + b + c
}

result1 = sum(3)
result2 = sum(7, 5)
result3 = sum(3, 13, 1)

console.log("The sum of these numbers is: ", result1)       // The Output is NaN . "NaN" means  Not a number
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)


const func1 = (x) => {        // This is an Arrow Function 
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);

