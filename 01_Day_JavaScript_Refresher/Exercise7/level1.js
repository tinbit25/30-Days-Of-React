// Exercises Level 1
// Create an Animal class. The class will have name, age, color, legs properties and create different methods
// Create a Dog and Cat child class from the Animal Class.

class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    getAnimalProperties() {
        return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`;
    }
}
// Create a Dog class that extends the Animal class
class Dog extends Animal{
    constructor(name,age,color,legs){
        super(name,age,color,legs)}

    dogSound(){
        return 'Woof Woof';
    }
    getAnimalProperties() {
        return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}, Sound: ${this.dogSound()}`;
    }
}
class Cat extends Animal{
    constructor(name,age,color,legs){
        super(name,age,color,legs)}

    catSound(){
        return 'Meow Meow';
    }
}
const dog = new Dog('Doggy', 2, 'Brown', 4);
console.log(dog.getAnimalProperties());

// Override the method you create in Animal class