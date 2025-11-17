const createPoint = (x: number, y: number) => {
  let quadrant = "";
  if (x > 0 && y > 0) quadrant = "First Quadrant";
  else if (x < 0 && y > 0) quadrant = "Second Quadrant";
  else if (x < 0 && y < 0) quadrant = "Third Quadrant";
  else quadrant = "Fourth Quadrant";
  return { x, y, quadrant };
};

let p1 = createPoint(10, 20);
let p2 = createPoint(-5, -7);
console.log(p1, p2);
