// 1. Simple Arrow Function Examples

//1.1 Basic function

const sayHello = () => {
  console.log("Hello!");
};

sayHello();

//1.2 Arrow Function with parameters

const square = (n: number) => n * n;

console.log(square(5));


//1.3 Implicit return

const double = (x: number): number => x * x;

console.log(double(4));


