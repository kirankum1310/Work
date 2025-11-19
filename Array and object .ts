type Employee = {
    id: number;
    name: string;
    role: string;
    active: boolean;
};

let employees: Employee[] = [
    { id: 1, name: "Giri", role: "Tester", active: true },
    { id: 2, name: "Ravi", role: "Developer", active: false },
    { id: 3, name: "Charan", role: "Manager", active: true }
];

let activeEmployees = employees.filter(emp => emp.active);

let employeeNames = employees.map(emp => emp.name);

let manager = employees.find(emp => emp.role === "Manager");

console.log("Active Employees:", activeEmployees);
console.log("Employee Names:", employeeNames);
console.log("Manager:", manager);