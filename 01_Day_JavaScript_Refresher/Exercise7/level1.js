// Exercises Level 1
// Create an Animal class. The class will have name, age, color, legs properties and create different methods
// Create a Dog and Cat child class from the Animal Class.

class Person {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
  const person1 = new Person('Asabeneh', 'Yetayeh')
  const person2 = new Person('Lidiya', 'Tekle')
  const person3 = new Person('Abraham', 'Yetayeh')
  
  console.log(person1)
  console.log(person2)
  console.log(person3)