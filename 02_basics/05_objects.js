const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

//course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor:Instructor} = course
console.log(Instructor); // short name bhi de skte hai
