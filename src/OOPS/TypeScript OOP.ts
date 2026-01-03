// =======================
// ENUMS (Role Types)
// =======================
enum UserRole {
  Admin = "ADMIN",
  Teacher = "TEACHER",
  Student = "STUDENT"
}

// =======================
// INTERFACE (Contract)
// =======================
interface Person {
  name: string;
  age: number;
  getDetails(): string;
}

// =======================
// BASE CLASS
// =======================
class User implements Person {
  // properties with access modifiers
  public name: string;
  public age: number;
  protected role: UserRole;

  // constructor (initializes object)
  constructor(name: string, age: number, role: UserRole) {
    this.name = name;
    this.age = age;
    this.role = role;
  }

  // method
  getDetails(): string {
    return `${this.name}, Age: ${this.age}, Role: ${this.role}`;
  }
}

// =======================
// INHERITANCE + METHOD OVERRIDING
// =======================
class Student extends User {
  private grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age, UserRole.Student); // call parent constructor
    this.grade = grade;
  }

  // override method
  getDetails(): string {
    return `👨‍🎓 Student: ${this.name}, Grade: ${this.grade}`;
  }
}

class Teacher extends User {
  private subject: string;

  constructor(name: string, age: number, subject: string) {
    super(name, age, UserRole.Teacher);
    this.subject = subject;
  }

  // override method
  getDetails(): string {
    return `👩‍🏫 Teacher: ${this.name}, Subject: ${this.subject}`;
  }
}

class Admin extends User {
  private department: string;

  constructor(name: string, age: number, department: string) {
    super(name, age, UserRole.Admin);
    this.department = department;
  }

  // override method
  getDetails(): string {
    return `🛠️ Admin: ${this.name}, Department: ${this.department}`;
  }
}

// =======================
// POLYMORPHISM
// =======================
function printUserInfo(user: User) {
  console.log(user.getDetails()); // behaves differently based on object type
}

// =======================
// OBJECT CREATION & RUN
// =======================

// create objects
const s1 = new Student("Alice", 20, "A");
const s2 = new Student("Bob", 21, "B");

const t1 = new Teacher("Mr. Smith", 40, "Mathematics");
const t2 = new Teacher("Ms. Johnson", 35, "Physics");

const a1 = new Admin("Principal Rao", 50, "Administration");

// =======================
// EXECUTION
// =======================
const schoolPeople: User[] = [s1, s2, t1, t2, a1];

console.log("===== School Management System =====");
schoolPeople.forEach(person => printUserInfo(person));
