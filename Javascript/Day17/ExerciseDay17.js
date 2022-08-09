// localStorage.setItem('firstName', 'Asabehne')
// localStorage.setItem('age', 200)
// console.log(localStorage);

// const skills = ['HTML', 'CSS', 'JavaScript', 'React']
// const skillsJSON = JSON.stringify(skills)
// localStorage.setItem('skills', skillsJSON)
// console.log(localStorage);

// let skills = [
//     { tech: 'HTML', level: 10 },    
//     { tech: 'CSS', level: 9 },
//     { tech: 'JS', level: 8 },
//     { tech: 'React', level: 9 },
//     { tech: 'Redux', level: 10 },
//     { tech: 'Node', level: 8 },
//     { tech: 'MongoDB', level: 8 }    
// ]
// let skillsJSON = JSON.stringify(skills)
// console.log(skillsJSON);
// localStorage.setItem('skills', skillsJSON)
// console.log(localStorage);

// let user = {
//     firstName: 'Asabehne',
//     age: 250,
//     skills: ['HTML', 'CSS', 'JS', 'React']
// }
// const userText = JSON.stringify(user)
// localStorage.setItem('user', userText)
// console.log(localStorage);

// let firstName = localStorage.getItem('firstName')
// let age = localStorage.getItem('age')
// let skills = localStorage.getItem('skills')
// console.log(firstName, age, skills);

// let skills = localStorage.getItem('skills')
// let skillsObj = JSON.parse(skills)
// console.log(skillsObj);

// ============================================================================================
// ============================================================================================
//                                          LV1
// ============================================================================================
// ============================================================================================

// ============================================================================================
// EX1: Store you first name, last name, age, country, city in your browser localStorage.
// ============================================================================================

// let firstName = 'Nguyen'
// let lastName = 'Thien An'
// let age = 20
// let country = 'Viet Nam'
// let city = 'Ha Noi'
// localStorage.setItem('firstName', firstName)
// localStorage.setItem('lastName', lastName)
// localStorage.setItem('age', age)
// localStorage.setItem('country', country)
// localStorage.setItem('city', city)
// console.log(localStorage);


// ============================================================================================
// EX2: Create a student object. The student object will have first name, last name, age, 
// skills, country, enrolled keys and values for the keys. Store the student object in your 
// browser localStorage.
// ============================================================================================

// const student = {
//     firstName: 'Nguyen',
//     lastName: 'Thien An',
//     age: 20,
//     skills: ['HTML', 'CSS', 'JS', 'React'],
//     country: 'Viet Nam',
//     enrolledKeys: ['Node', 'MongoDB'],
//     value: 1000000
// }
// const objToStr = JSON.stringify(student, ['firstName', 'lastName', 'age', 'skills', 'country', 'enrolledKeys', 'value'])
// localStorage.setItem('student', objToStr)
// console.log(localStorage);
