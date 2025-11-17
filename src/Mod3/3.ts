// 2. Typed Arrow Function Examples

// 2.1 Explicit parameter and return types

const multiply = (a: number, b: number): number => {
  return a * b;
};

console.log(multiply(3, 4)); // 12

// 2.2 Returning objects (must wrap in parentheses)

const createUser = (name: string, age: number): { name: string; age: number } => ({
  name,
  age,
});

console.log(createUser("Alice", 25));

// 2.3 Using type aliases

type User = {
  id: number;
  username: string;
};

const getUser = (id: number): User => ({
  id,
  username: `User${id}`,
});

console.log(getUser(1));
