
let scores : number [] = [80, 92, 65, 100, 88];

// map -> transform

let updatedScores = scores.map(score => score + 5);

//filter -> condition
let highScores = scores.filter(score => score > 85);

// reduce -> accumulate
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;

// find → first match
let topper = scores.find(score => score === 100);

console.log("Updated Scores: ", scores);
console.log("High Scores: ", highScores);
console.log("Total Score: ", total);
console.log("Average Score: ", average);
console.log("Topper Score: ", topper);
