// JavaScript Classes

// Basic Classes
class Car {
  constructor(name, model, status) {
    this.name = name;
    this.model = model;
    this.status = status;

    if (status) {
      this.getStatus();
    }
  }
  getStatus() {
    return `Congratulations! You have won a car!
    name: ${this.name}
    model: ${this.model}`;
  }
}

const car = new Car('Audi', 2019, true);
console.log(car.getStatus());
