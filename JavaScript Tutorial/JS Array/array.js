let arr = [10, 11, 12, 14, 15, 17]
//  Index  0 , 1 , 2 , 3 , 4 , 5 

arr[1] = 566;
console.log(arr, typeof arr);
console.log(arr.length)

console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

// Array Methods :
let a = [1, 2, 3, 4, 6, 5]
console.log(a.toString())   // Converts an array to a string of comma separated values
console.log(a.join(" and "))    // Joins all the array elements using a separator.
a.pop() // remove last element from the array
console.log(a)
a.shift() // remove element from the beginning of the array
console.log(a)
a.push(7) // add a new element at the end of the array
console.log(a)
a.unshift(8) // add a new element at the beginning of the array
console.log(a)
// delete a[5] // Array elements can be deleted using the delete operator.The value is delete but memory is allocated.
// a.concat(a2)  // Used to join arrays to the given array
a.sort()    // Used to sort an array alphabetically
console.log(a)
let numbers = [21, 22, 23, 24, 25]
console.log(numbers)
numbers.splice(1, 3, 93, 45)    // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(numbers)
// numbers.slice(2)  // Slices out a piece from an array. It creates a new array.
numbers.reverse()
console.log(numbers)    // Reverses the elements in the source array.