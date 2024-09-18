const course = {
    coursename:"js in hindi",
    price:"500",
    courseInstructor:"hitesh"
}

// const {courseInstructor} = course
const {courseInstructor: instructor} = course // called destructuring

console.log(instructor); // now no need to give course.courseinstructor

// this is json and not object
// api in json form
// {
//     "id":1,
//     "coursename":"nothing",
//     "price":"free"
// }
