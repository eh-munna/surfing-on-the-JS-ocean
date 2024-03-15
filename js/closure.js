// (function () {
let num1 = 2;
let num2 = 3;

function sum() {
  return num1 + num2;
}
console.log(sum());
console.log(num1);
console.log(num2);

console.dir(sum);

num1 = 5;
num2 = 6;
console.log(sum());
console.log(num1);
console.log(num2);
console.dir(sum);
// })();

// function bankAccount(initBalance) {
//   let balance = initBalance;
//   return function () {
//     return balance;
//   };
//   //   return initBalance;
// }
// const account = bankAccount(10000);
// console.log(account);
