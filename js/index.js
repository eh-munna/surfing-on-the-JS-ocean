// JavaScript Math Object

// Math.round();

const num1 = 2.5545;
const num2 = 3.2345;
console.log(Math.round(num1));

// rounded up to its nearest integer
console.log(Math.ceil(num1));
console.log(Math.ceil(num2));

// rounded down to its nearest integer
console.log(Math.floor(num1));
console.log(Math.floor(num2));

// returns the integer part of number
console.log(Math.trunc(num2));

// Math.pow() : returns the value of something based on the power of something

const _2_ToThePowerOf_8 = Math.pow(2, 8);
console.log(_2_ToThePowerOf_8);

// Math.sqrt() : returns the square root of
const squireRootOf_64 = Math.sqrt(64);
console.log(squireRootOf_64);

// Math.random()

const randomNumber = Math.random();
console.log(randomNumber);

const randomTo_4 = Math.floor(Math.random() * 4) + 1;
console.log(randomTo_4);
