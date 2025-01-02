// Exercises: Level 1
// Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.

// Declare a function addNumbers and it takes two two parameters and it returns sum.

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(5, 3));  

function areaOfCircle(radius) {
    const pi = Math.PI;
    return pi * radius * radius;
}
console.log(areaOfCircle(5));  

function checkSeason(month) {
    if (month === "December" || month === "January" || month === "February") {
        return "Winter";
    } else if (month === "March" || month === "April" || month === "May") {
        return "Spring";
    } else if (month === "June" || month === "July" || month === "August") {
        return "Summer";
    } else if (month === "September" || month === "October" || month === "November") {
        return "Autumn";
    } else {
        return "Invalid month";
    }
}
console.log(checkSeason("January"));  
console.log(checkSeason("July"));     