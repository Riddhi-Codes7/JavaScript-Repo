/* Primitive datatypes are called by value and Non-Primitive datatypes are called by reference

*/
console.table(["Number","BigInt", "String", "Boolean", "Null", "Undefined", "Symbol" ]);
console.table(["Object" , "Array", "Functions"])

//*********  Non-Primitive ***********
//Array and object
let FoodItems = ["CheeseCake", "MudPie", "Pastries", "Tiramisu"]
let myObj= {
    shopName : "Baskins and Robbins",
    location : "Paris",
}
//Declaring Function as variables

let myFunction = function(){
    console.log("Hellowww Cutiess :-)")
}

/*
Datatypes       return_types

String          string
Number          number
Undefined       undefined
Null            object
Boolean         boolean
Function        function
*/


____________________________________________________________

//MEMORIES : 1. STACK (Primitive)  2. HEAP (Non-primitive)

/*==> 1.STACK (copy)
let bankaccount = "AxisBank";
let accountName =  bankaccount;

{Interesting point} accountName  = "HDFCbank"

console.log("bankaccount");
console.log("accountName");

{OUTPUT:
bankaccount: Axisbank
accountName: HDFCbank
}

//when the new value is assigned to accountName, the copy of bankaccount is created and the new value is 
stored, hence the original value of bankaccount will remainn the same. Updates in the copy value
*/

/* ==> 2. HEAP (reference)
let student1 = {
    name: "Riddhi",
    age: 20,
}
let student2 = student1
student2.name: "Nishtha"

console.log(student1.name)
console.log(student2.name)

{OUTPUT:
Nishtha
Nishtha

//Heap memory works with the refernce, Updates in the Original value
}
*/
