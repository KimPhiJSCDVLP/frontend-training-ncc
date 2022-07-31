// Set data to strorages (string)
localStorage.setItem('name','Thuan ANh');
// console.log(localStorage);

// storing number 
localStorage.setItem('age', 23)
// console.log(localStorage); //Storage {age: '23', name: 'Thuan ANh', length: 2}
// storing array
const skills = ['HTML','CSS','PHP']
const skillsJson = JSON.stringify(skills,undefined,4)
localStorage.setItem('skill',skillsJson);
// console.log(localStorage);

// stroring Object 
const user = {
    firstName: 'Hahahaha',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React']
  }
  
  const userText = JSON.stringify(user, undefined, 4)
  localStorage.setItem('user', userText)
 /// get Item
 let name = localStorage.getItem('name');
 console.log(name);
 localStorage.clear()

