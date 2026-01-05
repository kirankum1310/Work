// ===========================
// Main Entry Point
// ===========================
import { showProjectBanner, helloWorld } from "./Getting Started";
import { checkEligibility, showLoopDemo } from "./Basics of TypeScript";
import { calculateBonus, greetEmployee, taskSummary, generateTaskReport } from "./functionsArrays";

// Run Module 1
showProjectBanner();
helloWorld();

// Run Module 2
checkEligibility();
showLoopDemo();

// Run Module 3
console.log("\n--- Functions Demo ---");
console.log("Bonus:", calculateBonus(50000, 4));
console.log(greetEmployee("Alice", "QA Lead"));
taskSummary();
console.log(generateTaskReport("Alice", "All tasks executed successfully."));
