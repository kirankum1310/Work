// -------------------------------
// LOW LEVEL: Basic Class & Object
// -------------------------------
class Car {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }

  showBrand(): void {
    console.log(`Car Brand: ${this.brand}`);
  }
}

const car1 = new Car("Toyota");
car1.showBrand();


// -----------------------------------
// MEDIUM LEVEL: Multiple Attributes & Methods
// -----------------------------------
class Product {
  name: string;
  price: number;
  stock: number;

  constructor(name: string, price: number, stock: number) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  display(): void {
    console.log(`Product: ${this.name}, Price: ₹${this.price}, Stock: ${this.stock}`);
  }

  updateStock(quantity: number): void {
    this.stock += quantity;
    console.log(`Updated Stock for ${this.name}: ${this.stock}`);
  }
}

const laptop = new Product("Laptop", 75000, 10);
laptop.display();
laptop.updateStock(5);


// -----------------------------------------
// HIGH LEVEL: Encapsulation & Private Fields
// -----------------------------------------
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited: ₹${amount}, New Balance: ₹${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn: ₹${amount}, Remaining Balance: ₹${this.balance}`);
    } else {
      console.log("Insufficient funds!");
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(5000);
account.deposit(2000);
account.withdraw(3000);
console.log(`Final Balance: ₹${account.getBalance()}`);
