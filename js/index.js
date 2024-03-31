const sent = 'I am watching for changes';
// const sentArr = sent.split('');
// let finalReverse = '';
// for (let i = sentArr.length - 1; i >= 0; i--) {
//   finalReverse += sentArr[i];
// }

// console.log(finalReverse);
let rev = '';
// for (const char of sent) {
//   rev = char + rev;
// }

// console.log(rev);

for (let i = 0; i < sent.length; i++) {
  // console.log(rev);
  rev = sent[i] + rev;
}
// console.log(rev);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const splitNumbers = numbers.slice(2, 5);
console.log(splitNumbers);
console.log(numbers);

const addSome = numbers.splice(2, 0, 87, 90);
console.log(numbers);

const deleteSome = numbers.splice(2, 2);
console.log(numbers);
