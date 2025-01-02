const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
  }
  
const getPersonInfo=(person)=>{
    const {firstName, lastName, age, country, job, skills, languages} = person;
    console.log(`${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${skills} programming languages. He speaks ${languages} languages.`)
}    
getPersonInfo(person)
for(let key in person){
    console.log(key, person[key])
}