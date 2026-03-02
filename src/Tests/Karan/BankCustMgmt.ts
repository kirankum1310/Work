// Define the Customer interface
interface Customer {
  accountNumber: number;
  name: string;
  balance: number;
  accountType: 'savings' | 'current' | 'fixed'; // using literal types for clarity
}

// Create an array of 10 customers with Indian names
const customers: Customer[] = [
  { accountNumber: 1001, name: 'Rajesh Kumar', balance: 12000, accountType: 'savings' },
  { accountNumber: 1002, name: 'Priya Sharma', balance: 4300, accountType: 'current' },
  { accountNumber: 1003, name: 'Amit Patel', balance: 2500, accountType: 'savings' },
  { accountNumber: 1004, name: 'Sunita Reddy', balance: 8000, accountType: 'savings' },
  { accountNumber: 1005, name: 'Vikram Singh', balance: 1500, accountType: 'current' },
  { accountNumber: 1006, name: 'Anjali Desai', balance: 6200, accountType: 'savings' },
  { accountNumber: 1007, name: 'Ravi Shastri', balance: 3000, accountType: 'current' },
  { accountNumber: 1008, name: 'Deepa Nair', balance: 18000, accountType: 'savings' },
  { accountNumber: 1009, name: 'Manoj Joshi', balance: 400, accountType: 'savings' },
  { accountNumber: 1010, name: 'Kavita Mehra', balance: 9500, accountType: 'fixed' }
];

console.log('Initial Customer Details:');
customers.forEach(c => console.log(`${c.name} (A/c ${c.accountNumber}): ₹${c.balance} (${c.accountType})`));

// 1. Print customers with balance less than 5000
console.log('\nCustomers with balance less than ₹5000:');
const lowBalance = customers.filter(c => c.balance < 5000);
if (lowBalance.length === 0) {
  console.log('No customers with low balance.');
} else {
  lowBalance.forEach(c => console.log(`${c.name}: ₹${c.balance}`));
}

// 2. Add 5% interest for savings accounts
console.log('\nAdding 5% interest to savings accounts...');
customers.forEach(c => {
  if (c.accountType === 'savings') {
    const interest = c.balance * 0.05;
    c.balance += interest;
    console.log(`${c.name} (savings) – interest added: ₹${interest.toFixed(2)}, new balance: ₹${c.balance.toFixed(2)}`);
  }
});

// 3. Find total bank balance (after interest update)
const totalBalance = customers.reduce((sum, c) => sum + c.balance, 0);
console.log(`\nTotal bank balance: ₹${totalBalance.toFixed(2)}`);

// 4. Find customer with highest balance
const highestBalanceCustomer = customers.reduce((prev, current) => 
  prev.balance > current.balance ? prev : current
);
console.log(`Customer with highest balance: ${highestBalanceCustomer.name} (A/c ${highestBalanceCustomer.accountNumber}) with ₹${highestBalanceCustomer.balance}`);
