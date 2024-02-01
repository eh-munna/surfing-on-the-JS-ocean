// JavaScript Array Iteration

// - JavaScript Array forEach()

const numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.forEach((number) => console.log(number));

// - JavaScript Array map()

const mappedNumber = numbers.map((number) => number * 3);
console.log(mappedNumber);

// - JavaScript Array flatMap()

const nestedArr = [1, 2, [3, 4]];
const flatArr = nestedArr.flatMap((x) => x);
console.log(flatArr);

// - JavaScript Array filter()

const randomNumbers = [1, 34, 63, 83, 29, 30];
const above30 = randomNumbers.filter((n) => n > 30);
console.log(above30);

// - JavaScript Array reduce()

const someNumbers = [1, 34, 63, 83, 29, 30];
const reduceNumbers = someNumbers.reduce((prevValue, nextValue) => {
  console.log(`Previous value: ${prevValue} -- Next value: ${nextValue}`);
  return prevValue + nextValue;
}, 5);
console.log(reduceNumbers);

// - JavaScript Array every()

const allOver30 = randomNumbers.every((element) => element > 30);
console.log(allOver30); // false : not all the elements are over 30

// - JavaScript Array some()
const someOver30 = randomNumbers.some((element) => element > 30);
console.log(someOver30); // true : some elements are over 30

// - JavaScript Array.from()

const arrayLike = { length: 3, 0: 'a', 1: 'b', 2: 'c', age: 40 };
const newArray = Array.from(arrayLike);

console.log(newArray); // Output: [ 'a', 'b', 'c' ]

