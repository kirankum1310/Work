//Rule book
type Item = {
    id: number;
    name: string;
    stock: number;
    reorderLevel: number;
};

//Sample data
let inventory: Item[] = [
    { id: 101, name: "Laptop", stock: 50, reorderLevel: 20 },
    { id: 102, name: "Mouse", stock: 150, reorderLevel: 146 },
    { id: 103, name: "Keyboard", stock: 80, reorderLevel: 50 },
    { id: 104, name: "Monitor", stock: 30, reorderLevel: 33 }
];

//Total stock
let totalStock = inventory.reduce((sum, item) => sum + item.stock, 0);

//Low stock alert
let lowStockItems = inventory.filter(i => i.stock < i.reorderLevel);

//Output
console.log("Total Stock:", totalStock);
console.log("\n⚠️ Low Stock Items:", lowStockItems);

