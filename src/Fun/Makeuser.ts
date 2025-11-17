function makeUser(name: string, age?: number, city: string = "Unknown") {
  let id = Math.floor(Math.random() * 1000);
  let active = true;
  let role = age && age > 18 ? "Adult" : "Minor";
  return { id, name, age, city, role, active };
}

let u1 = makeUser("Arun", 22, "Chennai");
let u2 = makeUser("Kavi");
console.log(u1);
console.log(u2);
