// JavaScript Conditions

// JavaScript if, else, and else if

const age = 19;

if (age === 18) {
  console.log(`You are adult`);
} else if (age > 18 && age < 35) {
  console.log(`You are old`);
} else {
  console.log(`You are kid`);
}
console.log(`----------------------------------------------------`);

// JavaScript Switch Statement

console.log(`1st switch statement`);

switch (age) {
  case 18:
    console.log(`You are adult`);
    break;
  case 20:
    console.log(`You are old`);
    break;
  default:
    console.log(`You are kid`);
}

console.log(`----------------------------------------------------`);
console.log(`2nd switch statement`);

switch (true) {
  case age === 18:
    console.log(`You are adult`);
    break;
  case age > 18 && age < 30:
    console.log(`You are old`);
    break;
  default:
    console.log(`You are kid`);
}
console.log(`----------------------------------------------------`);
