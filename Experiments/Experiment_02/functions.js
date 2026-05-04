// NORMAL FUNCTION 
function greet() {
    
    console.log("Hello, this is a normal function");
}
greet();


//FUNCTION WITH PARAMETERS 
function add(a, b) {

    console.log("Addition:", a + b);
}
add(5, 10);


// FUNCTION WITH RETURN VALUE 
function multiply(a, b) {

    return a * b;
}

let result = multiply(4, 5);
console.log("Multiplication:", result);


// FUNCTION EXPRESSION 
const subtract = function(a, b) {
    return a - b;

};
console.log("Subtraction: ", subtract(10, 3));


// ARROW FUNCTION 
const divide = (a, b) => {

    return a / b;

};
console.log("Division:", divide(20, 4));


// SHORT ARROW FUNCTION 
const square = x => x * x;
console.log("Square:", square(6));


//ANONYMOUS FUNCTION 
setTimeout(function() {

    console.log("Anonymous function executed after 1 second");

}, 1000);


// RECURSIVE FUNCTION 
function factorial(n) {

    if (n === 0) {

        return 1;
    }
    return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));


//DEFAULT PARAMETERS
function greetUser(name = "Guest") {
    
    console.log("Welcome,", name);

}
greetUser();

greetUser("Rahul");


// REST PARAMETERS
function sumAll(...numbers) {

    let sum = 0;
    for (let num of numbers) {

        sum += num;
    }

    return sum;
}
console.log("Sum using rest:", sumAll(1, 2, 3, 4));


// FUNCTION AS OBJECT METHOD
const student = {
    name: "Akshay",
    display: function() {

        console.log("Student Name:", this.name);

    }
};

student.display();



// HIGHER ORDER FUNCTION
function operate(a, b, operation) {

    return operation(a, b);
}

let addFunc = (x, y) => x + y;

console.log("Higher Order Function Result:", operate(5, 3, addFunc));