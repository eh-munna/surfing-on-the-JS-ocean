// JavaScript Arrays

const arr = ['item1', 'item2', 'item3'];
console.log(arr);

// - Accessing Array Elements

console.log(arr.length);

// - Changing an Array Element

arr[2] = 'item4';
console.log(arr);

// - Converting an Array to a String

const numArr = [1, 2, 3, 4];

console.log(`Converting array elements to string:`, numArr.toString());

// The length Property
console.log(`Length of this array (numArr) is: `, numArr.length);

// Looping Array Elements

const fruits = ['Apples', 'Pears', 'Bananas', 'Oranges'];
for (let i = 0; i < fruits.length; i++) {
  console.log(`index ${i} has fruit: `, fruits[i]);
}

// Adding Array Elements using push ( )

fruits.push(['Water Melon', 'Papaya', 'Avocado']);
// fruits.push(...['Water Melon', 'Papaya', 'Avocado']);
console.log(fruits.length);

// How to Recognize an Array

console.log(Array.isArray(fruits)); // returns true if it is an array
