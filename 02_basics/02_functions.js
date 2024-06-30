// While making a shoping cart where a user will keep on adding no. of items
/*function calculateCartPrice(num1){ // ... => is the rest operator
    return num1 
}
console.log(calculateCartPrice(200, 400, 500)); // o/p => 200 */
function calculateCartPrice(...num1){ // ... => is the rest operator
    return num1 
}
console.log(calculateCartPrice(200, 400, 500)); // o/p => [ 200, 400, 500 ]

function calculateCartPrice1(val1, val2, ...num2){
    return num2
}
console.log(calculateCartPrice1(200, 400, 500, 2000)); // o/p => [ 500, 2000 ]
// val1= 200, val2= 400, ...num2= [500,2000]
// *****************passing an object in function******************
const user = {
    username: "Anik",
    price: 199
}
function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handelObject(user)
handelObject({
    username: "sam",
    price: 399
})
// arrays
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray)); // o/p => 400
console.log(returnSecondValue([200, 400, 500, 1000])); // o/p => 400