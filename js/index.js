// Extracting String Characters
//   - JavaScript String charAt()

const text = 'A demo string';
let charAt = text.charAt(4);
console.log(charAt);

//  - JavaScript String at()

console.log(text.at(4));

//  - JavaScript String Property Access [ ]

console.log(text[4]);

// ? Gives no error, but does not work 👇

text[4] = 'modified';
console.log(text);

// Extracting String Parts
// - JavaScript String slice()

const someFruits = 'Apples, Bananas, Oranges';
let bananas = someFruits.slice(8, 15);
console.log(bananas);

let twoFruits = someFruits.slice(8);
console.log(twoFruits);

console.log(someFruits.length);
//  - //  - JavaScript String subString()

let oranges = someFruits.substring(17, 24);
console.log(oranges);

//  - JavaScript String substr()

let apples = someFruits.substr(0, 6);
console.log(apples);

//  - Converting to Upper and Lower Case

// - JavaScript String to Upper Case

const str = 'An important message';
let upper = str.toUpperCase();
console.log(upper);

// - JavaScript String to Lower Case

let lower = str.toLowerCase();
console.log(lower);

// - JavaScript String concat()

const text1 = 'Text 1 is';
const text2 = 'connected with Text 2';
const concatenatedText = text1.concat(' ', text2);
console.log(concatenatedText);

// - JavaScript String trim()

let trimStr = '    Some whitespace beginning of the string   ';
const trimmedPart = trimStr.trimEnd();
console.log(trimmedPart);

//  - JavaScript String repeat()

let willRepeat = 'This text is repeated';
let repeatedStr = willRepeat.repeat(2);
console.log(repeatedStr);

//  - Replacing String Content

let content = 'From the text... some text is replaced';
let replacement = content.replace(
  'some text is replaced',
  'new text is replaced ...'
);
console.log(replacement);

//  - JavaScript String split()

let splitStr = 'This text will be splitted';

let splittedStr = splitStr.split('');
console.log(splittedStr);

let originalArray = ['Hello World', 'This is a test', 'Another example'];

// Using map and replace method
let noSpacesArray = originalArray.map((word) => word.replace(/\s/g, ''));
console.log(noSpacesArray);
