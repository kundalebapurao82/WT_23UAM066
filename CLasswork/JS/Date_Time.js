
// let myDate = new Date()
// console.log(myDate)

// console.log()
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toString())


// // Timestamp 
// // when we create pole in application, then we use Timestamp
// console.log()
// let myTimeStamp = Date.now()        // Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).
// console.log(myTimeStamp)

// console.log(Date.now())         // compare in miliseconds

// console.log(Date.now()/1000);  // converts in second

// console.log(Math.floor(Date.now()/1000))      

// let newDate = new Date();
// console.log(newDate.getDate())
// console.log(newDate.getMonth())
// console.log(newDate.getFullYear())




// console.log(newDate.toLocaleString())

// console.log(newDate.toLocaleString('default', {
//     weekday:"long"

// }))

// Home work

let d = new Date();
console.log(d);             // 2026-01-29T03:13:54.573Z

let d2 =  new Date("2025-01-29");
console.log(d2);            // 2025-01-29T00:00:00.000Z

// new Date(date string) creates a date object from a date string
let d3 = new Date("January 29, 2026 8:48:00");
console.log(d3);                    // 2026-01-29T03:18:00.000Z

/**
 * JavaScript counts months from 0 to 11
 * Specifying a month higher than 11, will not result in an error but add the overflow to the next year
 */
const d4 = new Date(2018, 15, 24, 10, 33, 30);
console.log(d4);                                // 2019-04-24T05:03:30.000Z

/**
 * One and two digit years will be interpreted as 19xx: Previous Century
 */
const d5 = new Date(99, 11, 24);            // 1999-12-23T18:30:00.000Z
console.log(d5)
const d6 = new Date(9, 11, 24);
console.log(d6)                             // 1909-12-23T18:30:00.000Z


/**
 * JavaScript stores dates as number of milliseconds since January 01, 1970.
    Zero time is January 01, 1970 00:00:00 UTC.
    One day (24 hours) is 86 400 000 milliseconds.
 */
// 01 January 1970 plus 0 milliseconds is
const d7 = new Date(0);
console.log();
console.log(d7);                // 1970-01-01T00:00:00.000Z



// When you display a date object in HTML, it is automatically converted to a string, with the toString() method
let d8 = new Date();
console.log();
console.log(d8.toString());             // Thu Jan 29 2026 09:02:27 GMT+0530 (India Standard Time)

// The toDateString() method converts a date to a more readable format
let d9 = new Date();
console.log();
console.log(d9.toDateString())          // Thu Jan 29 2026

// The toUTCString() method converts a date to a string using the UTC standard
let d10 = new Date();
console.log();
console.log(d10.toUTCString());         // Thu, 29 Jan 2026 03:34:37 GMT

// The toISOString() method converts a date to a string using the ISO standard
let d11 = new Date();
console.log();
console.log(d11.toISOString());         // 2026-01-29T03:35:44.628Z

const d12 = new Date("03/25/2015");
console.log();
console.log(d12);                       // 2015-03-24T18:30:00.000Z


/**
 * If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.

    Date.parse() returns the number of milliseconds between the date and January 1, 1970
 */
let msec = Date.parse("March 21, 2012");
console.log();
console.log(msec);                      // 1332268200000

// You can then use the number of milliseconds to convert it to a date object
let msec1 = Date.parse("March 21, 2012");
const d13 = new Date(msec);
console.log();
console.log(d13);                       // 2012-03-20T18:30:00.000Z


// Date get methods
let date1 = new Date();
console.log();
// The getFullYear() method returns the year of a date as a four digit number
console.log(date1.getFullYear());        // 2026

// The getMonth() method returns the month of a date as a number (0-11)
console.log(date1.getMonth());             // 0 - January

// The getDate() method returns the day of a date as a number (1-31)
console.log(date1.getDate());               // 29

// The getHours() method returns the hours of a date as a number (0-23)
console.log(date1.getHours());               // 9  - i.e, 9 AM

// The getMinutes() method returns the minutes of a date as a number (0-59)
console.log(date1.getMinutes());              // 26   - 9:26 AM

//The getSeconds() method returns the seconds of a date as a number (0-59)
console.log(date1.getSeconds());                // 14   - 9:27:14 AM

