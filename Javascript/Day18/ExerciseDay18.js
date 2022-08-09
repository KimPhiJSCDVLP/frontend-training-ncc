// const doSomeThing = callBack => {
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS']
//         callBack(false, skills) // or 'It did not go well'
//     }, 1000)
// }

// const callBack = (err, result) => {
//     if(err) {
//         return console.log(err);
//     } else {
//         return console.log(result)
//     }
// }
// doSomeThing(callBack)


// const promise = new Promise((resolve, reject) => {
//     resolve('success')
//     reject('failure')
// })
// console.log(promise);

// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS']
//         if(skills.length > 0) {
//             resolve(skills)
//         } else {
//             reject('Something wrong has happened')
//         }
//     }, 2000)
// })

// doPromise
// .then(result => {
//     console.log(result);
// })
// .catch(err => {
//     console.log(err);
// })

// const url = 'https://jsonplaceholder.typicode.com/users'
// fetch(url)
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// })
// .catch(err => console.log(err))

// const square = async function(n) {
//     return n * n
// }
// console.log(square(2))

// const square = async function(n) {
//     return n * n
// }
// const value = await square(2)
// console.log(value);

// ===========================================================================================
// ===========================================================================================
//                                         LV1
// ===========================================================================================
// ===========================================================================================

// ===========================================================================================
// EX1: Read the countries API using fetch and print the name of country, capital, languages, 
// population and area.
// ===========================================================================================

// const countriesAPI = 'https://jsonplaceholder.typicode.com/users'

// let arr = []
// fetch(countriesAPI)
// .then(response => response.json())
// .then(data => {
//    arr = data;
//    for(let i = 0; i < arr.length; i++) {
//       console.log(`================================`);
//       console.log('id: ', arr[i].id);
//       console.log('name: ', arr[i].name);
//       console.log('username: ', arr[i].username);
//       console.log('email: ', arr[i].email);
//       console.log(`================================`);
//    }
// })
// .catch(error => console.log(error))

// ===========================================================================================
// EX2: Print out all the cat names in to catNames variable.
// ===========================================================================================

// const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// fetch(catsAPI)
// .then(response => response.json())
// .then(data => {
//    for(let i = 0; i < data.length; i++) {
//       console.log('Name:', data[i].name);
//    }
// })