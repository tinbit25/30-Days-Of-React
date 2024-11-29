// Level 2
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let grade = 93;

switch (true) {
    case grade >= 90:
        console.log("A");
        break;
    case grade >= 80:
        console.log("B");
        break;
    case grade < 70:
        console.log("F");
        break;
    default:
        console.log("nothing");
}

// Check if the season is Autumn, Winter, Spring or Summer.
// If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
// const readline = require('readline');

// const seasons = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// seasons.question('Enter your season: ', (season) => {
//     if (season==="septemnr||October||November") {
//         console.log('AUtomn');}
//     else if (season==="jan"||"june"||"fev") {
//             console.log('AUtomn');
//     } else if(season==="apr||mmY||Mrch") {
//         console.log('spring');
//     }
//     else{
// console.log("nothing")
//     }
//     seasons.close(); 
// });
// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
const readline = require('readline');

const days = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

days.question('Enter day: ', (day) => {
    if (day==="sat"||"sun") {
        console.log('it is weekend');}
    else{
console.log("it is weekend")
    }
    days.close(); 
});