abstract class Animal {
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound(): void {
    console.log("🐶 Woof! & Bow-Wow");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("🐱 Meow! & Mew!");
  }
}

class Cow extends Animal {
  makeSound(): void {
    console.log("🐮 Moo! Moo!");
  }
}

function makeAnimalSpeak(animal: Animal) {
  animal.makeSound();
}

// Polymorphism in action:
const animals: Animal[] = [new Dog(), new Cat(), new Cow()];

for (const a of animals) {
  makeAnimalSpeak(a);
}
