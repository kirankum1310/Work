// 1) Named function
function add(a: number, b: number): number {
  return a + b;
}
console.log("1:", add(3, 4));

// 2) Arrow function
const square = (x: number): number => x * x;
console.log("2:", square(5));

// 3) Anonymous function assigned to variable
const greet = function(name: string): string {
  return `Hello, ${name}`;
};
console.log("3:", greet("Sapthagiri"));

// 4) Default parameter
function greetUser(name: string = "Guest"): string {
  return `Welcome, ${name}!`;
}
console.log("4:", greetUser());
console.log("4:", greetUser("Selvam"));

// 5) Optional parameter
function fullName(first: string, last?: string): string {
  return last ? `${first} ${last}` : first;
}
console.log("5:", fullName("John"));
console.log("5:", fullName("John", "Doe"));

// 6) Rest parameters
function sum(...nums: number[]): number {
  return nums.reduce((acc, v) => acc + v, 0);
}
console.log("6:", sum(1, 2, 3, 4));

// 7) Function returning void
function logMessage(msg: string): void {
  console.log("7: Log:", msg);
}
logMessage("TypeScript is cool");

// 8) Function returning boolean
function isEven(n: number): boolean {
  return n % 2 === 0;
}
console.log("8:", isEven(10));

// 9) Recursive function
function factorial(n: number): number {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log("9:", factorial(5));

// 10) Higher-order function
function applyOperation(a: number, b: number, op: (x: number, y: number) => number): number {
return op(a, b);
}
console.log("10:", applyOperation(3, 4, (x, y) => x + y));

// 11) Function returning another function
function multiplier(factor: number) {
  return (x: number) => x * factor;
}
const double = multiplier(2);
console.log("11:", double(10));

// 12) Generic function
function identity<T>(value: T): T {
  return value;
}
console.log("12:", identity<number>(42));
console.log("12:", identity<string>("TS"));

// 13) Array creation
let myNumbers: number[] = [1, 2, 3, 4];
console.log("13:", myNumbers);

// 14) Array iteration (forEach)
console.log("14:");
myNumbers.forEach(n => console.log("  ", n * 2));

// 15) for-of loop
console.log("15:");
for (let n of myNumbers) {
  console.log("  ", n);
}

// 16) Array push & pop
myNumbers.push(5);
console.log("16:", myNumbers);
myNumbers.pop();
console.log("16:", myNumbers);

// 17) Array shift & unshift
myNumbers.unshift(0);
console.log("17:", myNumbers);
myNumbers.shift();
console.log("17:", myNumbers);

// 18) map example
let squared = myNumbers.map(n => n * n);
console.log("18:", squared);

// 19) filter example
let evens = myNumbers.filter(n => n % 2 === 0);
console.log("19:", evens);

// 20) reduce example
let sumAll = myNumbers.reduce((acc, val) => acc + val, 0);
console.log("20:", sumAll);

// 21) find example
let found = myNumbers.find(n => n > 2);
console.log("21:", found);

// 22) Object key-value
let userPerson = { name: "John", age: 25 };
console.log("22:", userPerson);

// 23) Update object value
userPerson.age = 26;
console.log("23:", userPerson);

// 24) JSON stringify & parse
let jsonStr = JSON.stringify(userPerson);
console.log("24:", jsonStr);
let obj = JSON.parse(jsonStr);
console.log("24:", obj);

// 25) Async function
async function fetchData() {
  return "Data loaded!";
}
fetchData().then(data => console.log("25:", data));
