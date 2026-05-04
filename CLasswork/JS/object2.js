// SInglton objects

const user = new Object()

console.log(user)


const user1 = {}            // Non singlton object
console.log(user1)

user1.id = 1234;
user1.name = "Akshay";
user1.isLogin = true;
console.log()
console.log(user1)


// Objject iside object

const user3 = {
    email :  "bapurao2004@gmail.com",
    username : {
        fullName : {
            fName : "Akshay",
            lName : "Kundale"
        }
    }
}

console.log()
console.log(user3)

console.log(user3.username.fullName.fName)
console.log(user3.username.fullName)