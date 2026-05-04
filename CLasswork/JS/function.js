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

