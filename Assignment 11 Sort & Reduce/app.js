const products = [
  { id: 1, name: "Laptop", quantity: 1, price: 90000, rating: 4.5 },
  { id: 2, name: "Mouse", quantity: 2, price: 1200, rating: 4.2 },
  { id: 3, name: "Keyboard", quantity: 8, price: 4500, rating: 4.8 },
  { id: 4, name: "Monitor", quantity: 2, price: 35000, rating: 4.3 },
  { id: 5, name: "Headphones", quantity: 5, price: 3000, rating: 4.9 },
  { id: 6, name: "Webcam", quantity: 6, price: 6500, rating: 4.1 }
];

// 1. Sort products by price (low to high).
const sortedPrice = products.sort((a, b) => a.price - b.price);
console.log(sortedPrice);

// 2. Sort products by price (high to low).
const highToLow = products.sort((a,b) => b.price - a.price);
console.log(highToLow);

// 3. Sort products by name (A to Z).

const sortedName = products.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedName);

// 4. Sort products by rating (highest first).
const sortedRating = products.sort((a, b) => b.rating - a.rating);
console.log(sortedRating);

// 5. Sort products by quantity (lowest to highest).

const sortedQuantity = products.sort((a, b) => a.quantity - b.quantity);
console.log(sortedQuantity);

// 6. Find the 3 most expensive products using `sort()` and `slice()`.

const mostExpensive = products.sort((a, b) => b.price - a.price).slice(0, 3);
console.log(mostExpensive);

// 7. Find the 2 cheapest products using `sort()` and `slice()`.

const cheapestProducts = products.sort((a, b) => a.price - b.price).slice(0, 2);
console.log(cheapestProducts);