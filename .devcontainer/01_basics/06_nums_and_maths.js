const score = 400
const balance = new Number(100)
console.log(balance); // o/p => [Number: 100]
console.log(balance.toString()); // o/p => 100
console.log(balance.toString().length); // o/p => 3
const balance2 = new Number(100.023456)
console.log(balance2.toFixed(2)); // o/p => 100.02
// toPrecision used for roundinng off and priority is given to the number before decimal
console.log(balance2.toPrecision(3)); // o/p => 100, first three values; if 4 is taken then o/p is 100.0 and if 5 is taken then o/p is 100.02
console.log(balance2.toPrecision(2)); // o/p => 1.0e+2
const hundreds = 1000000
console.log(hundreds.toLocaleString()); // o/p => 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // => represented in indian values
//*******************Maths******************** 
console.log(Math);
console.log(Math.abs(-4)); // abs => absolute value: - values becomes +; o/p => 4
console.log(Math.round(4.6)); // o/p => 5
console.log(Math.ceil(4.2)); // it chooses the top value; o/p => 5
console.log(Math.floor(4.9)); // it chooses the bottom value; o/p => 4
console.log(Math.min(4,3,6,8)); // o/p => 3
console.log(Math.max(4,3,6,8)); // o/p => 8
//*************most used****************
console.log(Math.random());// its value will always be from 0 to 1
/* 1st o/p => 0.06097413646552874
2nd o/p => 0.10889698726820085 */
// if I want the values in between 1 to 10 we multiply it by 10, adding it by 1 so that we should not get 0
console.log(Math.floor(Math.random()*10)+1); // o/p =>2
// in order to define both min and max
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // o/p => 15
