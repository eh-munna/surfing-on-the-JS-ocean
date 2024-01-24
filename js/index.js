// string literals

const text = 'This is a text';
console.log(text);

// template strings

const templateStr = `This is a template string`;
console.log(templateStr);

// length

console.log(text.length);

// Escape Characters

const escapeChar = 'This line has "escape" here';
console.log(escapeChar);

// JavaScript Strings as Objects

const literalStr = 'This is a literal string';

const strObj = new String(`This is a string created with String Object`);

console.log(strObj);

let x = new String('John');
let y = new String('John');

console.log(x === y);
