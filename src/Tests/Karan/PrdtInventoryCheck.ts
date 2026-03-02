// Define the Product interface
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Create an array of products (6 entries)
const products: Product[] = [
  { id: 1, name: 'Laptop', price: 999.99, quantity: 5 },
  { id: 2, name: 'Mouse', price: 25.50, quantity: 0 },
  { id: 3, name: 'Keyboard', price: 45.00, quantity: 3 },
  { id: 4, name: 'Monitor', price: 199.99, quantity: 0 },
  { id: 5, name: 'USB Cable', price: 12.99, quantity: 10 },
  { id: 6, name: 'Headphones', price: 89.99, quantity: 2 }
];

console.log('Initial Inventory:');
products.forEach(p => console.log(`${p.name}: Qty ${p.quantity}, Price $${p.price}`));

// 1. Print out-of-stock products (quantity === 0)
console.log('\nOut-of-stock products:');
const outOfStock = products.filter(p => p.quantity === 0);
if (outOfStock.length === 0) {
  console.log('No out-of-stock items.');
} else {
  outOfStock.forEach(p => console.log(`${p.name} (ID: ${p.id})`));
}

// 2. Find total inventory value (price × quantity)
const totalValue = products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
console.log(`\nTotal inventory value: $${totalValue.toFixed(2)}`);

// 3. Find product with lowest price
const lowestPriceProduct = products.reduce((prev, current) => 
  prev.price < current.price ? prev : current
);
console.log(`\nProduct with lowest price: ${lowestPriceProduct.name} ($${lowestPriceProduct.price})`);

// 4. Remove products with quantity = 0 (create a new array without them)
const activeProducts = products.filter(p => p.quantity > 0);
console.log('\nInventory after removing out-of-stock items:');
activeProducts.forEach(p => console.log(`${p.name}: Qty ${p.quantity}, Price $${p.price}`));
