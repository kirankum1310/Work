// Define the Employee interface
interface Employee {
  id: number;
  name: string;
  salary: number;
  department: string;
}

// Create an array of 6 employees
const employees: Employee[] = [
  { id: 101, name: 'Alice', salary: 55000, department: 'IT' },
  { id: 102, name: 'Bob', salary: 28000, department: 'HR' },
  { id: 103, name: 'Charlie', salary: 32000, department: 'IT' },
  { id: 104, name: 'Diana', salary: 25000, department: 'Finance' },
  { id: 105, name: 'Eve', salary: 29000, department: 'IT' },
  { id: 106, name: 'Frank', salary: 40000, department: 'Marketing' }
];

// 1. Print employees from IT department
console.log('Employees in IT department:');
employees
  .filter(emp => emp.department === 'IT')
  .forEach(emp => console.log(`${emp.name} (ID: ${emp.id}) - $${emp.salary}`));

// 2. Increase salary by 10% for employees earning less than 30000
console.log('\nApplying 10% raise to employees with salary < 30000...');
employees.forEach(emp => {
  if (emp.salary < 30000) {
    emp.salary *= 1.10; // Increase by 10%
  }
});

// Display updated salaries for those who received a raise (optional)
console.log('Updated salaries:');
employees
  .filter(emp => emp.salary < 33000) // approximate check for those originally under 30000 after raise
  .forEach(emp => console.log(`${emp.name}: $${emp.salary.toFixed(2)}`));

// 3. Find total salary expense
const totalExpense = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(`\nTotal salary expense: $${totalExpense.toFixed(2)}`);

// 4. Find highest paid employee
const highestPaid = employees.reduce((prev, current) => 
  (prev.salary > current.salary) ? prev : current
);
console.log(`Highest paid employee: ${highestPaid.name} with salary $${highestPaid.salary}`);
