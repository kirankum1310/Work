type Loan = {
  loanId: number;
  customer: string;
  amount: number;
  type: "Home" | "Car" | "Personal";
  overdue: boolean;
};

let loans: Loan[] = [
  { loanId: 101, customer: "Alice", amount: 500000, type: "Home", overdue: false },
  { loanId: 102, customer: "Bob", amount: 300000, type: "Car", overdue: true },
  { loanId: 103, customer: "Charlie", amount: 100000, type: "Personal", overdue: false },
  { loanId: 104, customer: "David", amount: 750000, type: "Home", overdue: true }
];

// Group loan amounts by type
let loanSummary = loans.reduce((acc, l) => {
  acc[l.type] = (acc[l.type] || 0) + l.amount;
  return acc;
}, {} as Record<string, number>);

// Overdue risk analysis
let overdueLoans = loans.filter(l => l.overdue);
let overdueAmount = overdueLoans.reduce((sum, l) => sum + l.amount, 0);

console.log("=== Loan Portfolio Summary ===");
console.log(loanSummary);

console.log("\n=== Overdue Analysis ===");
console.log("Overdue Loans:", overdueLoans.length);
console.log("Overdue Amount:", overdueAmount);
console.log("Overdue Loan Details:", overdueLoans);
