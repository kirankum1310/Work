
let frontend: string[] = ["HTML", "CSS", "JavaScript"];
let backend: string[] = ["Node.js", "Express", "MongoDB"];


// Spread operator
let fullStack: string[] = [...frontend, ...backend];
console.log("Full Stack:", fullStack);


// Rest parameters
function logSkills(...skills: string[]): void {
  console.log("Skills:", skills.join(", "));
}

logSkills("Selenium", "Playwright", "Cypress", "and API");
