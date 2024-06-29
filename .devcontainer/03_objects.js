// object declartion: 2 ways literal and constructor
// concept of singleton: whenever a constructor is used to make then a singleton object is formed, whenever an object is not declared by singleton then an object is not formed
// Object.create => declared by constructor; singleton is formed in this case
// declaring a symbol
const mySym = Symbol("key1") // declaring a symbol

const JsUser = {
    name: "Anik",
    "full name": "Anik Adhikary",
    [mySym]: 'mykey1', // taking symbol as an object key
    age: 22,
    location: "Durgapur",
    email: "vought@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday"," Wednesday"]
}
// 1st method 
console.log(JsUser.email);
// 2nd method
console.log(JsUser["email"]);
console.log(JsUser["full name"]); // it cann't be accessed by .; it has tobe done by this way
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = "anik@chatgpt.com"
// Object.freeze(JsUser) // object value will not change after this

JsUser.greeting = function(){
    console.log("Hello JsUser");
}
console.log(JsUser.greeting()); // o/p => Hello Js user; [Function (anonymous)] if () is not given
JsUser.greetingtwo = function() {
console.log(`Hello Js user, ${this.name}`); // string interpolation
}
console.log(JsUser.greetingtwo()); // o/p => Hello Js user, Anik; [Function (anonymous)] if () is not given