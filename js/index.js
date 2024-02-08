// Problem Solving 2

/* 
Problem 1:

Find out how many times 'sumit' has been in this sentence. Where it has been found for the first time.

*/

const sentence =
  'Learn with Sumit is all about teaching web development skills and techniques in an effective and practical manner. If you are just getting started in web development, learn with Sumit has all the tools you need to teach the latest and most popular technologies to convert you from a no stack to full stack developer. Learn with Sumit also does devices into advanced tools using the latest best practices for you seasoned web developers.';

// const sentenceArray = sentence.split(' ');
// const wordCount = sentenceArray.filter((word) => word === 'Sumit');
// console.log(sentenceArray);

// const wordCount = sentence.match(/sumit/gi).length;
// const firstOccurrence = sentence.search(/searchWord/i);
// console.log(wordCount);
// console.log(firstOccurrence);

const searchWord = 'sumit';
const regex = new RegExp(searchWord, 'gi');
const wordCount = (sentence.match(regex) || []).length;

const firstOccurrence = sentence.search(/sumit/i);

// console.log(wordCount);
// console.log(firstOccurrence);

/* 

Problem 2:

You will be given an array of elements and a target element. Write a function that returns the index of the target

*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
const getIndex = (arr, target) => {
  let index = arr.indexOf(target);
  if (index !== -1) {
    return `Index of target: ${index}`;
  } else {
    return 'Not Found!';
  }
};

// console.log(getIndex(arr, target));

const linearSearch = (arr, target) => {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] === target) {
      return `Index of target: ${i}`;
    }
  }
  return 'Not Found!';
};

// console.log(linearSearch(arr, target));

/* 

Problem 3:

Find out the biggest string in an array. Return the index of the biggest string

*/

const words = ['one', 'two', 'three', 'four', 'five', 'six'];

const biggestString = (words) => {
  let max = words[0];
  const length = words.length;
  let index;
  for (let i = 1; i < length; i++) {
    if (words[i].length > max.length) {
      max = words[i];
      index = words.indexOf(max);
    }
  }
  return [max, index];
};

// console.log(biggestString(words));

const longestString = (words) => {
  let biggest = '';
  let index;
  for (const word of words) {
    if (word.length > biggest.length) {
      biggest = word;
      index = words.indexOf(biggest);
    }
  }
  return [biggest, index];
};
// console.log(longestString(words));

/* 

Problem 4:

How to find the number form 1 - 100 that is divisible by 3, 5, and 3 or 5 alone?
How to find the number form an array that is divisible by 3, 5, and 3 or 5 alone?

*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const divisibleByThreeAndFive = (numbers) => {
//   let divisibleNumber = [];
//   for (const number of numbers) {
//     if (
//       (number % 3 === 0 && number % 5 === 0) ||
//       number % 3 === 0 ||
//       number % 5 === 0
//     ) {
//       divisibleNumber.push(number);
//     }
//   }
//   return divisibleNumber;
// };
const range = 100;
const divisibleByThreeAndFive = (range) => {
  let divisibleNumber = [];
  for (let i = 1; i <= range; i++) {
    if ((i % 3 === 0 && i % 5 === 0) || i % 3 === 0 || i % 5 === 0) {
      divisibleNumber.push(i);
    }
  }
  return divisibleNumber;
};

// console.log(divisibleByThreeAndFive(range));

// const divisibleByThreeAndFive = (num) => {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       return i;
//     }
//   }
// };
// console.log(divisibleByThreeAndFive(numbers));

/* 

Problem 5:

Find out the falsy value from an array. Return the array with truthy values
*/

const mixedValues = [
  0,
  '',
  null,
  'true',
  NaN,
  'hello',
  0,
  undefined,
  2,
  'test',
];

const trueValues = mixedValues.filter((value) => {
  if (value) {
    return value;
  } else {
    return false;
  }
});

console.log(trueValues);

/* 

Problem 6:

Find out the falsy properties from an object. Return the object with truthy properties
*/

const mixedProperty = {
  a: '',
  b: null,
  c: 'true',
  d: 'hello',
  e: 0,
  f: undefined,
  g: 'test',
  h: true,
  g: false,
};

const trueProperty = (obj) => {
  for (const key in obj) {
    if (!obj[key]) {
      delete obj[key];
    }
  }
  return obj;
};

console.log(trueProperty(mixedProperty));
