// Q1. Declaration of Array, function, and object 

// Array declaration and methods
let myArr = [1, 2, 3, 4, 5, 6];

console.log(`myArr: ${myArr}`);      // [ 1, 2, 3, 4, 5, 6 ]

let fruits = ["Apple", "Banana", "Chikku", "Grapes", "Guava", "Mango"];
console.log(fruits);     // [ 'Apple', 'Banana', 'Chikku', 'Grapes', 'Guava', 'Mango' ]

myArr.push(7); // Appends new elements to the end of an array
console.log(`myArr after push(7): ${myArr}`);

let poppedElement = myArr.pop();     // Removes the last element from an array and returns it
console.log(`popped element : ${poppedElement}`);
console.log(`myArr after pop(): ${myArr}`);

myArr.unshift(8);    // Inserts new elements at the start of an array
console.log(`myArr after unshift(8): ${myArr}`);        // myArr after unshift: 8,1,2,3,4,5,6

myArr.shift();       // Removes the first element from an array
console.log(`myArr after shift() : ${myArr}`);           // myArr after shift() : 1,2,3,4,5,6

console.log(`myArr includes 12 : ${myArr.includes(12)}`);        // false: Determines whether an array includes a certain element

console.log(`Index of 5 in myArr: ${myArr.indexOf(5)}`);         // 4 : Returns the index of the first occurrence of a value
console.log()

// Function declaration
// Function which gives my stored info
function myInfo(){
    console.log(`My name is : Bapurao Anil Kundale`);
    console.log(`I am student of AIML Engineering`);
};

myInfo()

// Function to calculate sum
console.log()
sum = calculateSum(5,25);
console.log(`SUm of 5 + 25 is : ${sum}`);

function calculateSum(a, b){
    return a+b;
}


// Declaration of object
console.log()
const myObj = {
    myName: "Bapurao Anil Kundale",
    myAddress : "Jalihal(BK)",
    myPRN: "23UAM066",
    myAge: 22
}
console.log("Name and PRN: ")
console.log(myObj["myName"])     //Bapurao Anil Kundale // method 1 to access values of object myObj["key"]
console.log(myObj.myPRN)        // 23UAM066 // method 2 to access values of object myObj.key
console.log()

// Q2. Find largest number in string/Array


// Q3. Find reverse number in string


// Q.4 Count vowels in string
console.log()
let myString = String("My name is Akshay").toLowerCase()
let myStringArray = myString.split('')
console.log(myStringArray)

let vowels = ['a', 'e', 'i', 'o', 'u']
let count = 0;
for (let i = 0; i< myStringArray.length; i++) {
  if(vowels.includes(myStringArray[i])){
    count++;
  }
}

console.log(`Vowels in "${myString}" : ${count}`)

// Q.5 Write code to check palindrome number
console.log()
let myNum = 12321;
let tempNum = myNum
let r, newNum = 0;
while(myNum>0){
    r = myNum % 10;
    newNum = (newNum*10) + r;
    myNum = Math.floor(myNum / 10);

}

if(tempNum == newNum){
    console.log(`${tempNum} is a palindrome`);
}
else{
    console.log(`${tempNum} is not a palindrome`)
}


// Q.6 Write program for fibonacci series
console.log()
function fibonacciSeries(n) {
  const fib = [0, 1]; 

  if (n <= 1) {
    return [0];
  } else if (n === 2) {
    return fib;
  }

  for (let i = 2; i < n; i++) {
   
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

console.log(`Fibonacci series length 10: ${fibonacciSeries(10)}`);   // [0, 1,  1,  2,  3, 5, 8, 13, 21, 34]



// Q.7 Find largest element in array
console.log()
let myArr1 = [7, 12, 42, 14, 65, 23, 16, 36]
console.log(`myArr1 = ${myArr1}`)
let largeValue = myArr1[0]

for(let i=1; i< myArr1.length; i++){
    if(myArr1[i]> largeValue){
        largeValue = myArr1[i]
    }
}

console.log(`Largest value in myArr1: ${largeValue}`)


// Q.8 Remove duplicate element in array
console.log()

const arrWithDup= [1, 2, 3, 2, 4, 3, 1, 4, 5];
const uniqueArray = [];

for(let element = 0; element< arrWithDup.length; element++){

    if (!uniqueArray.includes(arrWithDup[element])) {
        uniqueArray.push(arrWithDup[element]);
    }
}

console.log(`uniqueArray = ${uniqueArray}`);



// Q.9 Find missing number in array
console.log()

let arr4 = [1, 2, 3, 4, 5, 7, 8]
console.log(`arr4 : ${arr4}`)
let n = arr4.length + 1

let expectedSum = (n*(n+1))/2;

let actualSum = 0;
for(let i=0; i<arr4.length; i++){
    actualSum = actualSum + arr4[i];
}

let missingVal = expectedSum - actualSum;
console.log(`Missing val in arr4: ${missingVal}`)

// Q.10 Function to find even or odd
console.log()
function evenOdd(num){

    if(num%2 == 0){
        console.log(`${num} is even`);
    }
    else{
        console.log(`${num} is odd`)
    }
}

// Q.11 Write program for sum of array
console.log()
let arr5 = [10, 12, 15, 16, 17, 32]
console.log(`arr5 : ${arr5}`)
let sumOfELements = 0;
for(let i=0; i< arr5.length; i++){
    sumOfELements = sumOfELements + arr5[i];
}
console.log(`sum of elements of arr5 : ${sumOfELements}`)

