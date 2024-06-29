const marvel_heroes = ["Thor", "Ironman", "spiderman"]
const dc_heroes = ["Superman", "Batman", "Flash"]
//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes); // o/p => [ 'Thor', 'Ironman', 'spiderman', [ 'Superman', 'Batman', 'Flash' ] ]
// the above o/p is not desirable so we do this
/*console.log(marvel_heroes[3][1]);  o/p => [ 'Thor', 'Ironman', 'spiderman', [ 'Superman', 'Batman', 'Flash' ] ]
                                            Batman */
// another method
//const allHeroes = marvel_heroes.concat(dc_heroes)
//console.log(allHeroes); // o/p => [ 'Thor', 'Ironman', 'spiderman', 'Superman', 'Batman', 'Flash' ]
//******************spread opaertor****************** 
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes); // o/p => [ 'Thor', 'Ironman', 'spiderman', 'Superman', 'Batman', 'Flash' ]
const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // o/p => [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
// checking whether it is an array or not
console.log(Array.isArray("Anik")) // o/p => false
// to convert it into array
console.log(Array.from("Anik")); // o/p => [ 'A', 'n', 'i', 'k' ]
console.log(Array.from({name: "Anik"})); // o/p => [ 'A', 'n', 'i', 'k' ] [], interesting case; it gives an empty array

let score1 = 100
let score2 = 200
let score3 = 300
// .of => returns a new array from a set of elements
console.log(Array.of(score1, score2, score3)); // o/p => [ 100, 200, 300 ]