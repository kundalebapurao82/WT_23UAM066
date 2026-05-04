
const balance = new Number(100);

console.log(balance)        //[Number: 61]
console.log(typeof(balance))        // object

console.log(balance.toString())     //61
console.log(balance.toFixed(2))     //61.00  : When we build e-commerce website and precisions value were too long, thereofre we use toFixed(precision)
console.log(balance.toString.length)    //1


const h = new Number(1000000);
console.log(h.toLocaleString())     // By default US standard
console.log(h.toLocaleString('en-IN'))  // for india format

// Math
console.log()
console.log(Math)       // Object [Math] {}
console.log(Math.abs(-4))       //4 : makes negative value to positive

console.log(Math.round(46.78))  // Round offs value
console.log(Math.round(4.5))        //5
console.log(Math.round(4.5))        //5

console.log(Math.ceil(4.6))     //5 : Returns the smallest integer greater than or equal to its numeric argument.
console.log(Math.floor(4.6))    //4 : Returns the greatest integer less than or equal to its numeric argument.


console.log(Math.max(1,2,3,4,5,6))      //6

// Math.random(), why it is used and for which?



// ================= Homwork =======================

let num1 = 34.67;           // number with decimal
console.log(num1);          // 34.67
let num2 = 2345;            // number without decimal
console.log(num2);          // 2345


// Extra large or extra small numbers can be written with scientific (exponent) notation
let num4 = 2477e5;
console.log(num4);          // 247700000
let num5 = 23478596e-4;
console.log(num5);           // 2347.8596

// Javascript numbers are always double (64-bit floating point).

// Integers (numbers without a period or exponent notation) are accurate up to 15 digits

let num6 = 1234567891234569;
console.log(num6);              // 1234567891234569
let num7 = 123456789123456999;
console.log(num7)               // 123456789123457000


/**
 * JavaScript uses the + operator for both addition and concatenation.

    Numbers are added. Strings are concatenated.
 */

// If we add two numbers, the result will be a number

let x1 = 10;
let y1 = 20;
console.log(x1+y1);         // 30

// If we add two strings, the result will be a string concatenation
let x2 = "10";
let y2 = "20";
console.log(x2+y2);         // 1020

// If we add a number and a string, the result will be a string concatenation
let x3 = 10;
let y3 = "20";
console.log(x3+y3);         // 1020


// If we add a string and a number, the result will be a string concatenation
let x4 = "10";
let y4 = "20";
console.log(x4+y4);         // 1020


let x5 = 10;
let y5 = 20;
let z = "The result is: " + x5 + y5;
console.log(z);             // The result is: 1020

let x6 = 10;
let y6 = 20;
let z6 = "30";
let result = x6 + y6 + z6;      
console.log(result)         // 3030 because, The JavaScript interpreter works from left to right




let x7 = "100";
let y7 = "10";
let z7 = x7 / y7;
console.log(z7);            // 10  because, JavaScript will try to convert strings to numbers in all numeric operations


let x8 = "100";
let y8 = "10";
let z8 = x8 - y8;
console.log(z8)         // 90


let x9 = "100";
let y9 = "10";
let z9 = x9 * y9;
console.log(z9)         // 1000


/**
 * NaN is a JavaScript reserved word indicating that a number is not a legal number.
    Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number)
 */
let x10 = 100 / "Apple";
console.log(x10);           // NaN

// If string is number, but in string format
let x11 = 100 / "10";
console.log(x11)                // 10

// NaN is a number: typeof NaN returns number
let x12 = NaN
console.log(typeof(x12))            // number



// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number

// divide by zero

let a2 = 10/0;
console.log(a2)         // Infinity

let a3 = -10/0;
console.log(a3)         // -Infinity

// Infinity is a number: typeof Infinity returns number.
let a4 = 1000/0;
console.log(a4);                    // Infinity
console.log(typeof(a4));            // number
