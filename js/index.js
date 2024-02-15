// JavaScript Function
// 'use strict';

// - Function Declarations

function myFunc() {
  // console.log(`This is a function declaration`);
}

myFunc();

// - Function Expressions

const myExpFunc = function () {
  // console.log(`This is a function expression`);
};

myExpFunc();

// - Self-Invoking Functions

(function () {
  // console.log(`This is a self-invoking function`);
})();

// - Arrow Functions

const myArrowFunc = () => {
  // console.log(`This is an arrow function`);
};

myArrowFunc();

// - Functions as methods

const myObj = {
  myFuncMethod() {
    // console.log(`This is a method`);
  },
};

myObj.myFuncMethod();

// Arguments & Default Parameters

function defaultFunc(param1, param2 = 4) {
  // console.log(arguments);
  // console.log(param1, param2);
}

defaultFunc(1);

// Arguments are Passed by Value

const num1 = 3;

const valueArgs = (param1) => {
  param1 = 5;
  return `num1 is ${param1}`;
};

// console.log(valueArgs(num1));

// Objects are Passed by Reference

const obj1 = {
  name: 'John',
};

// console.log(obj1);

const passObj = (obj) => {
  return (obj.name = 'Doe');
};

// console.log(passObj(obj1));

// Function call()

const person = {
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const person2 = {
  firstName: 'John',
  lastName: 'Doe',
};

// console.log(person.fullName.call(person2));

// call() Method with Arguments

const person3 = {
  fullName: function (firstName, lastName) {
    return `${firstName} ${lastName}`;
  },
};
// console.log(person3.fullName.call(null, 'Mary', 'Doe'));
// console.log(person3.fullName.call(person3, 'Mary', 'Doe'));

const numbers = [1, 2, 3, 4, 5, 6];

// console.log(Math.max.apply(null, numbers));

// Closure Functions

function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
  // return () => (count += 1);
}

const counter = createCounter();

console.dir(counter);

console.log(counter());
console.log(counter());
console.log(counter());

const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
