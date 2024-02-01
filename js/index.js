// JavaScript Date Methods

// The getDay() Method

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const today = new Date().getDay();
console.log(days[today - 1]); // as here we start week of the day as monday

// The getDate() Method

const date = new Date().getDate();
console.log(date);

// The getMonth() Method

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

const currentMonth = new Date().getMonth();
console.log(months[currentMonth]);

// The getFullYear() Method

const currentYear = new Date().getFullYear();
console.log(currentYear);

// get any specific year

const specificYear = new Date('2015-03-25');
console.log(specificYear.getFullYear());

// full date combined

const finalResult = `Today is: ${days[today - 1]}, ${date} ${
  months[currentMonth]
} ${currentYear}`;
console.log(finalResult);
