
type TestCase = {
  id: number;
  title: string;
  status: "Pass" | "Fail" | "Skip";
};

let testCases: TestCase[] = [
  { id: 1, title: "Login with valid credentials", status: "Pass" },
  { id: 2, title: "Login with invalid password", status: "Fail" },
  { id: 3, title: "Checkout with empty cart", status: "Skip" },
  { id: 4, title: "Search product", status: "Pass" }
];

// count test results
let passed = testCases.filter(tc => tc.status === "Pass").length;
let failed = testCases.filter(tc => tc.status === "Fail").length;
let skipped = testCases.filter(tc => tc.status === "Skip").length;

console.log("Test Summary:");
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
console.log(`Skipped: ${skipped}`);
