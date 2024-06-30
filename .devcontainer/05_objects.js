const course = {
    coursename: "physics for jee",
    price: "999",
    courseInstructor: "Anik"
}
// course.courseInstructor => syntax
// const {courseInstructor} = course
// console.log(courseInstructor); // o/p => Anik
const {courseInstructor: instructor} = course // the courseInstructor is way too big so I rename/destructure it my way using this syntax; o/p will be same
console.log(instructor); // o/p => Anik

/* api calling using JSON; JSON structure:
{
    "name": "Anik", => in JSON keys are strings and values are also strings
    "coursename1": "physics for jee",
    "price": "free"
} */
/* array method for JSON
[
{},
{},
{}
] */
