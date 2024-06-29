/* stack, heap
for primitive datatypes stack memory is used stack(primitive)
Whenever stack memory is used we get the copy of the variable declared
for non-primitiive datatypes heap memory is used heap(non-primitive)
Whenever a memory is defined in heap we get a reference of the original value, whenever there is a change there will be change in the original value*/
/* *************Stack**************
let myYoutubeName = "VoughtInternational"
let anotherName = myYoutubeName

console.log(anotherName); // o/p => VoughtInternationl*/

let myYoutubeName = "VoughtInternational"
let anotherName = myYoutubeName
anotherName = "JohnHomelander"
console.log(myYoutubeName); // o/p => VoughtInternational
console.log(anotherName); // o/p => JohnHomelander
//**************Heap*************** 
let userOne = {
    email: "user@google.com", // reference of userOne
    upi: "user@ybl" // reference of userOne
}
let userTwo = userOne
// changing the email in userTwo
userTwo.email = "sb@google.com"
console.log(userOne.email); // o/p => sb@google.com
console.log(userTwo.email); // o/p => sb@google.com