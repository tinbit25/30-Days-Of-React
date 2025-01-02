// Exercises: Level 3
// Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
// Write a function generateColors which can generate any number of hexa or rgb colors.

// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
// Exercises: Level 3
const userIdGeneratedByUser=()=>{
    let numberOfCharacters=parseInt(prompt('Enter number of characters: '))
    let numberOfIds=parseInt(prompt('Enter number of ids: '))
    let result=''
    for(let i=0;i<numberOfIds;i++){
        let id=''
        for(let j=0;j<numberOfCharacters;j++){
            let randomChar=String.fromCharCode(Math.floor(Math.random()*25)+65)
            id+=randomChar
        }
        result+=id+'\n'
    }
    return result
}

const generateColors=(type,numberOfColors)=>{
    let result=[]
    if(type==='hexa'){
        for(let i=0;i<numberOfColors;i++){
            let color='#'
            for(let j=0;j<6;j++){
                let randomChar=Math.floor(Math.random()*16).toString(16)
                color+=randomChar
            }
            result.push(color)
        }}else if(type==='rgb'){
            for(let i=0;i<numberOfColors;i++){
                let color='rgb('
                for(let j=0;j<3;j++){
                    let randomNum=Math.floor(Math.random()*256)
                    color+=randomNum
                    if(j<2){
                        color+=', '
                    }else{
                        color+=')'
                    }
                }
                result.push(color)
            }
        }}

const shuffleArray=(arr)=>{
    let result=[]
    let arrCopy=[...arr]
    while(arrCopy.length>0){
        let randomChar=arrCopy[Math.floor(Math.random()*arrCopy.length)]
        result.push(randomChar)
        arrCopy.splice(arrCopy.indexOf(randomChar),1)


    }
}        
const factorial=(num)=>{
    let result=1
    for(let i=1;i<=num;i++){
        result*=i
    }
    return result
}