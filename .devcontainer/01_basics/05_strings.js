const name = "Anik"
const repoCount = 50
// console.log(name + repoCount + "Value"); // con-catination, o/p => Anik50Value
console.log(`Hello my name is ${name} and my repo count is ${repoCount} `); // modern way of syntax, o/p => Hello my name is Anik and my repo count is 50 
const gameName = new String('Anikkr') // another way of declaring string
/* String {Anikkr}
    0: "A"
    1: "n"
    2: "i"
    3: "k"
    4: "k"
    5: "r"
    length: 6
0 is the key and value is A
1 is the key and value is n
and so on... 
[[prototype]]: String
[[PrimitiveValue]]: "Anikkr" */
console.log(gameName[0 ]); // o/p => A
console.log(gameName.__proto__); // one of the methods/functions is accessed, o/p => {}
console.log(gameName.length); // o/p => 6
console.log(gameName.toUpperCase()); // o/p => ANIKKR; it didn't change the oiginal string 
console.log(gameName.charAt(3)); // o/p => k; gives the character at the position mentioned
console.log(gameName.indexOf('r')); // o/p => 5; gives the position of the character mentioned
//*********************************** 
const gameName1 = new String('Anik-kr')
const nstring = gameName1.substring(0,4) // 0 => starting address, 4 => ending address; negative values cannot be used in substring
console.log(nstring); // o/p => Anik; 4th address is not included, i.e. only from 0 to 3
//************************************ 
const anotherString = gameName1.slice(-5,4) // negative values can also be added in slice, then it will start from reverse
console.log(anotherString); // o/p => ik
//************************************
const newStringOne = "   Anik   "
console.log(newStringOne); // it does not remove starting and ending spaces
console.log(newStringOne.trim()); // trim() eliminates starting and ending spaces
//*************************************
const url = "https://vought.com/vought%international" // if an user has given space b/w vought and international, browser doesn't understand spaces so it convert the space into %20 so to remove this or to remove the vougt url
console.log(url.replace('%20', '-')) // o/p https://vought.com/vought-international
console.log(url.includes('vought')); // o/p => true; whether the word mentined is present in the string or not
console.log(gameName1.split('-')) // o/p => [ 'Anik', 'kr' ], to convert the string into array and also can be used to split


 
