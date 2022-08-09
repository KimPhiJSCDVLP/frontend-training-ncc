// const usersText = `{
//     "users": [
//         {
//             "firstName":"Asabehne",
//             "lastName":"Yetayeh",
//             "age":250,
//             "email":"asab@gmail.com"
//         },
//         {
//             "firstName":"Alex",
//             "lastName":"James",
//             "age":25,
//             "email":"alex@alex.com"
//         },
//         {
//           "firstName":"Lidiya",
//           "lastName":"Tekle",
//           "age":28,
//           "email":"lidiya@lidiya.com"
//         }
//     ]
// }`

// const usersObj = JSON.parse(usersText, (key, value) => {
//     let newVal = 
//     typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
//     return newVal
// })
// console.log(usersObj);

// const users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: [
//         'HTML',
//         'CSS',
//         'JavaScript',
//         'Redux',
//         'MongoDB',
//         'Express',
//         'React',
//         'Node'
//       ],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: [
//         'HTML',
//         'CSS',
//         'JavaScript',
//         'MongoDB',
//         'Express',
//         'React',
//         'Node'
//       ],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
//   }
//   const txt = JSON.stringify(users)
//   console.log(txt);

// const users = {
//     firstName: 'Asabehne',
//     lastName: 'Yetahye',
//     country: 'Finland',
//     city: 'Helsinki',
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
//     age: 250,
//     isLoggedIn: false,
//     points: 30
// }
// const txt = JSON.stringify(users, ['firstName', 'lastName', 'country', 'city', 'isLoggedIn'], 10)
// console.log(txt);


// =========================================================================================================
// =========================================================================================================
// EXERCISES
// =========================================================================================================
// =========================================================================================================

// const txt = `{
//     "Alex": {
//         "email": "alex@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 30
//     },
//     "Asab": {
//         "email": "asab@asab.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Redux",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 25,
//         "isLoggedIn": false,
//         "points": 50
//     },
//     "Brook": {
//         "email": "daniel@daniel.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux"
//         ],
//         "age": 30,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Daniel": {
//         "email": "daniel@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Python"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "John": {
//         "email": "john@john.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux",
//             "Node.js"
//         ],
//         "age": 20,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Thomas": {
//         "email": "thomas@thomas.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "Paul": {
//         "email": "paul@paul.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     }
// }
// `
// =========================================================================================================
// =========================================================================================================
//                                                LV1
// =========================================================================================================
// =========================================================================================================

// =========================================================================================================
// EX1: Change skills array to JSON using JSON.stringify()
// =========================================================================================================
// const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']

// const convert = JSON.stringify(skills)
// console.log(convert);

// =========================================================================================================
// EX2: Stringify the age variable
// =========================================================================================================

// let age = 250;

// let exchange = JSON.stringify(age)
// console.log(exchange);

// =========================================================================================================
// EX3: Stringify the isMarried variable
// =========================================================================================================

// let isMarried = true

// let convertBoo = JSON.stringify(isMarried)
// console.log(convertBoo);

// =========================================================================================================
// EX4: Stringify the student object
// =========================================================================================================

// const student = {
//     firstName:'Asabeneh',
//     lastName:'Yetayehe',
//     age:250,
//     isMarried:true,
//     skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python']
//   }

// const studenConvertToJSON = JSON.stringify(student, ['firstName', 'lastName', 'age', 'isMarried', 'skills'], 4)
// console.log(studenConvertToJSON);

// =========================================================================================================
// =========================================================================================================
//                                                LV2
// =========================================================================================================
// =========================================================================================================

// =========================================================================================================
// EX1: Stringify the students object with only firstName, lastName and skills properties
// =========================================================================================================

// const student = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayehe',
//     age: 250,
//     isMarried: true,
//     skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
// }

// const studentStringify = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 5)
// console.log(studentStringify);