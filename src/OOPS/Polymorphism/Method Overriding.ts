//Rule Book
// 
class Shape {
  area(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }
  area(): number {
    return this.width * this.height;
  }
}

function printArea(shape: Shape) {
  console.log(`Area: ${shape.area().toFixed(2)}`);
}

const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(4, 8)
];

for (const s of shapes) {
  printArea(s);
}