// JS Prototypes

const myObject = {
  city: 'Berlin',
  greet() {
    console.log(`Hello ${this.city}!`);
  },
};

const parentObj = {
  city: 'London',
  greet() {
    console.log(`Hello ${this.city}!`);
  },
};

function Test() {
  name: 'test';
}

Test.prototype = parentObj;

// parentObj.name = Test.prototype;

console.dir(Test.prototype);
const childObj = Object.create(Test.prototype);

console.log(childObj);
