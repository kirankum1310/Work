// -------------------------------
// LOW LEVEL: Basic Inheritance
// -------------------------------
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} barks!`);
  }
}

const dog1 = new Dog("Tommy");
dog1.speak();
dog1.bark();


// ------------------------------------
// MEDIUM LEVEL: Using super()
// ------------------------------------
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log(`Hello, I am ${this.name}`);
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, grade: string) {
    super(name); // call parent constructor
    this.grade = grade;
  }

  showInfo(): void {
    console.log(`${this.name} is in grade ${this.grade}`);
  }
}

const student1 = new Student("Rahul", "10th");
student1.greet();
student1.showInfo();


// ----------------------------------------
// HIGH LEVEL: Multi-level Inheritance + Method Override
// ----------------------------------------
class Vehicle {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }

  start(): void {
    console.log(`${this.brand} vehicle started.`);
  }
}

class Car2 extends Vehicle {
  fuelType: string;
  constructor(brand: string, fuelType: string) {
    super(brand);
    this.fuelType = fuelType;
  }

  start(): void {
    console.log(`${this.brand} car started using ${this.fuelType}.`);
  }
}

class ElectricCar extends Car2 {
  batteryCapacity: number;
  constructor(brand: string, batteryCapacity: number) {
    super(brand, "Electric");
    this.batteryCapacity = batteryCapacity;
  }

  showBattery(): void {
    console.log(`${this.brand} has a battery capacity of ${this.batteryCapacity} kWh.`);
  }
}

const tesla = new ElectricCar("Tesla", 100);
tesla.start();
tesla.showBattery();
