/*const score = 100;
//object
const balance = new Number(3.0000);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));// 3.000 used for ecommerce applications in case of calculations

const newNum = 89.456; //priority to the values before decimal
console.log(newNum.toPrecision(4));

const amount = 20000000;
console.log(amount.toLocaleString('en-IN'));
*/
// _______________________Maths(By default JS library)__________________________________

/*console.log(Math.abs(-90));//negative to positive conversion
console.log(Math.sqrt(196));
console.log(Math.round(6.89));
console.log(Math.ceil(90.5));
console.log(Math.floor(90.5));*/

console.log(Math.random()); //values between 0 and 1 , used for dice games
console.log(Math.random()*10 +1);

const min = 20;
const max = 100;

console.log(Math.floor(Math.random() * (max-min+1) + min));
