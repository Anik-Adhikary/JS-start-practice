// to declare a function
function sayMyName(){ // function is a keyword sayMyName id the name of the function
console.log("A");
console.log("N");
console.log("I");
console.log("K");
}
// to call the function:
sayMyName() // () is the function's execution/reference
/* o/p =>   A
            N
            I
            K */
function addTwoNumbers(number1, number2){ // number1 and number2 are parameters; when we say the definition of a function, there whatever i/p we take can be numbers or string, etc are called parameters
    console.log(number1 + number2); // O/P => 17, 98, 9a, 9
}
addTwoNumbers(9,8) // during function calling the values passed in it are called arguments
addTwoNumbers(9, "8") // js took the values as string
addTwoNumbers(9, "a")
addTwoNumbers(9, null)
const result = addTwoNumbers(9,8)
console.log("Result:", result); // o/p => 17; Result: undefined
// why value Result is undefined means what is returned from function
function addthreenumbers(num1 , num2 , num3){
let result1 = num1 + num2 + num3
return result1
console.log("Anik"); // this will never execute because by default after return function will not do anything
}
const result1 = addthreenumbers(7 , 8 , 9)
console.log("Result:", result1); // o/p => Result: 24
//**********************another method**********************
function addfournumbers(num1 , num2 , num3, num4){
    return num1 + num2 + num3 + num4
}
    const result2 = addthreenumbers(7 , 8 , 9 , 8)
console.log("Result:", result2); // o/p => Result: 24

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
    }
    return `${username} just logged in` // string interpolation
}
console.log(loginUserMessage("Anik")) // Anik just logged in
/* if this happens console.log(loginUserMessage()) // o/p => undefined just logged in
to check for the above use if statement */

// if this happens console.log(loginUserMessage("")) // o/p => just logged in
console.log(loginUserMessage()) // o/p => Please enter a username
/* *************another method commonly used in react and react native***************
// ! converts true to false and false to true; in js empty string("") is considered false value, like that undefined is also considered as false value
function loginUserMessage(username){
    if(!username){ // then it will enter the if-block
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in` // string interpolation
}
 console.log(loginUserMessage("Anik")) // o/p => Please enter a username */
/* ******************if you want to avoid the above situation*******************
function loginUserMessage(username = "Sam"){ // it means we are assigning a default value; it will never go into the if-block username can never be undefined now as it is given a default value
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in` // string interpolation
}
console.log(loginUserMessage("Anik")) */