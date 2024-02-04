// JavaScript Sets

// How to Create a Set && The add() Method
const user = new Set();

const name = 'John Smith';
const age = 39;
const isAuthenticated = false;

user.add(name);
user.add(age);
user.add(isAuthenticated);
console.log(user);

// The values() Method
const letters = new Set(['a', 'b', 'c']);
const values = letters.values();
// The values() method returns a new iterator object containing all the values in a Set
console.log(values);

for (const value of values) {
  console.log(value);
}

letters.add('d');
console.log(letters);

// The delete() Method
letters.delete('d');
console.log(letters);

// The has() Method
const has = letters.has('d');
console.log(has);
