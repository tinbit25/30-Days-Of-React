// <!-- const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
//   ]
  
//   const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB',
//   ]
//   ```
  
//   1. Declare an _empty_ array;
let arr=[]
//   2. Declare an array with more than 5 number of elements
let arrays=['hi',3,"good",87,21,"def"]

//   3. Find the length of your array
let length=arrays.length
console.log(length)

//   4. Get the first item, the middle item and the last item of the array

let first=arrays[0]
console.log(first)
let last=arrays[length-1]
console.log(last)
let mid=(length+0)/2
let middle=arrays[mid]
console.log(middle)

//5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should be greater than 5
let _mixedDataTypes_=[
    "hi",
    345,
    'def',
    21,
    32,
]
console.log(_mixedDataTypes_.length)

//   6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//   7. Print the array using _console.log()_
for(let i=0;i<itCompanies.length;i++){
    console.log(itCompanies[i])
}
//   8. Print the number of companies in the array
console.log(itCompanies.length)

//   9. Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[itCompanies.length-1])
console.log(itCompanies[(itCompanies.length-1+0)/2])


//   10. Print out each company
itCompanies.forEach(company=>{
    console.log(company)
})
//   11. Change each company name to uppercase one by one and print them out
itCompanies.forEach(compay=>{    
    console.log(compay.toUpperCase())

})
//   12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
  
    console.log(itCompanies.join())



//   13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
function checkcompany(company){
    if (itCompanies.includes(company)){
        return company
    }
    else{
        return "_not found_"
    }
}
console.log(checkcompany('Amazon'))
console.log(checkcompany('true'))
//   14. Filter out companies which have more than one 'o' without the filter method
for(let i=0;i<itCompanies.length;i++){
    company=itCompanies[i]
    company.split('o')
}
//   15. Sort the array using _sort()_ method
console.log(itCompanies.sort())

//   16. Reverse the array using _reverse()_ method
console.log(itCompanies.reverse())

//   17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3))

//   18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(-4,-1))

//   19. Slice out the middle IT company or companies from the array
let middl=itCompanies.length/2
console.log(itCompanies.slice(middl))

//   20. Remove the first IT company from the array
console.log(itCompanies.shift())

//   21. Remove the middle IT company or companies from the array
console.log(itCompanies.splice(middl, 1))


//   22. Remove the last IT company from the array
console.log(itCompanies.pop())

//   23. Remove all IT companies -->
console.log(itCompanies.splice())



