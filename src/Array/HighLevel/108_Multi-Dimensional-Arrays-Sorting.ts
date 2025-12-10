
//Complex Array Example: Student Performance Analysis

type Student = {
  id: number;
  name: string;
  marks: number[];
};

let students: Student[] = [
  { id: 1, name: `Alice`, marks: [85, 90, 88] },
  { id: 2, name: `Bob`, marks: [70, 65, 80] },
  { id: 3, name: `Charlie`, marks: [95, 92, 98] },
  { id: 4, name: `David`, marks: [60, 75, 70] }
];


//Calculate average for each student

let studentPerformance = students.map(student => {
  let avg = student.marks.reduce((a, b) => a + b, 0) / student.marks.length;
  return { id: student.id, name: student.name, average: +avg.toFixed(2) };
});


//Sort by highest average

studentPerformance.sort((a, b) => b.average - a.average);


// Add rank
studentPerformance = studentPerformance.map((s, i) => ({
  ...s,
  rank: i + 1
}));


// Topper

console.log("=== Student Performance Ranking ===");
if (studentPerformance.length > 0) {
  console.log("Topper name:", studentPerformance[0]!.name);
  console.log("Average Marks:", studentPerformance[0]!.average);
}

console.table(studentPerformance[0]!.name);