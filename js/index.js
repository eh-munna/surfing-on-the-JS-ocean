// JavaScript Class

// JavaScript Class Syntax

class MyClass {
  constructor(name) {
    this.name = name;
  }
}

const personName = new MyClass('John');

// Class Methods

class Soldier {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  sendInstructions(message) {
    return `Dear ${this.position} ${this.name},
Please do ${message}`;
  }
}

const soldier1 = new Soldier('John', 'Major');
const soldier1Message = soldier1.sendInstructions('10 push ups');
// console.log(`${soldier1.name} is a ${soldier1.position}`);
// console.log(soldier1Message);

// Class Inheritance

class MainCar {
  constructor(carName) {
    this.carName = carName;
  }
  drive(speed) {
    return `This ${this.carName} has ${speed} km/h`;
  }
}

class CopyCar extends MainCar {
  constructor(carName) {
    super(carName);
  }
  status(speed) {
    console.log(this.drive(speed));
  }
}

const car1 = new CopyCar('Audi');
car1.status(100);

// Static Methods

class User {
  constructor(name) {
    this.name = name;
  }

  static sayHello(user) {
    return `Hello ${user.name}`;
  }
}

const user1 = new User('John');
console.log(User.sayHello(user1));
