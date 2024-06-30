// to make an object singleton or how to declare an object using constructor
// const tinderUser = new Object() // singleton object
// console.log(tinderUser); // o/p => {}; empty object
const tinderUser = {} // non-singleton object having same o/p as above

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser) // o/p => { id: '123abc', name: 'Sammy', isLoggedIn: false }
const regularUser = {
    email: "some@gamil.com",
        fullName: {
        userfullName: {
            firstname: "Anik",
            lastname: "Adhikary"
        }
    }
}
console.log(regularUser.fullName); // o/p => { userfullName: { firstname: 'Anik', lastname: 'Adhikary' } }
console.log(regularUser.fullName.userfullName); // o/p =>  { firstname: 'Anik', lastname: 'Adhikary' }
console.log(regularUser.fullName.userfullName.firstname); // o/p => Anik

const obj1 = {1: "a", 2: "b"} // keys as number and value as string
const obj2 = {3: "a", 4: "b"}
// to print both of them
const obj3 = Object.assign(obj1,obj2) // Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
console.log(obj3); // o/p => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }; refer to object assign mdn docs
const obj4 = Object.assign({}, obj1, obj2) // {} => is the target and the rest are source for more refer to object assign mdn docs
console.log(obj4);
const obj5 = {...obj1, ...obj2} // spread operator; easy to use syntax and mostly used
console.log(obj5); // o/p => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// values from database comes in the form of array
const users = [   // objects inside an array
{
    id: 1,
    email: "a@gmail.com"
},
{
    id: 1,
    email: "a@gmail.com"
},

]
users[1].email
console.log(tinderUser); // o/p => { id: '123abc', name: 'Sammy', isLoggedIn: false }
console.log(Object.keys(tinderUser)); // o/p => [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // o/p => [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); // o/p => [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]; id is key and 123abc is value, same with the rest
// if the value doesn't exist then ask
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // o/p => true
console.log(tinderUser.hasOwnProperty('isLogged')); // o/p => false

