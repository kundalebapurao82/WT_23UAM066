// Symbool data type
// used when have to give unique id

const anotherId = Symbol("123");
console.log(anotherId)
console.log(typeof(anotherId))



const id  = 123;
console.log(id === anotherId);      // false  : because datatypes Symbol and number are different

// Javascript is dynamically types language
/* */


// Array

const numbers = ['121', '122', "123", "124", "125", "126", "127"]
console.log(numbers)
console.log(typeof(numbers))        // Object

const fruits = ['apple', 'banana', 'chikku', 'guava', 'grapes']
console.log(fruits)




// Objects  : collection of key-value pairs

const student = {
    fullName : "Akshay Anil Kundale",
    age : 22,
    class : "TY-Btech",
    cgpa : 9.03
}

console.log(student["fullName"])
console.log(student.age)
console.log(student.cgpa)

student.age = 23;
console.log("updated age: ",student.age)



// Functions

function myFunction(){
    console.log("My function definition.");
}

myFunction()        // function calling




console.log("\n");
// String

let str1= "Akshay"
console.log(str1);               // Akshay
console.log(typeof(str1));       // string


// String Interpolation
console.log(`Hello, My name is ${str1}`);       // Hello, My name is Akshay

let pName = "sumit";
console.log(`${pName}`);

console.log("\n")
const gameCount = new String("Akshay Anil Kundale")     // Creates object of string
console.log(gameCount.length)

console.log(gameCount.toLowerCase())
console.log(gameCount.toUpperCase())
console.log(gameCount.charAt(2))
console.log(gameCount.indexOf('A'))

// Memory

/*
    Stack and Heap

    Stack is used for pirmitive data types
    and Heap is used to store non-primitive data types


*/
console.log()
let myYouTubeName = "BAK";
let newMyYouTubeName = myYouTubeName;

console.log(myYouTubeName);     //BAK
console.log(newMyYouTubeName);      //BAK


newMyYouTubeName = "APK";
console.log(myYouTubeName);     //BAK
console.log(newMyYouTubeName);           //APK

/*
    Stack mainly used for primitive data types like string, number, boolean. it means copy of value is given.
    when we assign one varibale to another, a copy is made, so changing one does not affect others.


    Heap; used for non-primitive data types. like object, function array. Reference is given

*/

let user1= {
    fname: "Akshay",
    age: 21,
    id : 66
};

let user2 = user1;

user2.id = 64;

console.log(user1.id)       // 64
console.log(user2.id)       // 64

/**
 * Objects are stored in Heap memory. WHn we assign object to another variable, refernce is copied(i.e address)
 * Not the values.
 * If we change one, changes will appear in both variables, because both are referencing to single object
 */