// Abstract CLass Example - Banking System (With User Data)

// Abstract Base Class - Hides Implementation Details

abstract class BankAccount {
    protected accountHolder: string;
    protected balance: number;

    constructor(accountHolder: string, initialBalance: number) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }

    // Abstract Methods (Must be Implemented by Subclasses)

    abstract calculateInterest(): number;

    // Common Methods (Shared by All Account Types)
    deposit(amount: number): void {
        this.balance += amount;
        console.log(`${this.accountHolder} deposited ${amount}. Current balance: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log(`${this.accountHolder}. Insufficient funds for withdrawal`);
            return;
        }
        this.balance -= amount;
        console.log(`${this.accountHolder} withdrew ${amount}. Remaining balance: ${this.balance}`);
    }

    getBalance(): number {
        return this.balance;
    }

    getUserInfo(): void {
        console.log(`Account Holder: ${this.accountHolder}`);
        console.log(`Current Balance: ${this.balance}`);
    }
    }

// Subclass - Savings Account

class SavingsAccount extends BankAccount {
    private interestRate: number = 4; // Annual Interest Rate of 4%

    calculateInterest(): number {
        const interest = (this.balance * this.interestRate) / 100;
    console.log(`${this.accountHolder}'s Savings Interest: ${interest}`);
    return interest;
}
}

// Subclass - Current Account

class CurrentAccount extends BankAccount {
    private overdraftLimit: number = 5000; // Overdraft Limit of 5000

    calculateInterest(): number {
        console.log(`${this.accountHolder}'s Current Account has no interest.`);
        return 0;
    }

    withdraw(amount: number): void {
        if (amount > this.balance + this.overdraftLimit) {
            console.log(`${this.accountHolder}, Exceeds overdraft limit for withdrawal!!!`);
            return;
        }

        this.balance -= amount;
        console.log(`${this.accountHolder} withdrew ${amount}. Remaining balance: ${this.balance}`);
    }
}

// Bank System Functions
// Function to Create Account Dynamically

function createAccount(type: string, name: string, initialBalance: number): BankAccount {
    if (type.toLowerCase() === "savings") {
        return new SavingsAccount(name, initialBalance);
    } else if (type.toLowerCase() === "current") {
        return new CurrentAccount(name, initialBalance);
    } else {
        throw new Error("Invalid account type!!!");
    }
}

// Function to Simulate User Actions
function simulateUserActions() {
    // Simulated user input (you can replace this with prompt() in a real app)
    const users = [
        { type: 'savings', name: 'Giri', balance: 10000 },
        { type: 'current', name: 'Arun', balance: 5000 },
        { type: 'savings', name: 'Ram', balance: 8000 }
    ];

    users.forEach((user) => {
        console.log("\n===============================");
        console.log(`Welcome, ${user.name}! Creating your ${user.type} account...`);
        const account = createAccount(user.type, user.name, user.balance);
        account.getUserInfo();

        // User Actions
        account.deposit(2000);
        account.withdraw(1500);
        account.calculateInterest();
        console.log(`Final Balance for ${user.name}: ${account.getBalance()}`);
    });
}
// Start Simulation
simulateUserActions();
