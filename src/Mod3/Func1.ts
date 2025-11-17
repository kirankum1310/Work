// 1. Basic Recursive Function (Factorial)

function factorial(n: number): number {
  if (n === 0) return 1; // base case
  return n * factorial(n - 1); // recursive step
}

console.log(factorial(5)); // 120


// 2. Recursive Fibonacci

function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7)); // 13


// 3. Recursive Sum of an Array

function sumArray(arr: number[], index: number = 0): number {
  if (index === arr.length) return 0;
  return arr[index] + sumArray(arr, index + 1);
}

console.log(sumArray([2, 4, 6])); // 12


// 4. Recursive String Reverse

function reverseString(str: string): string {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello")); // "olleh"


// 5. Recursive Binary Search (TypeScript)

function binarySearch(
  arr: number[],
  target: number,
  low: number = 0,
  high: number = arr.length - 1
): number {
  if (low > high) return -1;

  const mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) return mid;
  if (arr[mid] < target) return binarySearch(arr, target, mid + 1, high);

  return binarySearch(arr, target, low, mid - 1);
}

console.log(binarySearch([1, 3, 5, 7, 9], 7)); // 3

