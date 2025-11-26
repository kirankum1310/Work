//Rule book

type EmployeeRecord = {
    id: number;
    name: string;
    role: string;
    active: boolean;
};

//Data inputs
let employees: EmployeeRecord[] = [
    { id: 1, name: "Giri", role: "Tester", active: true },
    { id: 2, name: "Ravi", role: "Developer", active: false },
    { id: 3, name: "Charan", role: "Manager", active: true },
    { id: 4, name: "Diana", role: "Developer", active: true },
];

//Filter active employees
let activeEmployees = employees.filter(emp => emp.active);

//Map to get only names
let employeeNames = employees.map(emp => emp.name);

//Find by ID
let employeeById = employees.find(emp => emp.id === 3);

//Find by role
let developers = employees.filter(emp => emp.role === "Developer");

//Output results
console.log("Active Employees:", activeEmployees);
console.log("Employee Names:", employeeNames);
console.log("Employee with ID 3:", employeeById);
console.log("Developers:", developers);

export {};