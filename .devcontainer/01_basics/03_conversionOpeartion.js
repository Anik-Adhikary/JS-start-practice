let score = 33
console.log(typeof score); // o/p => number
/* ********************
let score_1= "33"
console.log(typeof score_1); // o/p => string
if I got the value in string but I want to do 100% opeartion in number then
let valueInNumber  = Number(score_1) // capital format Number
console.log(typeof valueInNumber); // o/p => number
***********************
let score_1 = "33abc"
console.log(typeof score_1); // o/p => string
let valueInNumber  = Number(score_1) 
console.log(typeof valueInNumber); // o/p => number
console.log(valueInNumber); // o/p => NAN: not a number as score_1 is not a number but it was converted
***********************
let score_1 = null 
console.log(typeof score_1); // o/p => object
let valueInNumber  = Number(score_1) 
console.log(typeof valueInNumber); // o/p => number
console.log(valueInNumber); // o/p => 0
************************
let score_1 = undefined
console.log(typeof score_1); // o/p = undefined
let valueInNumber  = Number(score_1) 
console.log(typeof valueInNumber); // o/p = number 
console.log(valueInNumber); // o/p = NAN*/
let score_1 = true // boolean
console.log(typeof score_1); // o/p => boolean
let valueInNumber  = Number(score_1)
console.log(typeof valueInNumber); // o/p = number 
console.log(valueInNumber); // o/p => 1
/* *****************
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // o/p => true
********************
let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // o/p => false
******************** */
let isLoggedIn = "Anik"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // o/p => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber); // o/p => 33
console.log(typeof stringNumber); // o/p => string