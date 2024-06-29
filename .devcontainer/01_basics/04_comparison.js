console.log(2 > 1 ); // o/p => true
console.log(2 >= 1); // o/p => true
console.log(2 == 1); // o/p => false
console.log(2 != 1); // o/p => true
console.log("2" > 1); // o/p => true, datatypes must be same
console.log("02" > 1); // o/p => true, datatypes must be same
// ******* confusing comparisons**********
console.log(null > 0); // o/p => false, null is empty value
console.log(null == 0); // o/p => false
console.log(null >= 0); // o/p => true
// ******* confusing comparisons**********
console.log(undefined == 0); // o/p => false
console.log(undefined > 0); // o/p => false
console.log(undefined < 0); // o/p => false
// == and > or < works differently, different syntax
// === => strict check: it checks the values strictly meaning it checks the datatypes also
console.log("2" === 2); // different datatypes therefore o/p => false- no comparison