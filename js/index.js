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
