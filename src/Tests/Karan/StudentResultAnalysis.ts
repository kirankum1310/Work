// Define a Student interface
interface Student {
  id: number;
  name: string;
  marks: number;
}

// Create an array of 8 students
const students: Student[] = [
  { id: 1, name: 'Alice', marks: 95 },
  { id: 2, name: 'Bob', marks: 82 },
  { id: 3, name: 'Charlie', marks: 67 },
  { id: 4, name: 'Diana', marks: 48 },
  { id: 5, name: 'Eve', marks: 73 },
  { id: 6, name: 'Frank', marks: 91 },
  { id: 7, name: 'Grace', marks: 58 },
  { id: 8, name: 'Henry', marks: 44 }
];

// 1. Print students who scored above 60
console.log('Students who scored above 60:');
students
  .filter(student => student.marks > 60)
  .forEach(student => console.log(`${student.name} (${student.marks})`));

// 2. Assign grade (90+ A, 75-89 B, 60-74 C, below 60 Fail)
function getGrade(marks: number): string {
  if (marks >= 90) return 'A';
  if (marks >= 75) return 'B';
  if (marks >= 60) return 'C';
  return 'Fail';
}

console.log('\nStudent Grades:');
students.forEach(student => {
  const grade = getGrade(student.marks);
  console.log(`${student.name} (${student.marks}): ${grade}`);
});

// 3. Find topper name (student with highest marks)
const topper = students.reduce((prev, current) => 
  (prev.marks > current.marks) ? prev : current
);
console.log(`\nTopper: ${topper.name} (${topper.marks})`);

// 4. Count number of failed students (marks < 60)
const failedCount = students.filter(student => student.marks < 60).length;
console.log(`Number of failed students: ${failedCount}`);