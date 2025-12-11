// Complex Array Example: E-Commerce Order Processing

type Order = {
  orderId: number;
  customer: string;
  items: { product: string; price: number; qty: number }[];
};

let orders: Order[] = [
  { orderId: 101, customer: "Alice", items: [{ product: "Laptop", price: 800, qty: 1 }, { product: "Mouse", price: 20, qty: 2 }] },
  { orderId: 102, customer: "Bob", items: [{ product: "Phone", price: 600, qty: 1 }, { product: "Charger", price: 25, qty: 1 }] },
  { orderId: 103, customer: "Charlie", items: [{ product: "Headphones", price: 50, qty: 2 }, { product: "Keyboard", price: 45, qty: 1 }] }
];

// Calculate total for each order
let orderTotals = orders.map(order => {
  let total = order.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  return { orderId: order.orderId, customer: order.customer, total };
});

// Find biggest order
let highestOrder = orderTotals.reduce((max, o) => (o.total > max.total ? o : max), orderTotals[0]!);

console.log("=== Orders Totals ===");
console.table(orderTotals);

console.log("\nHighest Order:", highestOrder);