let value = 3
let negValue = -value
console.log(negValue); // o/p => -3
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2); //  ** gives power
console.log(2/3);
console.log(2%3); // % => modulous

let str1 = "hello"
let str2 = "Anik"
let str3 = str1 + str2
console.log(str3);// o/p =>helloAnik
console.log("1" + 2); // o/p => 12
console.log(1 + "2"); // o/p => 12
console.log("1" + "2"); // o/p => 12
console.log("1" + 2 + "2"); // o/p => 122
console.log(1 + 2 + "2"); // o/p => 12, ref. Ecmascript-abstract opeartions-type conversion-to primitive
console.log(true); // o/p => true
console.log(+true); // o/p => 1; complex code
//console.log(true+); // o/p => syntax error
//console.log(+""); // o/p => error
//let num1, num2, num3
//num1 = num2 = num3 = 2+2 // complex readable code, not suitable for production
let gameCounter = 100
gameCounter++; //post-fix operator- mdn docs
console.log(gameCounter); // o/p => 101
++gameCounter; //pre-fix operator- mdn docs
console.log(gameCounter); // o/p => 101, 