// JavaScript Type Conversion

/* 
- Converting Strings to Numbers
- Converting Numbers to Strings
- Converting Dates to Numbers
- Converting Numbers to Dates
- Converting Booleans to Numbers
- Converting Numbers to Booleans

*/
// Converting Strings to Numbers
const num = '123456789';
console.log(Number(num));

const emptyString = '';
console.log(Number(emptyString)); // ? returns 0 for empty strings

console.log(Number('990 9090'));

// convert to floating point number
console.log(parseFloat(Number('234.545')));

// convert to integer number
console.log(parseInt(Number('234.545')));

// The Unary + Operator

const x = '123';
const y = 456;
const z = y + +x; // converting the string to a number using the unary + operator
console.log(z);

// Converting Numbers to Strings

const str = 123456789;
console.log(String(str));

console.log(String(100 + 23));

console.log((123).toString());

// Converting Dates to Numbers

const date = new Date();
console.log(Number(date));

// Converting Numbers to Dates
const numberDate = new Date();
console.log(numberDate.toString());
console.log(String(numberDate));

// Converting Booleans to Numbers

const bool = true;
console.log(Number(bool)); // returns 1 for true

const bool2 = false;
console.log(Number(bool2)); // returns 0 for false

const numTrue = 1;
console.log(Boolean(numTrue)); // returns true for 1

const numFalse = 0;
console.log(Boolean(numFalse)); // returns false for 0
