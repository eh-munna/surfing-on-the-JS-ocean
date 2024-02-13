// JavaScript Objects

// Object Literal

const myObj = {
  name: 'John',
  age: 30,
};

// Accessing JavaScript Properties

// Dot Notation
console.log(myObj.name);

// Bracket Notation
console.log(myObj['name']);

// JavaScript Getter

const person = {
  lName: 'John',
  fName: 'Doe',
  age: 30,
  get fullName() {
    return `${this.fName} ${this.lName}`;
  },
};

console.log(person.fullName);

// JavaScript Setter
const person2 = {
  lName: '',
  fName: '',
  age: 30,
  set lastName(lNameValue) {
    this.lName = lNameValue;
  },
  set firstName(lNameValue) {
    this.fName = lNameValue;
  },
};

person2.lastName = 'John';
person2.firstName = 'Doe';

console.log(person2.lName + ' ' + person2.fName);

// Object Constructor

function Soldier(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;

  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

const soldier1 = new Soldier('John', 'Doe', 30, 'blue');
console.log(soldier1.fullName());

// Object Prototypes

Soldier.prototype.doWork = function () {
  console.log(`${this.fullName()} is doing work`);
};

soldier1.doWork();

console.dir(Soldier);

// Object Sets

const numbers = [1, 2, 3, 4, 5];

// convert this array to a set
const numbersSet = new Set(numbers);

console.log(numbersSet);

for (el of numbersSet) {
  console.log(el);
}

const myIterator = numbersSet.values();
console.log(myIterator);

for (let el of myIterator) {
  console.log(el);
}

// Object Maps

const myMap = new Map();

myMap.set(1, 'one');
myMap.set(2, 'two');
myMap.set(3, 'three');

console.log(myMap);

// iterating over a map

for (let key of myMap.keys()) {
  console.log(myMap.get(key));
}
