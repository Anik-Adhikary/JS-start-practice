const accountId = 144553
let accountEmail = "anik@gmail.com"
var accountPassword = "9999"
/*to declare a constant there is only one way: const 
but to declare variable there are two ways: let and var
Prefer not to use var because of issue in block scope and functional scope*/
accountCity = "Asansol"
/* const means:to declare constant and after the value is assigned, the value cannot be changed
now trying  to change the value
accountId = 2  not allowed*/
// now investigationg others
accountEmail = "part@gmail.com"
accountPassword = "8888"
accountCity = "Durgapur"
console.log([accountId, accountEmail, accountPassword, accountCity]);
// change in their values is allowed
let accountState;//output: undefined
console.log(accountState); 