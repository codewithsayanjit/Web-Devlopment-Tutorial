let a = [1, 93, 5, 6, 88]


for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)

}

a.forEach((value, index, arr) => {  // Calls a function ,once for each array element.
    console.log(value, index, arr)
})

let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {    // for-in loop can be used to get the keys from an array.
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element)
    }
}

for (const value of a) {    // for-of loop can be used to get the values from an array
    console.log(value)
}
