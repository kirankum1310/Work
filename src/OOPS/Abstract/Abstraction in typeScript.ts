
// Abstraction Example in TypeScript


// Abstract class hides implementation details
abstract class PaymentProcessor {
  // Abstract method — must be implemented by subclasses
  abstract processPayment(amount: number): void;

  // Concrete (non-abstract) method — shared logic
  generateInvoice(amount: number): void {
    console.log(`Invoice generated for ₹${amount}`);
  }
}


// Derived Classes — Real Implementations


// Credit Card Payment
class CreditCardPayment extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of ₹${amount}`);
  }
}

// UPI Payment
class UPIPayment extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`📱 Processing UPI payment of ₹${amount}`);
  }
}

// 🏦 Net Banking Payment
class NetBankingPayment extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`🏦 Processing NetBanking payment of ₹${amount}`);
  }
}


// Interface Example (Extra Abstraction Layer)


interface TransactionLogger {
  logTransaction(type: string, amount: number): void;
}

// Implementing the interface
class Logger implements TransactionLogger {
  logTransaction(type: string, amount: number): void {
    console.log(`📝 Transaction Logged → Type: ${type}, Amount: ₹${amount}`);
  }
}


// Main Application


// Create payment processors
const credit = new CreditCardPayment();
const upi = new UPIPayment();
const net = new NetBankingPayment();

// Create logger
const logger = new Logger();

// Perform transactions
credit.processPayment(2500);
credit.generateInvoice(2500);
logger.logTransaction("Credit Card", 2500);

upi.processPayment(1200);
upi.generateInvoice(1200);
logger.logTransaction("UPI", 1200);

net.processPayment(5000);
net.generateInvoice(5000);
logger.logTransaction("NetBanking", 5000);


// ========================
// Output Print panugha bro

