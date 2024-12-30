// Create an empty object called dog
const dog = {};

// Print the dog object on the console
console.log(dog);

// Add properties to the dog object
dog.name = "Buddy";
dog.legs = 4;
dog.color = "Brown";
dog.age = 3;
dog.bark = function() {
  return "woof woof";
};

// Get values of the properties from the dog object
console.log(dog.name);    // Buddy
console.log(dog.legs);    // 4
console.log(dog.color);   // Brown
console.log(dog.age);     // 3
console.log(dog.bark());  // woof woof

// Set new properties to the dog object
dog.breed = "Labrador";
dog.getDogInfo = function() {
  return `Name: ${this.name}, Legs: ${this.legs}, Color: ${this.color}, Age: ${this.age}, Breed: ${this.breed}`;
};

// Print the dog object with new properties
console.log(dog.getDogInfo());
