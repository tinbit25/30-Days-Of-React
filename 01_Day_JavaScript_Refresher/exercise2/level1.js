// ##### Exercises: Level 1

// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

//    ```sh
//    Enter your age: 30
//    You are old enough to drive.

//    Enter your age:15
//    You are left with 3 years to drive.
//    ```

const readline = require('readline');

const ages = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ages.question('Enter your age: ', (age) => {
    if (parseInt(age) > 18) {
        console.log('You can drive');
    } else {
        console.log('You cannot drive');
    }
    ages.close(); 
});

// 1. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

//    ```sh
//    Enter your age: 30
//    You are 5 years older than me.
//    ```

// 1. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways

//    - using if else
//    - ternary operator.

//    ```js
//    let a = 4
//    let b = 3
//    ```

//    ```sh
//      4 is greater than 3
//    ```

// 1. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

//    ```sh
//    Enter a number: 2
//    2 is an even number

//    Enter a number: 9
//    9 is is an odd number.
//    ```
