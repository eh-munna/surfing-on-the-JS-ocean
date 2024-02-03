// Problem Solving 1

// How to print random numbers in between 1 to 6

const randomNumberGenerator = (min, max) => {
  const randomNumber = Math.floor(Math.random() * max) + min;
  return randomNumber;
};

const result = randomNumberGenerator(1, 6);
console.log(result);

// How to sort 10 students names alphabetically

const students = [
  'Emma',
  'Liam',
  'Olivia',
  'Noah',
  'Ava',
  'Isabella',
  'Sophia',
  'Jackson',
  'Lucas',
  'Mia',
];

const getSortedNames = (students) => {
  return students.sort();
};

console.log(getSortedNames(students));

// How to sort 10 students roll numbers

const studentRollNumbers = [1048, 405, 309, 55, 512, 20, 1024, 940, 823];
const sortNumeric = (numbers) => {
  return numbers.sort((a, b) => {
    return a - b;
  });
};
console.log(sortNumeric(studentRollNumbers));

// How to check wether a year is a leap year or not

/* 

not leap years

1901, 1902, 1903, 1905, 1906, 1907, 1909, 1910, 1911, 1913,
1914, 1915, 1917, 1918, 1919, 1921, 1922, 1923, 1925, 1926,
1927, 1929, 1930, 1931, 1933, 1934, 1935, 1937, 1938, 1939,
1941, 1942, 1943, 1945, 1946, 1947, 1949, 1950, 1951, 1953,
1954, 1955, 1957, 1958, 1959, 1961, 1962, 1963, 1965, 1966,
1967, 1969, 1970, 1971, 1973, 1974, 1975, 1977, 1978, 1979,
1981, 1982, 1983, 1985, 1986, 1987, 1989, 1990, 1991, 1993,
1994, 1995, 1997, 1998, 1999, 2001, 2002, 2003, 2005, 2006,
2007, 2009, 2010, 2011, 2013, 2014, 2015, 2017, 2018, 2019,
2021, 2022, 2023, 2025, 2026, 2027, 2029, 2030, 2031, 2033,
2034, 2035, 2037, 2038, 2039, 2041, 2042, 2043, 2045, 2046,
2047, 2049, 2050, 2051, 2053, 2054, 2055, 2057, 2058, 2059,
2061, 2062, 2063, 2065, 2066, 2067, 2069, 2070, 2071, 2073,
2074, 2075, 2077, 2078, 2079, 2081, 2082, 2083, 2085, 2086,
2087, 2089, 2090, 2091, 2093, 2094, 2095, 2097, 2098, 2099


leap years

1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940,
1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980,
1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020,
2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060,
2064, 2068, 2072, 2076, 2080, 2084, 2088, 2092, 2096


*/

const isLeapYear = (year) => {
  if (year % 4 === 0 && year % 100 !== 0) {
    return `${year} is a leap year`;
  } else if (year % 400 === 0) {
    return `${year} is a leap year`;
  } else {
    return `${year} is not a leap year`;
  }
};

const leapYear = isLeapYear(2000);
console.log(leapYear);

// How to check how many vowels are in a sentence

const sentence = 'a quick fox jumps over the lazy dog';
// const sentence = 'I love Bangladesh';

// const countVowels = (sentence) => {
//   const letters = sentence.split('');
//   const count = letters.filter(
//     (vowel) =>
//       vowel === 'a' ||
//       vowel === 'e' ||
//       vowel === 'i' ||
//       vowel === 'o' ||
//       vowel === 'u' ||
//       vowel === 'A' ||
//       vowel === 'E' ||
//       vowel === 'I' ||
//       vowel === 'O' ||
//       vowel === 'U'
//   );
//   return `Total ${count.length > 1 ? 'vowels' : 'vowel'}: ${count.length}`;
// };
// const totalVowel = countVowels(sentence);
// console.log(totalVowel);

// efficient way...

const countVowels = (sentence) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let count = 0;
  const letters = Array.from(sentence);
  letters.forEach((letter) => {
    if (vowels.includes(letter)) {
      count++;
    }
  });
  return `Total ${count > 1 ? 'vowels' : 'vowel'}: ${count}`;
};

const totalVowel = countVowels(sentence);
console.log(totalVowel);

// How to find the duplicate numbers in an array

const numbers = [20, 20, 55, 309, 405, 512, 823, 940, 1024, 1048];

const getDuplicates = (numbers) => {
  const result = numbers.filter(
    (number, index, arr) => arr.indexOf(number) !== index
  );
  return result;
};
const duplicatesNumbers = getDuplicates(numbers);
console.log(duplicatesNumbers);
