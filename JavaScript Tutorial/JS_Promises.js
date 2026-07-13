//           PROMISE METHODS IN JAVASCRIPT

// 1. Promise.all(promises)
// Waits for all promises to resolve.
// Returns an array of results.
// If any promise rejects, the entire Promise.all() rejects.

let p1 = Promise.resolve("Result 1");
let p2 = Promise.resolve("Result 2");
let p3 = Promise.resolve("Result 3");

Promise.all([p1, p2, p3])
    .then((result) => {
        console.log("Promise.all:", result);
    })
    .catch((error) => {
        console.log("Promise.all error:", error);
    });


// 2. Promise.allSettled(promises)
// Waits for all promises to settle (fulfilled or rejected).
// Returns an array of objects with status and value/reason.

let p4 = Promise.resolve("Success");
let p5 = Promise.reject("Failed");

Promise.allSettled([p4, p5])
    .then((result) => {
        console.log("Promise.allSettled:", result);
    });


// 3. Promise.race(promises)
// Returns the result of the first promise that settles (fulfilled or rejected).

let p6 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Finished in 1 second");
    }, 1000);
});

let p7 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Finished in 3 seconds");
    }, 3000);
});

Promise.race([p6, p7])
    .then((result) => {
        console.log("Promise.race:", result);
    });


// ------------------------------------------------------

// 4. Promise.any(promises)
// Returns the first fulfilled promise.
// Ignores rejected promises.
// Throws Aggregateerror if all promises reject.

let p8 = Promise.reject("error 1");

let p9 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("First Successful Promise");
    }, 2000);
});

Promise.any([p8, p9])
    .then((result) => {
        console.log("Promise.any:", result);
    })
    .catch((error) => {
        console.log("Promise.any error:", error);
    });


// ------------------------------------------------------

// 5. Promise.resolve(value)
// Creates an already resolved promise.

let p10 = Promise.resolve("Resolved Value");

p10.then((result) => {
    console.log("Promise.resolve:", result);
});


// ------------------------------------------------------

// 6. Promise.reject(error)
// Creates an already rejected promise.

let p11 = Promise.reject("Something went wrong");

p11.catch((error) => {
    console.log("Promise.reject:", error);
});


// ======================================================
// MY ORIGINAL EXAMPLE USING Promise.allSettled()
// ======================================================

console.log("This is Promises");

// First Promise
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random(); // Generate random number

    // Reject if random number is less than 0.5
    if (a < 0.5) {
        reject("No random number was not supporting you");
    }
    else {
        // Resolve after 3 seconds
        setTimeout(() => {
            console.log("Yes I am done");
            resolve("Sayanjit");
        }, 3000);
    }
});

// Second Promise
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random(); // Generate random number

    // Reject if random number is less than 0.5
    if (a < 0.5) {
        reject("No random number was not supporting you 2");
    }
    else {
        // Resolve after 1 second
        setTimeout(() => {
            console.log("Yes I am done 2");
            resolve("Sayanjit 2");
        }, 1000);
    }
});

// Wait for both promises to settle
let p12 = Promise.allSettled([prom1, prom2]);

p12.then((result) => {
    console.log("Promise.allSettled Result:");
    console.log(result);
})
.catch((error) => {
    console.log(error);
});