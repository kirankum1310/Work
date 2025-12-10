
//Rule Book
type Result = {
  studentId: number;
  name: string;
  marks: number[];
};

//Sample data
let results: Result[] = [
  { studentId: 1, name: "Alice", marks: [80, 75, 92] },
  { studentId: 2, name: "Bob", marks: [65, 70, 68] },
  { studentId: 3, name: "Charlie", marks: [95, 90, 98] },
  { studentId: 4, name: "David", marks: [50, 55, 60] },
  { studentId: 5, name: "Eve", marks: [85, 88, 90] }
];


//Compute average per student
let rankedStudentPerformance = results.map(r => {
  let avg = r.marks.reduce((sum, m) => sum + m, 0) / r.marks.length;
  return { ...r, avg: +avg.toFixed(2) };
});


//Sort by Rank
rankedStudentPerformance.sort((a, b) => b.avg - a.avg);


//Calculate % cutoff (top 20%)
let cutoffIndex = Math.floor(rankedStudentPerformance.length * 0.2);
let toppers = rankedStudentPerformance.slice(0, cutoffIndex + 1);

//Display Results
console.log("=== Student Ranking ===");
console.table(rankedStudentPerformance);
console.log("\n=== Toppers (Top 20%) ===");
console.table(toppers);
