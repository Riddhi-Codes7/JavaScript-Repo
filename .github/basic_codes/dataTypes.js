"use strict"; //treat all the js code as per the newer version 
//for documentation use,either mdn or tc39e i.e ECMA script
/*
Primitive Datatypes
number, bigint, string, boolean, null(Standalone value, object), undefined, symbol

Derived
*/
/*Type conversions

 33 => 33
 33abc => NaN (Not a number)
 true => 1 and false => 0
 "" => in boolean is 0
*/
// ****************String conersion *****************
/*let isloggedin = 1;
let booleanisLoggedin = Boolean(isloggedin)

console.log(booleanisLoggedin);

let num = 7
let stringConvert = String(num)

console.log(typeof stringConvert);
*/
//**************** Increment operators **********************
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
/*
If used postfix, with operator after operand (for example, x++), 
the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), 
the increment operator increments and returns the value after incrementing.
*/
