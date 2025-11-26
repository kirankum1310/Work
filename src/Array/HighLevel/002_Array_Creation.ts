//Rule book

//Basic array
let numbers: number[] = [1, 2, 3, 4, 5];

//Using generic array type
let names: Array<string> = ["Giri", "Prasanth","Suganthan", "Kiran"];

//Mixed type array (Union)
let mixed: (string | number)[] = ["Test", 100, "QA", 200];

//Empty array with push
let tasks: string[] = [];
tasks.push("Login Test");
tasks.push("Signup Test");

//Output
console.log(numbers);
console.log(names);
console.log(mixed);
console.log(tasks);