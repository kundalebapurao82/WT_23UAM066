// Program to use switch case
const prompt = require('readline-sync'); // imported library

let myArr = [2, 3, 1, 5, 4, 8, 6, 7, 10, 9];
while(true){
    console.log(`For array [${myArr.join(", ")}] can do following operations: `);
    console.log(`1. Sum of elements of array`);
    console.log(`2. Reverse array`);
    console.log(`3. List even numbers`);
    console.log(`4. List odd numbers`);
    console.log(`5. Break`);
    let userInput = prompt.question(`Enter your choice: `);
    if(userInput == 5){
        break;
    }
}