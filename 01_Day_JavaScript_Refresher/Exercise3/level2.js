
// // Find the person who has many skills in the users object.

// // Count logged in users,count users having greater than equal to 50 points from the following object.

// // const users = {
// //   Alex: {
// //     email: 'alex@alex.com',
// //     skills: ['HTML', 'CSS', 'JavaScript'],
// //     age: 20,
// //     isLoggedIn: false,
// //     points: 30
// //   },
// //   Asab: {
// //     email: 'asab@asab.com',
// //     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
// //     age: 25,
// //     isLoggedIn: false,
// //     points: 50
// //   },
// //   Brook: {
// //     email: 'daniel@daniel.com',
// //     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
// //     age: 30,
// //     isLoggedIn: true,
// //     points: 50
// //   },
// //   Daniel: {
// //     email: 'daniel@alex.com',
// //     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
// //     age: 20,
// //     isLoggedIn: false,
// //     points: 40
// //   },
// //   John: {
// //     email: 'john@john.com',
// //     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
// //     age: 20,
// //     isLoggedIn: true,
// //     points: 50
// //   },
// //   Thomas: {
// //     email: 'thomas@thomas.com',
// //     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
// //     age: 20,
// //     isLoggedIn: false,
// //     points: 40
// //   },
// //   Paul: {
// //     email: 'paul@paul.com',
// //     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
// //     age: 20,
// //     isLoggedIn: false,
// //     points: 40
// //   }
// // }```

// // Find people who are MERN stack developer from the users object

// // Set your name in the users object without modifying the original users object

// // Get all keys or properties of users object

// // Get all the values of users object

// // Use the countries object to print a country name, capital, populations and languages.


  


// // 1. Find the person who has the most skills in the users object

// const users = {
//   Alex: { email: 'alex@alex.com', skills: ['HTML', 'CSS', 'JavaScript'], age: 20, isLoggedIn: false, points: 30 },
//   Asab: { email: 'asab@asab.com', skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'], age: 25, isLoggedIn: false, points: 50 },
//   Brook: { email: 'daniel@daniel.com', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'], age: 30, isLoggedIn: true, points: 50 },
//   Daniel: { email: 'daniel@alex.com', skills: ['HTML', 'CSS', 'JavaScript', 'Python'], age: 20, isLoggedIn: false, points: 40 },
//   John: { email: 'john@john.com', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'], age: 20, isLoggedIn: true, points: 50 },
//   Thomas: { email: 'thomas@thomas.com', skills: ['HTML', 'CSS', 'JavaScript', 'React'], age: 20, isLoggedIn: false, points: 40 },
//   Paul: { email: 'paul@paul.com', skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'], age: 20, isLoggedIn: false, points: 40 }
// };

// // Find the person with the most skills
// let mostSkilledPerson = '';
// let maxSkills = 0;

// for (const user in users) {
//   if (users[user].skills.length > maxSkills) {
//     mostSkilledPerson = user;
//     maxSkills = users[user].skills.length;
//   }
// }

// console.log('Person with most skills:', mostSkilledPerson);
// // 2. Count logged-in users and users with ≥50 points

// let loggedInCount = 0;
// let highPointCount = 0;

// for (const user in users) {
//   if (users[user].isLoggedIn) loggedInCount++;
//   if (users[user].points >= 50) highPointCount++;
// }

// console.log('Logged in users:', loggedInCount);
// console.log('Users with >= 50 points:', highPointCount);
// // 3. Find MERN stack developers

// const mernStackDevelopers = [];

// for (const user in users) {
//   const skills = users[user].skills;
//   if (skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node')) {
//     mernStackDevelopers.push(user);
//   }
// }


// // 4. Add your name to the users object without modifying the original

// const updatedUsers = { ...users, Tinbite: { email: 'tinbite@tinbite.com', skills: ['HTML', 'CSS', 'JavaScript', 'React'], age: 21, isLoggedIn: true, points: 60 } };
// console.log(updatedUsers);

// // 5. Get all keys and values of the users object

// // Get all keys
// const userKeys = Object.keys(users);
// console.log('Keys:', userKeys);

// // Get all values
// const userValues = Object.values(users);
// console.log('Values:', userValues);


// // 6. Use the countries object to print country name, capital, population, and languages
// // Example countries object:

const countries = {
  Ethiopia: { capital: 'Addis Ababa', population: 120_000_000, languages: ['Amharic'] },
  Kenya: { capital: 'Nairobi', population: 53_000_000, languages: ['Swahili', 'English'] },
};

for (const country in countries) {
  const { capital, population, languages } = countries[country];
  console.log(`Country: ${country}, Capital: ${capital}, Population: ${population}, Languages: ${languages.join(', ')}`);
}