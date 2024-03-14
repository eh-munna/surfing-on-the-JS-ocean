console.log('connecting to the js file');

function bankAccount(initBalance) {
  let balance = initBalance;
  return function () {
    return balance;
  };
}
const account = bankAccount(10000);
console.log(account);
