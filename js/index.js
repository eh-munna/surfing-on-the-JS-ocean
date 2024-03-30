const a = 'hello';
// console.log(typeof a === 'string');

const myArr = [1, 2, 3, 4, 5, 6];
const resPush = myArr.push(10);
// console.log(resPush, myArr, myArr.length);

const popRes = myArr.pop();
// console.log(popRes, myArr, myArr.length);

const resShift = myArr.shift(3);
// console.log(`return`, resShift);

const number = [23, 43, 527, 89];
const resUnshift = myArr.unshift(...number);
// console.log(resUnshift);
// console.log(myArr);

let num = 1;
// while (num <= 10) {
//   //   console.log(num);
//   num++;
// }
let sum = 0;
while (num <= 50) {
  if (num % 2 === 0) {
    sum += num;
  }
  num++;
}
// console.log(sum);

/* let count = 1;
const message =
  'I will invest at least 6 hrs every single day for next 60 days!';

while (count <= 60) {
  console.log(
    count,
    ': I will invest at least 6 hrs every single day for next 60 days!'
  );
  count++;
} */

// let numeric = 1;
// while (numeric <= 10) {
//   //   console.log(`5 * ${numeric} = ${5 * numeric}`);
//   numeric++;
// }
// let timer = 1;
// for (let i = 10; i >= 1; i--) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * timer);
//   timer++;
// }

const str = 'I will spend at least 6 hrs every single day for next 60 days';
const strSplit = str.split(' ');
console.log(strSplit.join('-'));
console.log(Array.isArray(strSplit));
console.log(strSplit);

const spaceStr = '    space at the beginning of the string';
const noSpaceStr = spaceStr.trim();
console.log(noSpaceStr);
console.log(spaceStr);
