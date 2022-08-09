// const number = [1, 2, 3]
// let [numberOne, numberTwo, numberThree] = number
// console.log(numberOne, numberTwo, numberThree)

// const names = ['Asabehne', 'Brook', 'David', 'John']
// let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names
// console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
// ]
// const [frontEnd, backEnd] = fullStack
// console.log(frontEnd, backEnd);

// const numbers = [1, 2, 3]
// let [numOne, , numThree] = numbers
// console.log(numOne, numThree);

// const names = [undefined, 'Brook', 'David']
// let [
//     firstPerson = 'Asabehne',
//     secondPerson,
//     thirdPerson,
//     fourthPerson = 'John'
// ] = names
// console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let [num1, num2, num3,...rest] = nums
// console.log(num1, num2, num3);
// console.log(rest);

// const countries = [['Finlane', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
// for(const [country, city] of countries) {
//     console.log(country, city);
// }

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200,
//     peri: 20
// }
// let { width, height, area, perimeter } = rectangle
// console.log(width, height, area, perimeter);

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200,
//     perimeter: 120
// }
// let { width: w, height: h, area: a, perimeter: p } = rectangle
// console.log(w, h, a, p);

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200,
// }
// let { width, height, area, perimeter = 60 } = rectangle
// console.log(width, height, area, perimeter);

// const rect = {
//     width: 20,
//     height: 10
// }
// const calculatePerimeter = rectangle => {
//     return 2 * (rectangle.width + rectangle.height)
// }
// console.log(calculatePerimeter(rect));

// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     job: 'Instructor and Developer',
//     skills: [
//         'HTML',
//         'CSS',
//         'JavaScript',
//         'React',
//         'Redux',
//         'Node',
//         'MongoDB',
//         'Python',
//         'D3.js'
//     ],
//     languages: ['Amharic', 'English', 'Suomi(Finnish)']
// }

// const getPersonInfo = obj => {
//     const skills = obj.skills
//     const formattedSkills = skills.slice(0, -1).join(', ')
//     const languages = obj.languages
//     const formattedLanguages = languages.slice(0, -1).join(', ')
//     const personInfo = `${obj.firstName} ${obj.lastName} ${obj.country}. He is ${obj.age}
//      years old. He is an ${obj.job}. He teaches ${formattedSkills} and
//      ${skills[skills.length - 1]}. He speaks ${formattedLanguages} and a little bit of 
//      ${languages[2]}.`
//     return personInfo
// }
// console.log(getPersonInfo(person))

// const getPersonInfo = ({
//     firstName,
//     lastName,
//     age,
//     country,
//     job,
//     skills,
//     languages
// }) => {
//     const formattedSkills = skills.slice(0, -1).join(', ')
//     const formattedLanguages = languages.slice(0, -1).join(', ')
//     let personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]
//         }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

//     return personInfo
// }
// console.log(getPersonInfo(person))

// const toDoList = [
//     {
//         task: 'Prepare JS Text',
//         time: '4/1/2020 8:30',
//         completed: true
//     },
//     {
//         task: 'Give JS Text',
//         time: '4/1/2020 10:00',
//         completed: false
//     },
//     {
//         task: 'Assess Text Result',
//         time: '4/1/2020 1:00',
//         completed: false
//     }
// ]

// for(const {task, time, completed} of toDoList) {
//     console.log(task, time, completed);
// }

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let [num1, num2, num3, ...rest] = nums
// console.log(num1, num2, num3);
// console.log(rest);

// const countries = [
//     'Germany',
//     'France',
//     'Belgium',
//     'Finland',
//     'Sweden',
//     'Norway',
//     'Denmark',
//     'Iceland'
// ]
// let [ger, fra, bel, ...rest] = countries
// console.log(ger);
// console.log(fra);
// console.log(bel);
// console.log(rest);

// const evens = [0, 2, 4, 6, 8, 10]
// const evenNumbers = [...evens]

// const odds = [1, 3, 5, 7, 9]
// const oddNumbers = [...odds]

// const wholeNumbers = [...evens, ...odds]

// console.log(evenNumbers);
// console.log(oddNumbers);
// console.log(wholeNumbers);

// const frontEnd = ['HTML', 'CSS', 'JS', 'React']
// const backEnd = ['Node', 'Express', 'MongoDB']
// const fullStack = [...frontEnd, ...backEnd]
// console.log(fullStack);

// const user = {
//     name: 'Asabehne',
//     title: 'Programmer',
//     country: 'Finland',
//     city: 'Helsinki'
// }

// const copiedUser = {...user}
// console.log((copiedUser));

// const user = {
//     name: 'Asabehne',
//     title: 'Programmer',
//     country: 'Finland',
//     city: 'Helsinki'
// }

// const copiedUser = {...user, title:'instructor'}
// console.log(copiedUser);

// const sumAllNums = (...args) => {
//     let sum = 0
//     for(const num of args) {
//         sum += num
//     }
//     return sum
// }
// console.log(sumAllNums(1, 2, 3, 4, 5))

// ====================================================================================
// ====================================================================================
//  LV1
// ====================================================================================
// ====================================================================================

// ====================================================================================
// EX1: Destructure and assign the elements of constants array to e, pi, gravity, 
// humanBodyTemp, waterBoilingTemp.
// ====================================================================================
// const constants = [2.72, 3.14, 9.81, 37, 100]
// const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

// console.log(e);
// console.log(pi);
// console.log(gravity);
// console.log(humanBodyTemp);
// console.log(waterBoilingTemp);


// ====================================================================================
// EX2: Destructure and assign the elements of countries array to fin, est, sw, den, 
// nor
// ====================================================================================
// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
// const [fin, es, sw, den, nor] = countries

// console.log(fin, es, sw, den, nor);


// ====================================================================================
// EX2: Destructure the rectangle object by its properties or keys.
// ====================================================================================
// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200,
//     perimeter: 60
// }

// const {width: w, height: h, area: a, perimeter: p} = rectangle
// console.log(w, h, a, p); 

// ====================================================================================
// ====================================================================================
//                                      LV2
// ====================================================================================
// ====================================================================================

// ====================================================================================
// EX1: Iterate through the users array and get all the keys of the object using 
// destructuring
// ====================================================================================
// import users from "./users.js";

// function getKey() {
//     for(let {name, scores, skills, age} of users) {
//         console.log(name, scores, skills, age);
//     }
// }
// getKey()

// ====================================================================================
// EX2: Find the persons who have less than two skills
// ====================================================================================

// import users from "./users.js";

// function filterPerson() {
//     let user
//     for(let {name, skills} of users) {
//         if(skills.length < 2) {
//             user = name
//         }
//     }
//     return user
// }
// console.log(filterPerson(users))