//Strings (Primitive datatype) (Stack Memory)
let Name = "Riddhi";
let Course = "Computer Science";
let Uni = "Mumbai";
//Concatenation
console.log(`Hello! My name is ${Name} Singh and I am Studying ${Course} from ${Uni} University`);
//Methods of strings
console.log(Course[9])
console.log(Course.__proto__);
console.log(Course.toUpperCase());
console.log(Course.length);

let newString = Course.substring(0 , 10)
console.log(newString)

let newString2 = Course.slice(-16 , 10)
console.log(newString2)

let newString3 = "   Riddhi     "
console.log(newString3.trim())

let newString4 = "https://google.com/riddhi singh"
console.log(newString4.replace(' ', '-'))

console.log(Course.split(' '));
