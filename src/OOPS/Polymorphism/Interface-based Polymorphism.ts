//Rule Book
// 
interface PaymentGateway {
  pay(amount: number): void;
}

class PayPal implements PaymentGateway {
  pay(amount: number): void {
    console.log(`💰 Paying $${amount} using PayPal.`);
  }
}

class Stripe implements PaymentGateway {
  pay(amount: number): void {
    console.log(`💳 Paying $${amount} using Stripe.`);
  }
}

class Razorpay implements PaymentGateway {
  pay(amount: number): void {
    console.log(`🏦 Paying ₹${amount} using Razorpay.`);
  }
}

class UPI implements PaymentGateway {
  pay(amount: number): void {
    console.log(`💸 Paying $${amount} using UPI.`);
  }
}

function processPayment(gateway: PaymentGateway, amount: number) {
  gateway.pay(amount);
}

// Polymorphism in action
const gateways: PaymentGateway[] = [
  new PayPal(),
  new Stripe(),
  new Razorpay(),
  new UPI()
];

for (const g of gateways) {
  processPayment(g, 1000);
}