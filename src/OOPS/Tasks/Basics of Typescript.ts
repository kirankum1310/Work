// ===========================
// Basics of TypeScript
// ===========================

// Variables with data types
let employeeName: string = "Alice Johnson";
let employeeAge: number = 28;
let isPermanent: boolean = true;
let department: "QA" | "DEV" | "OPS" = "QA";

// Operators + Conditional
export function checkEligibility(): void {
  console.log("\n--- Employee Eligibility Check ---");
  if (employeeAge >= 25 && isPermanent) {
    console.log(`${employeeName} is eligible for promotion.`);
  } else {
    console.log(`${employeeName} is not eligible yet.`);
  }
}

// Loops example
export function showLoopDemo(): void {
  console.log("\n--- Loop Demonstration ---");
  for (let i = 1; i <= 5; i++) {
    console.log(`Iteration ${i}: ${employeeName} works in ${department}`);
  }

  let skills: string[] = ["Selenium", "Playwright", "Cypress", "API Testing"];
  console.log("\nSkills:");
  for (let skill of skills) {
    console.log(" - " + skill);
  }
}
