// Array

let myArr = [0, 1, 2, 3, 4, 5]
console.log(`My array values: ${myArr}`)
console.log(`Type of array : ${typeof(myArr)}`)


console.log(`\n`)
const arr = new Array(0, 1, 2)
console.log(`My array values: ${arr}`)
console.log(`Type of array : ${typeof(arr)}`)
console.log(`arr[1]: ${arr[1]}`)



// Array methods

arr.push(7)   // insert new element at end
console.log(`Array elements: ${arr}`)
arr.pop()       // Removes last element of array
console.log(`Array elements: ${arr}`)

arr.unshift(9);     // Shifts all elements and adds new element at first position
console.log(`Array elements: ${arr}`)

arr.shift()     // Shifts all elements by removing first element
console.log(`Array elements: ${arr}`)

// includes checks that elements is present in array or not
console.log(arr.includes(10))  //false  

console.log(arr.indexOf(2)) // 2   : indexOf check index of an given element

