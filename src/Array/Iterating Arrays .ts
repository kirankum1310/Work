let skills = ["Selenium.", "Playwright.", "Cypress.", "API."];

// for loop
for (let i = 0; i < skills.length; i++) {
  console.log(`Skill ${i + 1}: ${skills[i]}`);
}

// for-of loop
for (let skill of skills) {
  console.log("Using for-of:", skill);
}

// for-in loop (indexes)
for (let index in skills) {
  console.log(`Index [${index}] = ${skills[index]}`);
}

// forEach method
skills.forEach((skill, i) => {
  console.log(`forEach ${i}: ${skill}`);
});
