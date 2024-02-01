// JavaScript Date Formats

// - JavaScript Date Input

const march_25_2015 = new Date('2015-03-25');
console.log(march_25_2015);
const showOutput = document.getElementById('show-output');

const year_2015 = new Date('2015');
showOutput.innerText = `Date representation of: ${march_25_2015}`;
// showOutput.innerText = `Year 2015: ${year_2015}`;

// - Date Input - Parsing Dates

const msec = Date.parse('March 21, 2012');
const date = new Date(msec);
showOutput.innerText = `Result: ${date}`;
