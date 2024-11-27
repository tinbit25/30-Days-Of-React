// ##### Exercises: Level 3









// 1. Create an object literal called _personAccount_. It has _firstName, lastName, incomes, expenses_ properties and it has _totalIncome, totalExpense, accountInfo,addIncome, addExpense_ and _accountBalance_ methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
    firstName: "John",
    lastName: "Doe",
    incomes: [
      { description: "Salary", amount: 5000 },
      { description: "Freelance", amount: 1500 },
    ],
    expenses: [
      { description: "Rent", amount: 1200 },
      { description: "Groceries", amount: 400 },
    ],
    
    
    totalIncome() {
      return this.incomes.reduce((total, income) => total + income.amount, 0);
    },
    
    
    totalExpense() {
      return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },
    
   
    accountInfo() {
      return `Name: ${this.firstName} ${this.lastName}, Total Income: ${this.totalIncome()}, Total Expenses: ${this.totalExpense()}`;
    },
    
   
    addIncome(description, amount) {
      this.incomes.push({ description, amount });
    },
    
   
    addExpense(description, amount) {
      this.expenses.push({ description, amount });
    },
    
   
    accountBalance() {
      return this.totalIncome() - this.totalExpense();
    },
  };
  
 
  console.log(personAccount.accountInfo()); 
  personAccount.addIncome("Stock Dividends", 200);
  personAccount.addExpense("Utilities", 300);
  console.log("Total Income:", personAccount.totalIncome()); 
  console.log("Total Expense:", personAccount.totalExpense()); 
  console.log("Account Balance:", personAccount.accountBalance()); 
  

  
const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    name: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    name: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    name: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    name: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    name: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]
// 2. \*\*\*\* Questions:2, 3 and 4 are based on the following two arrays:users and products ()

// Imagine you are getting the above users collection from a MongoDB database.
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.  
const signUp=(newUser)=>{
    const userExists= users.find(user=>user.name===newUser.name)
    if(userExists)
    console.log("the user exist")
else
{
    const addUser={
        ...newUser,

    }
    users.push(addUser)
}
    
}
signUp({
    _id: 'ghderc',
    username: 'Thomas',
    name: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
)
  console.log(users)  
  //  b. Create a function called signIn which allows user to sign in to the application
  const signIn=(newUser)=>{
    const userExists= users.find(user=>user.name===newUser.name)
    if(userExists)
    console.log("wellcome")
else
{
    console.log("not found")

}
    
}
signIn({
    _id: 'ghderc',
    username: 'Thomas',
    name: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
)
   

// 3. The products array has three elements and each of them has six properties.
//    a. Create a function called rateProduct which rates the product
//    b. Create a function called averageRating which calculate the average rating of a product

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


// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
