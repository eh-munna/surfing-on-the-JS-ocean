// Sorting an Array

const fruits = ['Banana', 'Orange', 'Papaya', 'Mango'];
// console.log(fruits.sort());

// Reversing an Array
console.log(fruits.reverse());

// - JavaScript Array toSorted()

// const newSort = fruits.toSorted();
// will give new sorted array rather than altering the original
// console.log(fruits, newSort);

// - Numeric Sort

const numbers = [34, 20, 42, 33];
const result = numbers.sort((a, b) => {
  return b - a;
});
console.log(result);
