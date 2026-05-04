// const a = 10;
// let ab = 20;
// var a = 10;


// console.log(a)
// console.log(ab)



// {
//     var x  =100
//     let y = 200

//     console.log(x)
//     console.log(y)
// }

// console.log(x)  // Variables defined by "var" keyword are global, can be accessed outside the scope..... and it is older version
// console.log(y)   // Gives errror, because variable defined by "let" and "const" keyword, cannot be accessed outside the scope





var m = 10
let n = 20

console.log("m :", m)   // 10
console.log("n :", n)   //  20

{
    var m = 200
    let n = 100
    console.log("m :", m)   //200
    console.log("n :", n)   // 100

}

console.log("m :", m)    //200
console.log("n :", n)   //20





// -var : it is older versrion to declare variables, used before 2015
// After update and with new version of JS, let and const are used to declare variables
// let is used to declere variables, and it scope within block
// const is used to declare conatsnt variables, whose value cannot be changed once declared and initialized

let abc = 10
console.log(typeof(abc));       //number

const bcd = 100.10;
console.log(typeof(bcd));       //number

// different data types

let num = 10;
console.log("num: ",num);   //10
console.log(typeof(num))    // number

let my_name = "Akshay";
console.log("name: ",my_name);      //Akshay
console.log(typeof(my_name))        // string

let isPass = true;
console.log("isPass", isPass)   // true
console.log(typeof(isPass))     //boolean

let myVal = 100287n;
console.log("myVal: ",myVal);
console.log(typeof(myVal))

let val2 = null;
console.log("Val12: ", val2);   // null
console.log(typeof(val2))       // object

let val4;
console.log("val14: ", val4);   // undefined
console.log(typeof(val4))       // undefined



