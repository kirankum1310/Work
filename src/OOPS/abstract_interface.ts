// ------------------------------------
// LOW LEVEL: Abstract Class
// ------------------------------------
abstract class Shape {
  abstract area(): number;
  abstract perimeter(): number;

  showDetails(): void {
    console.log(`Area: ${this.area()}, Perimeter: ${this.perimeter()}`);
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const rect = new Rectangle(10, 5);
rect.showDetails();


// ------------------------------------
// MEDIUM LEVEL: Interface
// ------------------------------------
interface Payment {
  pay(amount: number): void;
}

class UpiPayment implements Payment {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} using UPI.`);
  }
}

class CardPayment implements Payment {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} using Credit Card.`);
  }
}

const upi = new UpiPayment();
upi.pay(1500);

const card = new CardPayment();
card.pay(2500);


// -----------------------------------------
// HIGH LEVEL: Combining Abstract Class & Interface
// -----------------------------------------
interface Logger {
  log(message: string): void;
}

abstract class Account {
  protected balance: number = 0;

  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;

  getBalance(): number {
    return this.balance;
  }
}

class SavingsAccount extends Account implements Logger {
  deposit(amount: number): void {
    this.balance += amount;
    this.log(`Deposited ₹${amount}. Current Balance: ₹${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.log(`Withdrew ₹${amount}. Current Balance: ₹${this.balance}`);
    } else {
      this.log("Insufficient funds!");
    }
  }

  log(message: string): void {
    console.log(`[SavingsAccount Log]: ${message}`);
  }
}

const mySavings = new SavingsAccount();
mySavings.deposit(10000);
mySavings.withdraw(3000);
mySavings.withdraw(8000);
