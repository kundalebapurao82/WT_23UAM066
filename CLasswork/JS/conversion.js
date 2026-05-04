// let num = 23

// // xplicit conversion of "NUMBER" to "String"
// let num_string = String(num)


// // printing num_string
// console.log(num_string)             // 23


// // prinitng type of num_string
// console.log(typeof(num_string))     // string



// Comparing two JavaScript objects always returns false.
let x= new String("Akshay")
let y= new String("Akshay")
console.log(x==y);          // false
console.log(x===y);         // false
console.log(x);             // [String: 'Akshay']
console.log(y);             // [String: 'Akshay']



// // Taking number as "String"
// let string1 = "123"
// console.log(typeof(string1))       // Type = String

// let string_to_num = Number(string1)

// console.log(string_to_num)       // 123

// console.log(typeof(string_to_num))    // Number

// // Taking word as "String"
// let string2 = "Akshay"

// let string2_to_num = Number(string2)     

// console.log(string2_to_num)       // Nan   ==== But: complete string cannot be converted to num
// console.log(typeof(string2_to_num))    // Number





// ==================== OPERATIONS ==========================

// console.log(5+2)
// console.log(5-2)
// console.log(5*2)
// console.log(5/2)
// console.log(5%2)





// ========================= String concatination ========================
// let str1 = "Hello"

// let str2 = "Akshay"

// let concated_string = str1+ " " +str2
// console.log(concated_string)




// // IMP : JavaScript only automatically convert a "String" to a Number in arithmetic operations
// console.log("1" + 2)
// console.log("1" + 2 + 2)

// console.log(1 + "2" )
// console.log(1 + 3 + "2")



// // ================= Operations with Boolean ==================
// console.log(true)
// console.log(+true)
// console.log(+"")


// ========== Post increment ============
// let game_counter = 100
// game_counter++

// console.log(game_counter)



// ========== Pre Increment ==============
// let score_counter = 200
// ++score_counter

// console.log(score_counter)