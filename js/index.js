// JavaScript typeof

// The constructor property

const a = 'Your name is';
console.log(a.constructor);

// check if an object is an array

function isArray(obj) {
  console.log(obj.constructor);
  console.log(obj.constructor.toString().indexOf('Array') > -1);
}
isArray([1, 2, 3]);
isArray({ isArray: true });

// check if an object is an array

function isArray1(obj) {
  console.log(obj.constructor);
  console.log(obj.constructor === Array);
}
isArray1([1, 2, 3]);

console.log(typeof undefined); // returns 'undefined'
console.log(typeof null); // returns 'object'
