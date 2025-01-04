// Exercises
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]
// Print the price of each product using forEach

// Print the product items as follows using forEach

// The price of banana is 3 euros.
// The price of mango is 6 euros.
// The price of potato is unknown.
// The price of avocado is 8 euros.
// The price of coffee is 10 euros.
// The price of tea is unknown.
// Calculate the sum of all the prices using forEach

// Create an array of prices using map and store it in a variable prices

// Filter products with prices

// Use method chaining to get the sum of the prices(map, filter, reduce)

// Calculate the sum of all the prices using reduce only

// Find the first product which doesn't have a price value

// Find the index of the first product which does not have price value

// Check if some products do not have a price value

// Check if all the products have price value

// Explain the difference between forEach, map, filter and reduce

// Explain the difference between filter, find and findIndex

// Explain the difference between some and every

const products = [
      { product: 'banana', price: 3 },
      { product: 'mango', price: 6 },
      { product: 'potato', price: ' ' },
      { product: 'avocado', price: 8 },
      { product: 'coffee', price: 10 },
      { product: 'tea', price: '' },
    ]
    //1
    const price=products.forEach(product=>product.price?console.log(product.price):console.log('unknown'))
    //2
    products.forEach(product=>product.price?console.log(`The price of ${product.product} is ${product.price} euros.`):console.log(`The price of ${product.product} is unknown.`))
    //3 
    let totalPrice = 0;
products.forEach(product => {
    if (typeof product.price === 'number' && !isNaN(product.price)) {
        totalPrice += product.price;
    }
});

console.log("Total Price:", totalPrice); 
    //4// Create an array of prices using map and store it in a variable prices
   
let prices = products.map(product => product.price);
console.log("Prices:", prices);
//5  Filter products with prices
let prices1 = products.filter(product => product.price);
console.log("Prices1:", prices1);
//6// Use method chaining to get the sum of the prices(map, filter, reduce)
let sum=products.filter(product => typeof product.price === 'number' && !isNaN(product.price)) 
.map(product => product.price)
.reduce((acc, price) => acc + price, 0); 

console.log("Sum:", sum);
//7 Calculate the sum of all the prices using reduce only
let sum2 = products.reduce((acc, product) => {
    if (typeof product.price === 'number' && !isNaN(product.price)) {
        return acc + product.price;
    }
    return acc; 
}, 0); 

console.log("Sum2:", sum2); 
//8 Find the first product which doesn't have a price value
let product=products.find(product=>!product.price)
console.log("Product:", product);
//9 Find the index of the first product which does not have price value
let index=products.findIndex(product=>!product.price)
console.log("Index:", index);
//10 Check if some products do not have a price value
let some=products.some(product=>!product.price)
console.log("Some:", some);
//11 Check if all the products have price value
let every=products.every(product=>product.price)
console.log("Every:", every);


