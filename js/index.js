// JavaScript Array Search

// - JavaScript Array indexOf()

const fruits = ['banana', 'apple', 'orange', 'apple', 'papaya'];
console.log(fruits.indexOf('banana'));

// - JavaScript Array lastIndexOf()

console.log(fruits.lastIndexOf('apple'));

// - JavaScript Array includes()

console.log(fruits.includes('apple'));

const result = fruits.find((fruit) => fruit === 'orange');
console.log(typeof result);

// - JavaScript Array findLast()

const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast((x) => x > 40);
console.log(high);
