// Synchronous: Code executed line by line, each tast wait for previous task to finish before executing, blocking. JS is single threaded and by default synchronous.

// console.log("Start");
// // arrow function to add two elements
// const add = (a, b) => {
//     return a + b;
// }

// let r = add(5, 10);
// console.log(r);
// console.log("End");
// this is called synchronous code, as each line is executed one after another.

// Asynchronous: Some tasks may take time to complete, like API call, file read, Database, etc. JS doesn't wait, it moves to next line, non blocking behaviour.
// used: fetching data from server, reading files, set timeout, API calls, etc.

//eg.
console.log("Start");
setTimeout(() => {      // tasks which requires time to complete, we write them in setTimeout function.
    console.log("Inside Timeout function");
}, 2000);               // this will execute after 2 seconds
console.log("End");
// This is asynchronous code. 
// SetTimeout is asynchronous, it waits for 2 seconds, meanwhile JS prints "End" and the ater 3 seconds it print "Inside Timeout function".

// Home work:
// Guess the output game
// Blocking and non blocking 2 examples
// Whrere sunsynchronous and asynchronous code is used is real life companies.
// How it can be used for API fetch, file read, etc.