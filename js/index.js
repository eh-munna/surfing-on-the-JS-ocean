// JavaScript Array Methods

// - JavaScript Array toString()

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.toString());

// - JavaScript Array at()

console.log(arr.at(arr.length - 1));
console.log(arr.at(-4));
console.log(arr.at(4));

// - JavaScript Array join()

const fruits = ['Mango', 'Apple', 'Orange', 'Litchi'];
console.log(fruits.join(' #'));
console.log(`#` + fruits.join(' #'));

console.log(fruits[fruits.length - 1]);

// - JavaScript Array pop()

const getLastFruit = fruits.pop();
console.log(getLastFruit);

// - JavaScript Array push()

const newLength = fruits.push('Kiwi', 'Avocado');
console.log(`Total fruits are ${newLength}, and array is:`, fruits);

// - JavaScript Array shift()

const getFirstFruit = fruits.shift();
console.log(getFirstFruit);

// - JavaScript Array unshift()

const updateLength = fruits.unshift('Pineapple', 'Papaya');
console.log(`Total fruits are ${updateLength}, and array is:`, fruits);

// - Merging Arrays (Concatenating)

const team1 = ['Galaxy', 'Uranus', 'Neptune'];
const team2 = ['Earth', 'Saturn', 'Mars'];
// const teams = [...team1, ...team2];
const teams = team1.concat(team2);
console.log(teams);

// - Array copyWithin()

const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(letters.copyWithin(2, 0));
console.log(letters.copyWithin(3, 1, 2));

// - Flattening an Array

const nestedArr = [1, 2, [3, 4, 5, 6]];
const flatArr = nestedArr.flat();
console.log(flatArr);

// - JavaScript Array splice()

const alphabets = ['a', 'b', 'c', 'd', 'e', 'g', 'h', 'i'];
const addAlphabets = alphabets.splice(2, 0, 'j', 'k');
const removeAlphabets = alphabets.splice(alphabets.length - 5, 4, 'l', 'm');
console.log(addAlphabets);
console.log(removeAlphabets);

// - JavaScript Array toSpliced()
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
// const splicedMonths = months.toSpliced(6);
// console.log(splicedMonths);
// console.log(months);


// - JavaScript Array slice()

const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
const shallowItems = items.slice();
const getItems = items.slice(4);
console.log(getItems);

const items2 = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
const getItems2 = items2.slice(1, 4);
console.log(getItems2);
const itemsNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const getItems5 = itemsNumber.slice(4, 10);
console.log(getItems5);
