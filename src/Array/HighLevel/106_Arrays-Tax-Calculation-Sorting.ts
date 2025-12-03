//Rule Book
type Employee = {
  id: number;
  name: string;
  salary: number;
  bonusPercent: number;
};


//Employee Database
let employees: Employee[] = [
  { id: 1, name: "Alice", salary: 70000, bonusPercent: 10 },
  { id: 2, name: "Bob", salary: 50000, bonusPercent: 15 },
  { id: 3, name: "Charlie", salary: 90000, bonusPercent: 8 },
  { id: 4, name: "David", salary: 45000, bonusPercent: 12 }
];

// Calculate net salary after bonus & 10% tax
let payroll = employees.map(emp => {
  let gross = emp.salary + (emp.salary * emp.bonusPercent) / 100;
  let net = gross - gross * 0.1; // tax
  return { ...emp, gross, net };
});

// Sort by highest net salary
payroll.sort((a, b) => b.net - a.net);

console.log("=== Payroll Report ===");
console.table(payroll);
