
// 2D array
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let row of matrix) {
  console.log("Row:", row);
}
if (matrix[2] && matrix[2][1] !== undefined) {
  console.log("Element [2][1]:", matrix[2][1]); // 8
}
