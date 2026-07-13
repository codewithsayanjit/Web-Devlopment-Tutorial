let arr = [1, 13, 5, 7, 11];
/*
let newArr = []
for (let index = 0; index < arr.length; index++) {      // For loop for map
    const element = arr[index];
    newArr.push(element**2)
}
console.log(newArr)
*/

let newArr = arr.map((e, index, array) => {   // Map: Calls a defined callback function on each element of an array, and returns an array that contains the results.
    return e ** 2
})
console.log(newArr)


const greaterThanSeven = (e) => {
    if (e > 7) {
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))   // Filter : Returns the elements of an array that meet the condition specified in a callback function. 


let arr2 = [1, 2, 3, 4, 5, 6]
const red = (a, b) => {
    return a + b
}
console.log(arr2.reduce(red))   // Reduce an array to a Single value.