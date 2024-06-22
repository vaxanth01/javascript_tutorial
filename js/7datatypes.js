// primitive datatypes

var a=25;
console.log(typeof(a));

var b=25.34;
console.log(typeof(b));

var first_name="vasanth";
console.log(typeof(first_name));

var c;
console.log(typeof(c));

var phone = null;
console.log(typeof(phone));

var ismarried = false;
console.log(typeof(ismarried));

// Symbol 2016 Es 
const s=Symbol()
console.log(typeof(s));

const ss=Symbol()
console.log(typeof(ss));

console.log(s==ss);

// ___________________________________________

// reference datatypes

var courses=['c','c++','java','python'];
console.log(typeof(courses))

var student = {first_name:"raju", age:21}
console.log(student)
console.log(typeof(student))

var dat = new Date()
console.log(dat)
console.log(typeof(dat))
