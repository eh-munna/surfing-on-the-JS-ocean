// - JavaScript Number toString()

const num = 12;
console.log(num.toString());
console.log((100 + 12).toString());

// - JavaScript Number toFixed()

const num2 = 3.93232323;
console.log(num2.toFixed()); // returns whole number either to the nearest upper or lower
console.log(num2.toFixed(4)); // returns the amount of fractional digits

// - JavaScript Number toPrecision()

const x = 9.656;
console.log(x.toPrecision());
console.log(x.toPrecision(2));

// - JavaScript Number valueOf()
// valueOf() returns a number as a number.

const y = 123;
console.log(y.valueOf());

// Converting Variables to Numbers

// Number()
const num3 = '12';
const convertNum3 = Number(num3);

// parseInt()

const fracNumber = '2455.48';
const wholeNumber = parseInt(fracNumber);
console.log(wholeNumber);

// parseFloat()
const fracFloat = parseFloat(fracNumber);
console.log(fracFloat);
