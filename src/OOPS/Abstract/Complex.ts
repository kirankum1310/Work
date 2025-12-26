
//COMPLEX ABSTRACTION EXAMPLE — BANKING SYSTEM

// Rule Book
//Interface representing basic bank operations
interface IBankOperations {
  deposit(amount: number): void;
  withdraw(amount: number): void;
  showBalance(): void;
}

//Abstract class - defines shared structure for all bank accounts
abstract class BankAccount implements IBankOperations {
  protected balance: number;
  private transactionHistory: string[] = [];

  constructor(public accountHolder: string, initialBalance: number) {
    this.balance = initialBalance;
  }

  // Abstract methods (must be implemented by child classes)
  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;

  // Concrete methods (shared functionality)
  protected recordTransaction(details: string): void {
    const timestamp = new Date().toLocaleString();
    this.transactionHistory.push(`${timestamp} — ${details}`);
  }

  showBalance(): void {
    console.log(` ${this.accountHolder}'s current balance: ₹${this.balance}`);
  }

  showTransactionHistory(): void {
    console.log(`Transaction History for ${this.accountHolder}:`);
    this.transactionHistory.forEach((t) => console.log("  •", t));
  }
}

// Derived class — Savings Account
class SavingsAccount extends BankAccount {
  private interestRate: number = 3.5; // %

  deposit(amount: number): void {
    this.balance += amount;
    this.recordTransaction(`Deposited ₹${amount} to Savings Account`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log(`Insufficient balance in ${this.accountHolder}'s Savings Account`);
      return;
    }
    this.balance -= amount;
    this.recordTransaction(`Withdrew ₹${amount} from Savings Account`);
  }

  // Special method
  applyInterest(): void {
    const interest = (this.balance * this.interestRate) / 100;
    this.balance += interest;
    this.recordTransaction(`Interest of ₹${interest.toFixed(2)} applied`);
  }
}

// Derived class — Current Account
class CurrentAccount extends BankAccount {
  private overdraftLimit: number = 5000;

  deposit(amount: number): void {
    this.balance += amount;
    this.recordTransaction(`Deposited ₹${amount} to Current Account`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance + this.overdraftLimit) {
      console.log(`Withdrawal denied! Overdraft limit exceeded for ${this.accountHolder}`);
      return;
    }
    this.balance -= amount;
    this.recordTransaction(`Withdrew ₹${amount} from Current Account`);
  }

  showOverdraftLimit(): void {
    console.log(`Overdraft Limit for ${this.accountHolder}: ₹${this.overdraftLimit}`);
  }
}

// 🔹 Another Derived class — Fixed Deposit Account
class FixedDepositAccount extends BankAccount {
  private lockPeriod: number; // in months
  private interestRate: number = 7;

  constructor(holder: string, balance: number, lockPeriod: number) {
    super(holder, balance);
    this.lockPeriod = lockPeriod;
  }

  deposit(amount: number): void {
    console.log(` Deposits not allowed! ${this.accountHolder}'s FD is locked.`);
  }

  withdraw(amount: number): void {
    console.log(` Withdrawals not allowed! ${this.accountHolder}'s FD is locked for ${this.lockPeriod} months.`);
  }

  calculateMaturity(): void {
    const maturityAmount = this.balance + (this.balance * this.interestRate * this.lockPeriod) / (12 * 100);
    console.log(` Maturity Amount for ${this.accountHolder}: ₹${maturityAmount.toFixed(2)}`);
    this.recordTransaction(`FD maturity calculated as ₹${maturityAmount.toFixed(2)}`);
  }
}


// EXECUTION / TEST AREA

const user1 = new SavingsAccount("Sapthagiri", 10000);
const user2 = new CurrentAccount("Arjun", 5000);
const user3 = new FixedDepositAccount("Ravi", 20000, 24);

user1.deposit(2000);
user1.applyInterest();
user1.withdraw(5000);
user1.showBalance();
user1.showTransactionHistory();

console.log("\n--------------------------------\n");

user2.deposit(3000);
user2.withdraw(10000); // within overdraft limit
user2.showOverdraftLimit();
user2.showTransactionHistory();

console.log("\n--------------------------------\n");

user3.calculateMaturity();
user3.deposit(5000); // should be denied
user3.showTransactionHistory();