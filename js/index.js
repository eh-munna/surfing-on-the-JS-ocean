// JavaScript Date Objects

// - Creating Date Objects

const showOutput = document.getElementById('show-output');

const currentDate = new Date();
const currentYM = new Date(2023, 10); // (2023, November)
showOutput.innerText = `Today: ${currentDate}`;
// showOutput.innerText = `Today: ${currentYM}`;
console.log(currentDate);

// - Previous Century

const getPrevCentury = new Date(78, 4, 5);

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const year = getPrevCentury.getFullYear();
const month = months[getPrevCentury.getMonth()];
const day = getPrevCentury.getDate();

showOutput.innerText = `Last Century: ${day} ${month} ${year}`;
