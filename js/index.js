// JavaScript Loops

// Basic for loop

const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
for (let index = 0; index < letters.length; index++) {
  console.log(letters[index]);
}

console.log(`----Reverse-----`);

// Reverse for loop
for (let index = letters.length - 1; index >= 0; index--) {
  console.log(letters[index]);
}

// while loop

console.log(`----Print Number 1 to 10 using While Loop-----`);

let i = 1;

while (i < 11) {
  console.log(`The number is: ${i}`);
  i++;
}

console.log(`----Do While Loop-----`);

let j = 1;
do {
  console.log(`The number is: ${j}`);
  j++;
} while (j > 11);

// For In Loop
console.log(`----For In Loop-----`);

const cars = {
  name: 'John',
  brand: 'Doe',
  model: 2024,
};

for (const car in cars) {
  console.log(`${car}: `, cars[car]);
}

// For of Loop
console.log(`----For of Loop-----`);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of numbers) {
  console.log(number);
}
