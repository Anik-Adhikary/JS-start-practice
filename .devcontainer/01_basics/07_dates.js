let myDate = new Date()
console.log(myDate); // o/p => 2024-06-29T14:50:11.089Z
console.log(myDate.toString());  // o/p => Sat Jun 29 2024 14:51:06 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // o/p => Sat Jun 29 2024
console.log(myDate.toISOString()); // o/p => 2024-06-29T14:53:39.930Z
console.log(myDate.toJSON()); // o/p => 2024-06-29T14:54:42.831Z
console.log(myDate.toLocaleDateString()); // o/p => 6/29/2024
console.log(myDate.toLocaleString()); // o/p => 6/29/2024, 2:56:48 PM
console.log(typeof myDate); // o/p => object
let myCreatedDate = new Date(2024, 0 , 23)
console.log(myCreatedDate.toDateString()); // o/p => Tue Jan 23 2024
let myCreatedDate1 = new Date(2024, 5, 9, 6, 4)
console.log(myCreatedDate1.toLocaleString()); // o/p => 6/9/2024, 6:04:00 AM
let myCreatedDate2 = new Date("2024-05-19")
console.log(myCreatedDate2.toLocaleString()); // o/p => 5/19/2024, 12:00:00 AM
let myCreatedDate3 = new Date("01-01-2024")
console.log(myCreatedDate3.toLocaleString()); // o/p => 1/1/2024, 12:00:00 AM
// to design poles, who has given the answer the fastest we use Time Stamp
let myTimeStamp = Date.now()
console.log(myTimeStamp); // o/p => 1719673854322; it is in mili-seconds
// while making hotel booking apps there we need to compare dates
console.log(myCreatedDate3.getTime()); // o/p 1704067200000; converted to mili-seconds for comparison
// converting into seconds
console.log(Math.floor(Date.now()/1000)); // o/p => 1719674184
let newDate = new Date()
console.log(newDate); // o/p => 2024-06-29T15:19:03.076Z
console.log(newDate.getMonth()); // o/p => 5, it starts from 0 so for june it is 5
console.log(newDate.getDay()); // o/p => 6
newDate.toLocaleString('default',{
    weekday: "long"
})
