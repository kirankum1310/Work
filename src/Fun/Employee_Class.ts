export class Employee {
  constructor(public id: number, public name: string, public role: string) {}
  describe() {
    return `Employee ${this.id}: ${this.name} works as ${this.role}`;
  }
}

let e1 = new Employee(101, "Arjun", "Developer");
let e2 = new Employee(102, "Meena", "Designer");
console.log(e1.describe());
console.log(e2.describe());
