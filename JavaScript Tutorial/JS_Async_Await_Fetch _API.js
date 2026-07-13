// Simulate getting data from a server using Promise
function getDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455); // Data received after 3.5 seconds
        }, 3500);
    });
}

// settle = resolve or reject
// resolve = promise completed successfully
// reject = promise failed

// Async function using Fetch API
async function getData() {

    // GET Request Example
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    // POST Request Example
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
    });

    // Convert response into JSON
    let data = await x.json();

    return data;
}

// Main async function
async function main() {

    console.log("Loading modules");

    console.log("Do something else");

    console.log("Load data");

    // Wait until getData() finishes
    let data = await getData();

    console.log("Received Data:");
    console.log(data);

    console.log("Process data");

    console.log("Task 2");
}

// Call main function
main();


// ===============================
// Promise Example using .then()
// ===============================

let promiseData = getDataPromise();

promiseData.then((value) => {

    console.log("Promise Resolved Value:");
    console.log(value);

    console.log("Process data");

    console.log("Task 3");

}).catch((error) => {

    console.log("Promise Rejected:");
    console.log(error);

});