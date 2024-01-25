// - JavaScript String indexOf()

const text = `Please locate where 'locate' occurs!`;
console.log(`Index of 'locate' is: ${text.indexOf('locate')}`);

console.log(text.indexOf('where', 15));

// - JavaScript String lastIndexOf()
console.log(`Last index of 'locate' is: ${text.lastIndexOf('locate')}`);
console.log(`Backward index of 'locate' is: ${text.lastIndexOf('locate', 15)}`);

// - JavaScript String search()

console.log(
  `Return the position of the word 'occurs': ${text.search('occurs')}`
);

// - JavaScript String match()

const textMatch = `The rain in SPAIN stays mainly in the plain`;
const match = textMatch.match('ain');
console.log(match);

// - JavaScript String matchAll()

const matchAll = textMatch.matchAll('ain');
console.log(matchAll);

// - JavaScript String includes()

const getInclude = textMatch.includes('ain');
console.log(getInclude);

// - JavaScript String startsWith()

let str = `Welcome to the universe`;
const getStarts = str.startsWith('to');
console.log(getStarts);

// - JavaScript String endsWith()

const getEnds = str.endsWith('universe');
console.log(getEnds);
