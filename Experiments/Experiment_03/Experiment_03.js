// Functions
// Functions are reusable code blocks designed to perform a particular task

//Functions are executed when they are called or invoked.

//Functions are fundamental in all programming.

function addTwoNumbers(num1, num2){
    let result = num1 + num2;
    return result;
    // console.log("Hello JS");                 // This line cannot be executed, because, before this, function/cursor will return to caller.
}

res = addTwoNumbers(5, 7);

console.log(`Addition of two numbers: ${res}`)
console.log(res)

function loginMessage(userName){
    return `${userName} just login.....`;
}
console.log(loginMessage("Akshay"))
console.log(loginMessage())                 // When our string is empty, it returns undefined....

function loginMessage1(userName){
    
    if(userName === undefined){
        console.log(`Please enter username`);
    }
    return `${userName} just login.....`;

}
console.log(loginMessage1("Akshay"))


console.log()
function calculatePrice(num1){
    return num1;
}
console.log(calculatePrice(200, 300, 400));             // If we pass 3 arguuments and there is only one parameter to accept it, then it will accept only 1 argument

function calculatePrice1(...num1){                         // Rest operator or spread operator gives all values in bundle
    return num1;
}
console.log(calculatePrice1(200, 300, 400));            // [ 200, 300, 400 ]


// Handling object in function
const username =  {
            fName : "Akshay",
            age : 21
}

function handleObject(obj1){
    console.log(`Username is ${obj1.fName}, age is : ${obj1.age}` )
}

handleObject(username)


console.log()
// Using array in function

myArr = [1, 2, 3, 4, 5, 6]

function arrayHandler(arr1){
    console.log(`Array elements: `)

    for(let i=0; i<arr1.length; i++){
            console.log(`${arr1[i]}`);
    }
}

arrayHandler(myArr)
