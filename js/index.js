let price = 9;

if (price <= 10) {
  // console.log(`You are gorib`);
} else {
  // console.log(`You are not gorib`);
}

const age = 20;
const isMale = false;
if (age >= 18 && isMale) {
  // console.log(`You are a male adult`);
} else if (age >= 18 && !isMale) {
  // console.log(`You are female adult`);
} else {
  // console.log(`You are not adult`);
}

// ternary

const weather = 'sunny';
// console.log(
//   weather === 'Rainy' ? 'I will take a break' : `I will go for a walk`
// );

const result =
  age >= 18 && isMale
    ? `You are a male adult`
    : age >= 18 && !isMale
    ? `You are a female adult`
    : `You are not an adult`;
// console.log(result);

if (age >= 18) {
  if (isMale) {
    console.log(`You are a male adult`);
  } else {
    // console.log(`You are a female adult`);
  }
} else {
  // console.log(`You are not an adult`);
}

const result2 =
  age >= 18
    ? isMale
      ? `You are a male adult`
      : `You are a female adult`
    : `You are not an adult`;
// console.log(result2);

let numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers.length);
// numbers.length = 0;
// numbers = [];

// numbers.push(7);
// numbers.pop();
// numbers.unshift(7);
numbers.shift();
console.log(numbers);
