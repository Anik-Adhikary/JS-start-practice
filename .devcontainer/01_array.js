// Array
const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Black Noir", "Atrain"] // declaring string array
const myArr2 = new Array(1, 2, 3, 4, 5) // another way of declaring array
console.log(myArr[0]); // o/p => 0; as the index mentioned was 0
console.log(myArr[1]); // o/p => 1
// Array methods
myArr.push(6) // it adds the value in the array
console.log(myArr); /* o/p => [0, 1, 2, 3, 4, 5, 6] */
myArr.push(7)
console.log(myArr); /* o/p => [0, 1, 2, 3, 4, 5, 6, 7] */
myArr.pop() // to remove the last value
console.log(myArr); /* o/p => [0, 1, 2, 3, 4, 5, 6] */
myArr.unshift(9) // it inserts elements at the start of the array
console.log(myArr); /* o/p => [9, 0, 1, 2, 3, 4, 5, 6] */
myArr.shift() // removes the first element
console.log(myArr); /* o/p => [0, 1, 2, 3, 4, 5, 6] */
console.log(myArr.includes(9)); // o/p => false
console.log(myArr.indexOf(9)); // o/p => -1
console.log(myArr.indexOf(15)); // o/p => -1
console.log(myArr.indexOf(4)); // o/p => 4
const newArr = myArr.join()
console.log(myArr);
console.log(newArr); // o/p => 0,1,2,3,4,5,6
console.log(typeof newArr); // o/p => string; .join binds the array and converts the array in string
//****************slice and splice******************
console.log("A", myArr); // o/p => A [0, 1, 2, 3, 4, 5, 6]
const myn1 = myArr.slice(1,3) // 1st is included, 2nd is included but not 3rd
console.log(myn1); // o/p => [ 1, 2 ]
console.log("B", myArr); // o/p =>  B [0, 1, 2, 3, 4, 5, 6] 
const myn2 = myArr.splice(1,3)
console.log(myn2); // o/p => [ 1, 2, 3 ]
console.log("C", myArr); // o/p => C [ 0, 4, 5, 6 ]
// therefore from the above results we can say that slice doesn't change the original array but splice does change/manipulate the original array
