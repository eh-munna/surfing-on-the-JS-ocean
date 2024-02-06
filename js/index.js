// JavaScript Regular Expressions

// The search() method
// The search() method searches a string for a specified value and returns the position of the match

const text = 'The quick brown fox jumps over the lazy dog';
const normalSearch = text.search('fox');
console.log(normalSearch);
const regexSearch = text.search(/LaZy/i); // i is used for case-insensitive matching
console.log(regexSearch);

// The replace() method

const demoText = 'This is a demo text';
const normalReplaceText = demoText.replace('demo', 'real');
console.log(demoText); // doesn't change the original text
console.log(normalReplaceText);

const regexReplaceText = demoText.replace(
  /DEMO TExt/i,
  'real text replaced by regex'
);
console.log(regexReplaceText);

// Text replacement wih global modifier flag

const demoText2 = 'This is a demo text and demo text 2';
const regexWithGlobalReplace = demoText2.replace(/demo/gi, '"real"');
console.log(regexWithGlobalReplace);

// Brackets: to find a range of characters
// String ranges: to find a range of characters
const demoText3 = 'This is a demo text for range characters';
const textRange = demoText3.match(/[a-d]/gi);
console.log(textRange);

// Numeric ranges: to find a range of numbers

const demoNumber = 123456789;
const numberRange = demoNumber.toString().match(/[1-5]/g);
console.log(numberRange);

// The exec() method

const myText = 'East west of the world';
const myRegexPattern = /wes/gi;
const result = myRegexPattern.exec(myText);
console.log(result?.input);
