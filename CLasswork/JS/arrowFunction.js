
/**
 * Arrow Functions were introduced in ES6 and are commonly used in modern JavaScript.
 * Arrow Functions allow a shorter syntax for function expressions.
 */

// this keyword is used to inform current context

// function myFun(){
//     console.log(`Hello JS....`)
// }

// function fun1(){
//     username = "Akshay"
//     console.log(this)
// }
// fun1()

// // Arrow function
// const fun0 = function(){
//     let username = "Akshay"
//     // console.log(username)
//     console.log(this)
// }
// fun0()


// const fun2 = () =>{
//     let userName = "Akshay";
//     console.log(this.userName)              // undefined
// }
// fun2()


const addNums = (num1, num2)=>{
        console.log(num1+num2)
}

addNums(10,20);



// Write a code for arrow function with 2 examples
const areaOfTriangle = (base, height) =>{
        let area = (1/2)*base*height;
        return area;
}

console.log();
console.log(`Area of triangle with base ${20}, and height ${15}, is: ${areaOfTriangle(20,15)}`)


// function to find sum of elements of array
const sumOfElementsOfArray = (arr) =>{
        let len = arr.length;
        let sum = 0;
        for(let i=0; i<len; i++){
                sum += arr[i];
        }
        return sum;

}
let arr1 = [2, 34, 32, 25, 14, 65, 78, 87]
console.log()
console.log(`Sum of elements of array: ${sumOfElementsOfArray(arr1)}`)

// Program to use switch case



// How to use truthy and falsy values with examples
// How to use ternary operator in JS
// Program to use loops in array: For in, For out
// How to use map and filter function in JS