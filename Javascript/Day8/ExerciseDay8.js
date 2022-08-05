// =================================================================================================
// =================================================================================================
// LV1
// =================================================================================================
// =================================================================================================
// EX1: Create an empty object called dog
// =================================================================================================

// let dog = {}

// =================================================================================================
// EX2: Print the the dog object on the console
// =================================================================================================

// let dog = {}
// console.log(dog);

// =================================================================================================
// EX3+4: Add name, legs, color, age and bark properties for the dog object. The bark 
// property is a method which return woof woof
// =================================================================================================

// let dog = {}
// dog.name = 'Cat'
// dog.legs = 4
// dog.color = 'pink'
// dog.age = 72
// dog.bark = () => {
//     return 'woof woof'
// }
// console.log(dog);

// =================================================================================================
// EX5: Set new properties the dog object: breed, getDogInfo
// =================================================================================================

// dog.getDogInfo = 'Husky'
// console.log(dog);

// =================================================================================================
// =================================================================================================
//                                      LV2
// =================================================================================================
// =================================================================================================
// EX1: Find the person who has many skills in the users object.
// =================================================================================================

// import users from "./users.js"

// function findSkillsPerson(users) {
//     let userName 
//     let maxLength = 0
//     for(let user in users) {
//         const skillsCount = users[user]['skills'].length
//         if(skillsCount > maxLength) {
//             maxLength = skillsCount
//             userName = user
//         } 
//     }
//     console.log(userName);
// }
// findSkillsPerson(users)


// =================================================================================================
// EX2: Count logged in users,count users having greater than equal to 50 points from the 
// following object.
// =================================================================================================

// import users from "./users.js"

// function countPoints(users) {
//     let count = 0
//     let loggedUsers = 0
//     for(let user in users) {
//         const pointsCount = users[user]['points']
//         const loggedCount = users[user]['isLoggedIn']
//         if(pointsCount >= 50) {
//             count++
//         }
//         if (loggedCount == true) {
//             loggedUsers++
//         }
//     }
//     console.log(`the number of users over 50 points is ${count} users`);
//     console.log(`the number of users logged in is ${loggedUsers} users`);
// }
// countPoints(users)


// =================================================================================================
// EX3: Find people who are MERN stack developer from the users object
// =================================================================================================

// import users from "./users.js";

// function findMernDev() {
//     let userName
//     for (let user in users) {
//         const checkSkills = users[user]['skills']
//         for (let skills of checkSkills) {
//             if (skills == 'MongoDB') {
//                 userName = user
//                 console.log(userName);
//             }
//         }
//     }
// }
// findMernDev(users)

// =================================================================================================
// EX4: Set your name in the users object without modifying the original users object
// + EX5 + EX6
// =================================================================================================

// import users from "./users.js";

// users.An = {
//     email: 'an@ncc.an',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 20
// }
// console.log(users);

// =================================================================================================
// EX7: Use the countries object to print a country name, capital, populations and languages.
// =================================================================================================

// import countriesEx8 from "./countriesEx8.js"

// function countries(countries) {
//     // console.log(countries);
//     let newArr = []
//     let countryName
//     let countryCapital
//     let countryPopulation
//     let countryLanguages
//     for(let country in countries) {
//         countryName = countries[country]['name']
//         countryCapital = countries[country]['capital']
//         countryPopulation = countries[country]['population']
//         countryLanguages = countries[country]['languages']
//         newArr.push([`country name: ${countryName}, country capital: ${countryCapital}, country population: ${countryPopulation}, country language: ${countryLanguages}`])
//     }
//     console.log(newArr);
// }
// countries(countriesEx8)

// =================================================================================================
// =================================================================================================
//                                      LV3
// =================================================================================================
// =================================================================================================
// EX1: Create an object literal called personAccount. It has firstName, lastName, incomes, 
// expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense 
// and accountBalance methods. Incomes is a set of incomes and its description and expenses is 
// a set of incomes and its description.
// =================================================================================================

// let totalIncome
// let totalExpense
// const personAccount = {
//     firstName: 'Nguyen',
//     lastName: 'Thien An',
//     income: 60,
//     expenses: 25,
//     totalIncome: function() {
//         totalIncome = this.income * 30
//         return `total income of ${this.firstName} ${this.lastName} is ${totalIncome}k`
//     },
//     totalExpense: function() {
//         totalExpense = this.expenses * 30
//         return `total expenses of ${this.firstName} ${this.lastName} is ${totalExpense}k`
//     },
//     accountInfo: function() {
//         return `this is account of ${this.firstName} ${this.lastName}`
//     },
//     addIncome: function(addMore) {
//         this.income = this.income + addMore 
//         return `Your earnings have been updated to ${this.income}k/day`
//     },
//     addExpenses: function(addMore) {
//         this.expenses = this.expenses + addMore 
//         return `Your spending has been updated to ${this.expenses}k/day`
//     },
//     accountBalance: function() {
//         let accountBalance = (this.income*30) - (this.expenses*30)
//         return `Your account balance is ${accountBalance}k`
//     }
// }
// console.log(personAccount);
// console.log(personAccount.accountInfo());
// console.log(personAccount.totalIncome());
// console.log(personAccount.totalExpense());
// console.log(personAccount.addIncome(20));
// console.log(personAccount.addExpenses(20));
// console.log(personAccount.accountBalance());

// =================================================================================================
// EX2, 3 and 4: are based on the following two arrays:users and products ()
// =================================================================================================

// const userss = [
//     {
//         _id: 'ab12ex',
//         username: 'Alex',
//         email: 'alex@alex.com',
//         password: '123123',
//         createdAt: '08/01/2020 9:00 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'fg12cy',
//         username: 'Asab',
//         email: 'asab@asab.com',
//         password: '123456',
//         createdAt: '08/01/2020 9:30 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'zwf8md',
//         username: 'Brook',
//         email: 'brook@brook.com',
//         password: '123111',
//         createdAt: '08/01/2020 9:45 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'eefamr',
//         username: 'Martha',
//         email: 'martha@martha.com',
//         password: '123222',
//         createdAt: '08/01/2020 9:50 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'ghderc',
//         username: 'Thomas',
//         email: 'thomas@thomas.com',
//         password: '123333',
//         createdAt: '08/01/2020 10:00 AM',
//         isLoggedIn: false
//     }
// ];

// =================================================================================================
// Imagine you are getting the above users collection from a MongoDB database. a. Create a
// function called signUp which allows user to add to the collection. If user exists, inform
// the user that he has already an account.
// =================================================================================================
// const createId = () => {
//     let character = 'abc4567defghik89lmnopquvwxyz0123' //32
//     let id = ''
//     for (let i = 0; i < 6; i++) {
//         id += character.charAt(Math.floor(Math.random() * 32))
//     }
//     return id
// }

// const createUserName = (userName) => {
//     return userName
// }

// const createEmail = (email) => {
//     return email
// }

// const password = (password) => {
//     return password
// }


// const createdAt = () => {
//     let d = new Date()
//     let year = d.getFullYear()
//     let month = d.getMonth()
//     let day = d.getDay()
//     let hour = d.getHours()
//     let minute = d.getMinutes()
//     let noon = 'AM'
//     if (month < 10) {
//         month = '0' + month
//     }
//     if (day < 10) {
//         day = '0' + day
//     }
//     if (hour < 10) {
//         hour = '0' + hour
//     }
//     if (minute < 10) {
//         minute = '0' + minute
//     }
//     if (hour > 12) {
//         hour = hour - 12
//         noon = 'PM'
//     }
//     return `${day}/${month}/${year} ${hour}:${minute} ${noon}`
// }

// let pass = prompt(`Enter password (password is 123452)`)
// function signIn(pass) {
//     let truePass = '123452'
//     if(pass = truePass) {
//         function signUp(userss) {
//             let obj = {
//                 _id: createId(),
//                 username: createUserName('Nguyen Van A'),
//                 email: createEmail('nguyenVanA@ncc.com'),
//                 password: password('123456'),
//                 createdAt: createdAt()
//             }
//             userss.push(obj)
//             console.log(userss);
//         }
//         signUp(userss)
//     } else {
//         console.log(`Please re-load website, and try again`);
//     }
// }
// signIn(pass)

// =================================================================================================
// The products array has three elements and each of them has six properties. 
// a. Create a function called rateProduct which rates the product 
// b. Create a function called averageRating which calculate the average rating of a product
// =================================================================================================


const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    },
]

// const createId = () => {
//     let character = 'abc4567defghik89lmnopquvwxyz0123' //32
//     let id = ''
//     for (let i = 0; i < 6; i++) {
//         id += character.charAt(Math.floor(Math.random() * 32))
//     }
//     return id
// }

// const rateProduct = (products, rate) => {
//     let obj = {
//         userId: createId(),
//         rate: 5.5
//     }
//     obj.rate = rate
//     for(let product of products) {
//         const accessRatings = product.ratings
//         accessRatings.push(obj)
//     }
//     console.log(products)
// }
// // rateProduct(products, 3)

// const averageRating = () => {
//     let sum = 0
//     for(let product of products) {
//         const rat = product.ratings
//         for(let i = 0; i < rat.length; i++) {
//             sum += rat[i].rate
//         }
//     }
//     return sum
// }
// averageRating(products)


// =================================================================================================
// Create a function called likeProduct. This function will helps to like to the product if it 
// is not liked and remove like if it was liked.
// =================================================================================================


// const likeProduct = (products) => {
//     for(let i = 0; i < products.length; i++) {
//         let likeProduct = products[i].likes
//         for(let j = 0; j < likeProduct.length; j++) {
//             if(likeProduct[j] == '') {
//                 likeProduct[j] = 'fg12cy'
//             } else {
//                 likeProduct[j] = ''
//             }

//         }
//         console.log(products[i]);

//     }       
// }
// likeProduct(products)