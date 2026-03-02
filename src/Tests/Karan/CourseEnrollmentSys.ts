// Define the Student interface
interface Student {
  id: number;
  name: string;
  course: string;
  feesPaid: boolean;
}

// Create an array of 7 students
let students: Student[] = [
  { id: 101, name: 'Alice', course: 'Mathematics', feesPaid: true },
  { id: 102, name: 'Bob', course: 'Physics', feesPaid: false },
  { id: 103, name: 'Charlie', course: 'Mathematics', feesPaid: true },
  { id: 104, name: 'Diana', course: 'Computer Science', feesPaid: true },
  { id: 105, name: 'Eve', course: 'Physics', feesPaid: false },
  { id: 106, name: 'Frank', course: 'Mathematics', feesPaid: true },
  { id: 107, name: 'Grace', course: 'Computer Science', feesPaid: false }
];

console.log('Initial Student List:');
students.forEach(s => console.log(`${s.name} (ID: ${s.id}) - Course: ${s.course}, Fees Paid: ${s.feesPaid}`));

// 1. Print students who have not paid fees
console.log('\nStudents who have NOT paid fees:');
const unpaid = students.filter(s => !s.feesPaid);
if (unpaid.length === 0) {
  console.log('All students have paid fees.');
} else {
  unpaid.forEach(s => console.log(`${s.name} (ID: ${s.id}) - Course: ${s.course}`));
}

// 2. Count students per course
const courseCounts: { [course: string]: number } = {};
students.forEach(s => {
  courseCounts[s.course] = (courseCounts[s.course] || 0) + 1;
});

console.log('\nNumber of students per course:');
for (const [course, count] of Object.entries(courseCounts)) {
  console.log(`${course}: ${count} student(s)`);
}

// 3. Find course with maximum students
let maxCourse = '';
let maxCount = 0;
for (const [course, count] of Object.entries(courseCounts)) {
  if (count > maxCount) {
    maxCount = count;
    maxCourse = course;
  }
}
console.log(`\nCourse with most students: ${maxCourse} (${maxCount} students)`);

// 4. Add new student dynamically
const newStudent: Student = {
  id: 108,
  name: 'Henry',
  course: 'Physics',
  feesPaid: true
};
students.push(newStudent);
console.log('\nAdded new student: Henry (ID: 108), Course: Physics, Fees Paid: true');

// Display updated list
console.log('\nUpdated Student List:');
students.forEach(s => console.log(`${s.name} (ID: ${s.id}) - Course: ${s.course}, Fees Paid: ${s.feesPaid}`));
