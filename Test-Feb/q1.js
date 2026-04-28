// Q1. Promise (2 Marks)

// a) What is a Promise in JavaScript? (1 Mark)
//    Promise is an object then return value in future
// Pending – operation is still in progress
// Resolved– operation completed successfully
// Rejected – operation failed

// In promise there are two callbacks 1. resolved and 2. rejected 
// If the promise is resolved then it goes to then() function and promise is reject then goes to the catch() function

// Why Promise Needed
// For run asynchronous tasks (like API calls, setTimeout).

/*

function resolve(){
    return new Promise((res,rej)=>{
        res("Resolved")
        
        })
}
function reject(){
    return new Promise((res,rej)=>{
        rej("Rejected")

        })
}

resolve().then((result) =>console.log(result)) // Resolved
reject().then(() =>console.log("Resolved")).catch((error) =>console.log(error))// Rejected
*/


// b) Write a program that creates a Promise and prints "Success" when resolved. (1 Mark)

function success() {
    return new Promise((resolve, reject) => {
        resolve()
    })
}

success().then(() => console.log("Success"))

