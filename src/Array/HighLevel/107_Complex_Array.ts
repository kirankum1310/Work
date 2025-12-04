
// Complex Array Example: Test Management System
//Rule Book

type TestCase = {
  id: number;
  title: string;
  priority: "High" | "Medium" | "Low";
  status: "Pass" | "Fail" | "Skip";
  owner: string;
};

let testCases: TestCase[] = [
  { id: 1, title: "Login with valid user", priority: "High", status: "Pass", owner: "Alice" },
  { id: 2, title: "Login with invalid password", priority: "High", status: "Fail", owner: "Bob" },
  { id: 3, title: "Checkout empty cart", priority: "Medium", status: "Skip", owner: "Alice" },
  { id: 4, title: "Search product", priority: "Low", status: "Pass", owner: "Charlie" },
  { id: 5, title: "Add to wishlist", priority: "Medium", status: "Fail", owner: "Alice" },
  { id: 6, title: "Remove item from cart", priority: "High", status: "Pass", owner: "Bob" }
];

// Group test cases by owner
let groupedByOwner: Record<string, TestCase[]> = testCases.reduce((acc, tc) => {
  if (!acc[tc.owner]) acc[tc.owner] = [];
  acc[tc.owner]!.push(tc);
  return acc;
}, {} as Record<string, TestCase[]>);

// Calculate summary
let summary = testCases.reduce(
  (acc, tc) => {
    acc.total++;
    acc[tc.status]++;
    return acc;
  },
  { total: 0, Pass: 0, Fail: 0, Skip: 0 }
);

console.log("=== Test Case Summary ===");
console.log("Total:", summary.total);
console.log("Passed:", summary.Pass);
console.log("Failed:", summary.Fail);
console.log("Skipped:", summary.Skip);
console.log("\n=== Grouped By Owner ===");
console.log(groupedByOwner);
