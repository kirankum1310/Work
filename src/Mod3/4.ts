// 3. Generic Arrow Function Examples

// 3.1 Basic generic

const identity = <T>(value: T): T => value;

console.log(identity<string>("hello"));
console.log(identity<number>(100));


// 3.2 Array mapping with generics

const mapArray = <T, U>(arr: T[], fn: (item: T) => U): U[] => {
  return arr.map(fn);
};

const numbers = [1, 2, 3];
const strings = mapArray(numbers, n => `#${n}`);

console.log(strings); // ["#1", "#2", "#3"]


// 4. Async Arrow Function Examples

// 4.1 Async + await

const fetchMessage = async (): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });
};

fetchMessage().then(console.log);


// 4.2 Calling APIs

const getTodo = async (id: number): Promise<any> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return response.json();
};

getTodo(1).then(todo => console.log(todo));
