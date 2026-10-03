
// Add 10 to each number

// const numbers = [5, 10, 15, 20];
// const numberAdd = numbers.map(num => num + 10);
// console.log(numberAdd);

// ===============================================
// Double the numbers

// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers);

// ===============================================
// Convert names to uppercase

// const names = ["ali", "sara", "ahmed"];

// const upperCaseNames = names.map(name => name.toUpperCase());
// console.log(upperCaseNames);

// ===============================================
// Get even numbers

// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// ===============================================
// Get numbers greater than 10

// const numbers = [5, 12, 8, 20, 3, 15];
// const numbersGreaterThan = numbers.filter(num => num > 10);
// console.log(numbersGreaterThan);

// ===============================================
// Get names longer than 4 characters

// const names = ["Ali", "Ahmed", "Sara", "Usman", "John"];
// const namesLongerThan = names.filter(name => name.length > 4);
// console.log(namesLongerThan);

// ===============================================
// First filter numbers greater than 5, then map them to double:

// const numbers = [2, 6, 8, 3, 10];
// const filteredAndDoubled = numbers.filter(num => num > 5).map(num => num * 2);
// console.log(filteredAndDoubled);

const products = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Mobile",
    price: 250000,
    stock: 10,
    brand: "Apple",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Galaxy S24",
    category: "Mobile",
    price: 220000,
    stock: 0,
    brand: "Samsung",
    rating: 4.6,
  },
  {
    id: 3,
    name: "MacBook Air M3",
    category: "Laptop",
    price: 350000,
    stock: 5,
    brand: "Apple",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Dell XPS 13",
    category: "Laptop",
    price: 280000,
    stock: 3,
    brand: "Dell",
    rating: 4.5,
  },
  {
    id: 5,
    name: "AirPods Pro",
    category: "Accessories",
    price: 65000,
    stock: 15,
    brand: "Apple",
    rating: 4.7,
  },
  {
    id: 6,
    name: "Galaxy Buds",
    category: "Accessories",
    price: 35000,
    stock: 0,
    brand: "Samsung",
    rating: 4.3,
  },
  {
    id: 7,
    name: "HP Pavilion",
    category: "Laptop",
    price: 180000,
    stock: 7,
    brand: "HP",
    rating: 4.2,
  },
  {
    id: 8,
    name: "Samsung A55",
    category: "Mobile",
    price: 120000,
    stock: 12,
    brand: "Samsung",
    rating: 4.4,
  },
];

// =======================================
// 1. Product Names — `map()`
// 1) Create a new array containing only product names.

// const productNames = products.map(product => product.name);
// console.log(productNames);

// =======================================
// 2) Create a new array containing only the product prices.

// const productPrices = products.map(product => product.price);
// console.log(productPrices);

// =======================================
// Formatted Products — map()
// 3) Return each product in this format:

// const formattedProducts = products.map(product => (`${product.name} - Rs.${product.price}`));
// console.log(formattedProducts);

// ======================================
// Create a new array of product objects and add a `discountedPrice` property with a **10% discount**.
// Do **not** modify the original objects.

// const discountedProducts = products.map(product => ({
//   ...product,
//   discountedPrice:product.price * 0.9
// }));
// console.table(discountedProducts);
// console.log(discountedProducts);

// console.log(products); // Original array

// ======================================
// Available Products — `filter()`
// Return only products where: stock > 0

// const availableProducts = products.filter(product => product.stock > 0).map(product =>product.name);
// console.log(availableProducts);

// ======================================
// Return only products whose category is: "Mobile"

// const mobileProducts = products.filter(product => product.category === "Mobile").map(product => product.name);
// console.log(mobileProducts);

// ======================================
// Return products costing more than: 200000
// const expensiveProducts = products.filter(product => product.price > 200000).map (product => product.name);
// console.log(expensiveProducts);

// ======================================
// Return products with a rating of 4.5 or higher

// const highlyRatedProducts = products.filter(product => product.rating >= 4.5).map(product => product.name);
// console.log(highlyRatedProducts);

// ======================================
// Return only products from: "Apple" brand
// const appleProducts = products.filter(product => product.brand === "Apple").map(product => product.name);
// console.log(appleProducts);

// ======================================
// Find products that satisfy both conditions: price < 200000 AND stock > 0

// const affordableAvailableProducts = products.filter(product => product.price < 200000 && product.stock > 0).map (product => product.name);
// console.log(affordableAvailableProducts);

// ======================================
// Find all laptops that are in stock and return only their names.

// const availableLaptops = products.filter(product => product.category === "Laptop" && product.stock > 0).map(product => product.name);
// console.log(availableLaptops);

// ======================================
// First find Apple products, then give them a 15% discount.

// const discountedAppleProducts = products.filter(product => product.brand === "Apple")
//   .map(product => ({
//     name: product.name,
//     discountedPrice: product.price * 0.85
//   }));

// console.log(discountedAppleProducts);

// ======================================
// Find all mobiles that are in stock, then return: Product Name - Rs. Price

// const availableMobileProducts = products.filter (product => product.category === "Mobile" && product.stock >0)
// .map(product => `${product.name} - Rs.${product.price}`);
// console.log(availableMobileProducts);

// ======================================
// Find products that meet all three conditions: stock > 0 rating >= 4.5 price < 300000

const filterProducts =products.filter(product => product.stock > 0 && product.rating >= 4.5 && product.price < 300000).map(product => ({
  name: product.name,
  price: product.price
}));
console.log(filterProducts);