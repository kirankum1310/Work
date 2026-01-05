// ===========================
// Functions & Arrays
// ===========================

// Normal function with return type
export function calculateBonus(salary: number, exp: number): number {
  return exp >= 3 ? salary * 0.2 : salary * 0.1;
}

// Arrow function with optional parameter
export const greetEmployee = (name: string, role: string = "Engineer"): string => {
  return `👋 Hello, ${name}. Your role is ${role}`;
};

// Array operations
let tasks: string[] = [
  "Write Test Cases",
  "Execute Regression",
  "Debug Issues",
  "Generate Report"
];

export function taskSummary(): void {
  console.log("\n--- Task Summary ---");
  console.log("Original Tasks:", tasks);

  let completedTasks = tasks.map(t => `✅ ${t}`);
  console.log("Completed:", completedTasks);

  let filtered = tasks.filter(t => t.includes("Test"));
  console.log("Filtered:", filtered);

  let totalLetters = tasks.reduce((sum, t) => sum + t.length, 0);
  console.log("Total Letters in Tasks:", totalLetters);
}

// Complex function with optional param
export function generateTaskReport(user: string, remarks?: string): string {
  return `
  ===== TASK REPORT =====
  User: ${user}
  Task Count: ${tasks.length}
  Remarks: ${remarks ?? "No remarks"}
  ========================`;
}
