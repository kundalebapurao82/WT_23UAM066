
const superHeros = ["Shaktiman", "Doremon", "Balveer"]

const heros = ["Tom", "ShinChan"]

superHeros.push(heros)

console.log(superHeros)

console.log(superHeros[3])
console.log(superHeros[4])

console.log(superHeros[3][1])
superHeros.pop()

const arrs = superHeros.concat(heros)       // Adds elements of second array into calling array
console.log(arrs)

console.log()
const arr2 = [1, 2, 3, [4, [5, 6], 7, 8], 9 ,10]   // Nested arrays
const arr3  = arr2.flat(Infinity)           // Flattenes all levels no matter how deep 
                                            // Flat does not change original array, it returns new array 
                                            // useful when working with new data
console.log(arr3)


const arr4 = arr2.flat(1)       // specifies How the nested array sholud be flattened, default value is one
console.log(arr4)


// Data scripting using this method
console.log()
console.log(Array.isArray("Akshay"))  // checks that given value is array or not


console.log(Array.isArray(heros))   // true

console.log(Array.from("Akshay"))   // Each letter of string is splitted into array
                                    // Converts an iterable object like string, set, map into an array
                                    // Create array from interable object

console.log()
console.log(Array.from({name : "Akshay"}))

console.log(Object.keys({name : "Akshay"}))


let score1  = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))  // Creates new array form gives values not matter how many
                                                // Creates array form values