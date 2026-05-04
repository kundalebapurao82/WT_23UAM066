
// Creating my Object : using object literals.
// Object consists of key-value pairs
let myObj = {
    myName : "Akshay",
    age : 21,
    location :"Sangli",
    email:"bapurao2004@gmail.com",
    isLogin : true,
    lastLoginDay : ["Moaday", "Tuesday", "Wednesday"],
    "Full Name" : "Bapurao Anil Kundale",
}

/**
 * Two ways to declare object:
 * 1) Object literals
 * 2) Constructor
 * 3) Singletone
 * 
 * When we create Constructor it create singletone object, it means itself object
 * When we create object literal, sinngletone not created.
 * When we create object constructor, singltone created.
 */


console.log(myObj.email);           // select single field of object
console.log();
console.log(myObj);
console.log();
console.log(myObj["Full Name"]);        // Cannot be accessed using '.', when key have space between


// Symbol example

const mySymbol = Symbol("My key 1")
const myObj2 = {
    [mySymbol] : "Akshay"
}

console.log()
console.log(myObj2)                         // { [Symbol(My key 1)]: 'Akshay' }
console.log(typeof(myObj2))                 // object
console.log(typeof(myObj2[mySymbol]))       // string


myObj.email = "kundalebapurao82@gmail.com"
console.log()
console.log(myObj.email)    // updated value: kundalebapurao82@gmail.com

// Object.freeze(myObj)        // freezes the object

myObj.email = "23UAM066@dkte.ac.in";        // doesn't change the value

console.log(myObj.email)            // kundalebapurao82@gmail.com


myObj.greeting = function() {
    console.log("Hello JS user.");
}

console.log(myObj.greeting())