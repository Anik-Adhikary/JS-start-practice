/* data can be stord and accessed and are charectorised umder
*********Primitive datatype***********
7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
*********Reference Datatype(non primitive)**********
Array, objects, Functions
=> JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.*/
//const score = 100 // comes under number category
//const score1.value = 100.3 // comes under number category
const isLoggedIn = false
const outsideTemp = null
let userEmail; // value is not assigned so its value will be undefined
const id = Symbol('123') // return type is a different datatype which is called symbol
const anotherId = Symbol('123') //  the value of id and anotherId will not be same
console.log(id === anotherId); // o/p => false even though in both the values are same but the return value is not same
// const bigNumber = 6767666767364763764786362764n
const heroes = ["Homelander", "Soldier Boy", "Billy Butcher"] // array
//*****************Objects****************** things inside curly braces are objects, datatypes can be anything: string, number, array, boolean,function ,etc.
let myObj = {
    name: "Anik",
    age: 22
}
//*****************Function*****************
const myFunction = function(){
    console.log("Hello World");
}
// to know the datatype use typeof
console.log(typeof outsideTemp); // o/p => object
console.log(typeof myFunction); // o/p => function object
// return type of non-primitive datatypes are object