// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}
// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

// showDateTime()
// 08/01/2020 04:08
// Declare a function name swapValues. This function swaps value of x to y.

// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']
// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an ite

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
// Write a function which takes any number of arguments and return the sum of the arguments
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// console.log(userIdGenerator());
// 41X




// 1. Solve Quadratic Equation
// javascript
// Copy code
// function solveQuadratic(a = 1, b = 0, c = 0) {
//     const discriminant = b * b - 4 * a * c;
//     if (discriminant > 0) {
//         const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         return [root1, root2];
//     } else if (discriminant === 0) {
//         const root = -b / (2 * a);
//         return [root];
//     } else {
//         return [];
//     }
// }

// console.log(solveQuadratic());           // {0}
// console.log(solveQuadratic(1, 4, 4));    // {-2}
// console.log(solveQuadratic(1, -1, -2));  // {2, -1}
// console.log(solveQuadratic(1, 7, 12));   // {-3, -4}
// console.log(solveQuadratic(1, 0, -4));   // {2, -2}
// console.log(solveQuadratic(1, -1, 0));   // {1, 0}
// 2. Print Array
// javascript
// Copy code
// function printArray(arr) {
//     arr.forEach((value) => console.log(value));
// }

// printArray([1, 2, 3, 4]);  // Prints each value in the array
// 3. Show Date and Time
// javascript
// Copy code
// function showDateTime() {
//     const date = new Date();
//     const formattedDate = date.toLocaleString('en-US', { 
//         hour12: false, 
//         day: '2-digit', 
//         month: '2-digit', 
//         year: 'numeric', 
//         hour: '2-digit', 
//         minute: '2-digit' 
//     });
//     console.log(formattedDate);  // 08/01/2020 04:08
// }

// showDateTime();
// 4. Swap Values
// javascript
// Copy code
// function swapValues(x, y) {
//     console.log(`x => ${y}, y => ${x}`);
// }

// swapValues(3, 4);  // Output: x => 4, y => 3
// swapValues(4, 5);  // Output: x => 5, y => 4
// 5. Reverse Array
// javascript
// Copy code
// function reverseArray(arr) {
//     let reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }

// console.log(reverseArray([1, 2, 3, 4, 5]));   // [5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']));    // ['C', 'B', 'A']
// 6. Capitalize Array
// javascript
// Copy code
// function capitalizeArray(arr) {
//     return arr.map((item) => item.toUpperCase());
// }

// console.log(capitalizeArray(['a', 'b', 'c']));  // ['A', 'B', 'C']
// 7. Add Item to Array
// javascript
// Copy code
// function addItem(arr, item) {
//     arr.push(item);
//     return arr;
// }

// console.log(addItem([1, 2, 3], 4));  // [1, 2, 3, 4]
// 8. Remove Item from Array
// javascript
// Copy code
// function removeItem(arr, index) {
//     arr.splice(index, 1);
//     return arr;
// }

// console.log(removeItem([1, 2, 3, 4], 2));  // [1, 2, 4]
// 9. Evens and Odds
// javascript
// Copy code
// function evensAndOdds(num) {
//     let evens = 0;
//     let odds = 0;
//     for (let i = 0; i <= num; i++) {
//         if (i % 2 === 0) {
//             evens++;
//         } else {
//             odds++;
//         }
//     }
//     console.log(`The number of evens are ${evens}.`);
//     console.log(`The number of odds are ${odds}.`);
// }

// evensAndOdds(100);  // The number of evens are 51. The number of odds are 50.
// 10. Sum of Arguments
// javascript
// Copy code
// function sum(...args) {
//     return args.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3));    // 6
// console.log(sum(1, 2, 3, 4)); // 10
// 11. User ID Generator
// javascript
// Copy code
// function userIdGenerator() {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let id = '';
//     for (let i = 0; i < 7; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         id += characters[randomIndex];
//     }
//     return id;
// }

// console.log(userIdGenerator());  // Example output: 41X7F1J
// Summary:
// Solve Quadratic: Solves a quadratic equation.
// Print Array: Prints each value of the array.
// Show DateTime: Displays the current date and time.
// Swap Values: Swaps values between x and y.
// Reverse Array: Returns the reversed array.
// Capitalize Array: Returns the array with capitalized values.
// Add Item: Adds an item to an array.
// Remove Item: Removes an item from an array by index.
// Evens and Odds: Counts and displays the number of even and odd numbers up to a given number.
// Sum Arguments: Returns the sum of any number of arguments.
// User ID Generator: Generates a random 7-character user ID.
// These functions cover the tasks in the exercise and handle a variety of operations in JavaScript.













Ch