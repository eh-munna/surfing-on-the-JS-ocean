// JavaScript this Keyword

// this in a Method

const person = {
  name: 'John',
  age: 30,

  sayHello() {
    return `Hello ${this.name}`;
  },
};

console.log(person.sayHello());

// this in Event Handlers

/* 

<button onclick = "this.style.display= 'none'">
click me to hide
</button>

*/
