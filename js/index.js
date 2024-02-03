// JavaScript Comparison

// Ternary Operator

// to check some conditions in one line or more concise way

const age = 16;
const isAdult = age >= 18 ? `You are adult` : `You are not adult`;
console.log(isAdult);

// The Nullish Coalescing Operator (??)

// always returns the left side of the comparison if it is not null or undefined

const isAuthenticated = null;
const isGuest = isAuthenticated ?? 'Yes! Guest User';
console.log(isGuest);

const course = {
  mainPrice: 123,
  discountedPrice: 10,
};
const price = course.discountedPrice ?? mainPrice;
console.log(price);

// The Optional Chaining Operator (?.)

// The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).

console.log(course?.price); // undefined as this property is not available but will not throw an error
