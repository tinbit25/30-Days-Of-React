// Exercises: Level 3
// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]
// Imagine you are getting the above users collection from a MongoDB database.
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application

// The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product
// b. Create a function called averageRating which calculate the average rating of a product

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like i

//1

// const personAccount = {
//     firstName: "John",
//     lastName: "Doe",
//     incomes: [
//       { description: "Salary", amount: 5000 },
//       { description: "Freelance Work", amount: 2000 },
//     ],
//     expenses: [
//       { description: "Rent", amount: 1500 },
//       { description: "Utilities", amount: 300 },
//     ],
  
//     // Method to calculate total income
//     totalIncome() {
//       return this.incomes.reduce((total, income) => total + income.amount, 0);
//     },
  
//     // Method to calculate total expenses
//     totalExpense() {
//       return this.expenses.reduce((total, expense) => total + expense.amount, 0);
//     },
  
//     // Method to get account information
//     accountInfo() {
//       return `Account Holder: ${this.firstName} ${this.lastName}\nTotal Income: $${this.totalIncome()}\nTotal Expenses: $${this.totalExpense()}`;
//     },
  
//     // Method to add an income
//     addIncome(description, amount) {
//       this.incomes.push({ description, amount });
//     },
  
//     // Method to add an expense
//     addExpense(description, amount) {
//       this.expenses.push({ description, amount });
//     },
  
//     // Method to calculate account balance
//     accountBalance() {
//       return this.totalIncome() - this.totalExpense();
//     },
//   };
  
//   // Example usage
//   console.log(personAccount.accountInfo()); // Display account info
//   console.log("Balance:", personAccount.accountBalance()); // Display balance
//   personAccount.addIncome("Bonus", 1000); // Add income
//   personAccount.addExpense("Groceries", 400); // Add expense
//   console.log("Updated Balance:", personAccount.accountBalance()); // Updated balance
//   console.log(personAccount.accountInfo()); // Updated account info
  



  //2,

//   const signup=(newUser)=>{
//     const userExists=users.find(user=>user.username===newUser.username);
//     if(userExists){
//       return "User already exists";}
//     else{
//   users.push(newUser);}
//     }
//     signup({
//         _id: 'ghderc',
//         username: 'Th',
//         name: 'thomas@th.com',
//         password: '123333',
//         createdAt: '08/01/2020 10:00 AM',
//         isLoggedIn: false,
//       },
//     )
// console.log(users);    

// const signIn=(newUser)=>{
//     const userExists=users.find(user=>user.username===newUser.username);
//     if(userExists){
     
//       console.log("you signIn"); }
//     else{
//         console.log("not exist");}
//     }
//     signIn({
//         username: 'Thomas',
//         name: 'thomas@th.com',
//         password: '123333',
//       },
//     )
// console.log(users);


//3 4

// const rateProduct = (productId, userId, rate) => {
//     const product = products.find((product) => product._id === productId);
  
//     if (!product) {
//       return 'Product not found';
//     }
  
//     product.ratings.push({ userId, rate });
//     return 'Rating added successfully';
//   };
  

//   console.log(rateProduct('eedfcf', '123456', 5)); 
//   console.log(products); 
// const averageRating = (productId) => {
//     const product=products.find(product=>product._id===productId);
//     if(!product){
//         return "product not found";
//     }
//     else{
//         const totalRating=product.ratings.reduce((total, rating)=>total+rating.rate, 0);
//         return totalRating/product.ratings.length;
//     }
// } 
const likeProduct = (productId) => {
    const product = products.find((product) => productId === product._id);
    if (product) {
        
        product.likes = product.likes || [];

        if (product.likes.length>0) {
            product.likes.pop(); // Remove the like
        } else {
            product.likes.push("like"); // Add a like
        }
    } else {
        console.log("Product not found");
    }
};

likeProduct("eedfcf");
console.log(products);
