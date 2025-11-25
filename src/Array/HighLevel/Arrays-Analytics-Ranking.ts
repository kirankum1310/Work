
//This part creates a “rule book”
type Course = {
  id: number;
  title: string;
  students: { name: string; progress: number }[];
};

//This creates real data
let courses: Course[] = [
  {
    id: 1,
    title: "TypeScript Mastery",
    students: [
      { name: "Alice", progress: 85 },
      { name: "Bob", progress: 70 }
    ]
  },
  {
    id: 2,
    title: "Automation Testing",
    students: [
      { name: "Charlie", progress: 95 },
      { name: "David", progress: 60 }
    ]
  }
];

//The smart part: calculating averages
let courseAnalytics = courses.map(course => {
  let avg =
    course.students.reduce((sum, s) => sum + s.progress, 0) /
    course.students.length;
  return { course: course.title, avgProgress: avg };
});

//Displaying results
console.log("=== Course Analytics ===");
console.table(courseAnalytics);
