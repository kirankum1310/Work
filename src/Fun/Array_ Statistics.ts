function arrayStats(arr: number[]) {
  let sum = arr.reduce((a, b) => a + b, 0);
  let avg = sum / arr.length;
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return { sum, avg, max, min };
}

let values = [10, 20, 30, 40, 50];
console.log("Array Stats:", arrayStats(values));
