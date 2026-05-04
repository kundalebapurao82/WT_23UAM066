var a = 10;              // number
let b = 5;               // number
const name = "Bapurao";  // string

console.log("Variable a:", a);
console.log("Variable b:", b);
console.log("Name:", name);


let num = 25;            // Number
let str = "Hello";       // String
let isTrue = true;       // Boolean
let x;                   // Undefined
let y = null;            // Null

console.log("\n--- Data Types ---");
console.log("Number:", num);
console.log("String:", str);
console.log("Boolean:", isTrue);
console.log("Undefined:", x);
console.log("Null:", y);


console.log("\n--- Arithmetic Operators ---");
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);

console.log("\n--- Comparison Operators ---");
console.log("a == b:", a == b);
console.log("a === b:", a === b);

console.log("a > b:", a > b);

console.log("a < b:", a < b);
console.log("a != b:", a != b);


let p = true;
let q = false;

console.log("\n--- Logical Operators ---");

console.log("p AND q:", p && q);
console.log("p OR q:", p || q);

console.log("NOT p:", !p);



let c = 10;

console.log("\n--- Assignment Operators ---");

c += 5;             // c = c + 5
console.log("c += 5:", c);

c -= 2;
console.log("c -= 2:", c);

c *= 2;
console.log("c *= 2:", c);


let i = 1;

console.log("\n--- Increment / Decrement ---");
i++;
console.log("Increment:", i);

i--;

console.log("Decrement:", i);


console.log("\n--- Type Checking ---");
console.log("Type of num:", typeof num);

console.log("Type of str:", typeof str);

console.log("Type of isTrue:", typeof isTrue);


console.log("\n--- If-Else Example ---");

if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("b is greater than or equal to a");
}


console.log("\n--- Loop Example (for loop) ---");

for (let j = 1; j <= 5; j++) {
    console.log("Value of j:", j);
}