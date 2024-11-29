// countries=require("./countries")
// webTechs=require("./webTechs")
// console.log(webTechs)
// console.log(countries)

const countries = require("./countries")
const webTechs = require("./webTechs")

 

// let joined=countries.join('", "')
// console.log(joined)
// console.log(joined.length)

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

// Concatenate the following two variables and store it in a fullStack variable.



const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('meat')
shoppingCart.push('meat')
shoppingCart.pop()
shoppingCart.splice(3,1,'green tea')

console.log(shoppingCart)

if(countries.includes('Ethiopia')){
    console.log("Erhiopia")
}
else{
    countries.push('Ethiopia')
}
if(webTechs.includes('Sass')){
    console.log("Sass  is css property")
}
else{
   webTechs.push('Sass')
}
console.log(webTechs)


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack=frontEnd.concat(backEnd)
console.log(fullStack)


