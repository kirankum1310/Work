// Base class (Encapsulation + Abstraction)
class Animal {
  // private variable (Encapsulation)
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  // public method (can be accessed outside)
  public makeSound(): void {
    console.log("Some generic animal sound...");
  }

  // protected method (can be used by subclasses)
  protected getName(): string {
    return this.name;
  }
}

// Derived class (Inheritance)
class Dog extends Animal {
  constructor(name: string) {
    super(name); // calling parent constructor
  }

  // Overriding method (Polymorphism)
  public makeSound(): void {
    console.log(`${this.getName()} says: Woof! 🐶`);
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  // Overriding method (Polymorphism)
  public makeSound(): void {
    console.log(`${this.getName()} says: Meow! 🐱`);
  }
}

// Interface (Abstraction)
interface Pet {
  play(): void;
}

// Implementing Interface
class Parrot extends Animal implements Pet {
  constructor(name: string) {
    super(name);
  }

  public makeSound(): void {
    console.log(`${this.getName()} says: Squawk! 🦜`);
  }

  public play(): void {
    console.log(`${this.getName()} loves playing with toys!`);
  }
}

// Create objects
const dog = new Dog("Tommy");
const cat = new Cat("Kitty");
const parrot = new Parrot("Rio");

// Demonstrating Polymorphism
const animals: Animal[] = [dog, cat, parrot];
animals.forEach((a) => a.makeSound());

// Interface method
parrot.play();
