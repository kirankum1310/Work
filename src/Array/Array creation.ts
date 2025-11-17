// Basic array
let numbers: number[] = [1, 2, 3, 4, 5];

// Using generic type
let names: Array<string> = ["Giri", "Suganthan", "Prasanth"];

// Mixed type array
let mixed: (number | string)[] = [1, "Test", 3, "QA"];

// Empty array with push
let tasks: string[] = [];
tasks.push("Login Test");
tasks.push("Signup Test");

console.log(numbers);
console.log(names);
console.log(mixed);
console.log(tasks);