// const callback = (n) => {
//     return n ** 2
// }

// function cube(callback, n) {
//     return callback(n) * n
// }

// console.log(cube(callback, 2));

// const higherOrderFunc = n => {
//     const doSomeThing = m => {
//         const whatEver = t => {
//             return 2 * n + 3 * m + t
//         }
//         return whatEver
//     }
//     return doSomeThing
// }
// console.log(higherOrderFunc(2)(3)(10));

// const numbers = [1, 2, 3, 4]
// const sumArray = arr => {
//   let sum = 0
//   const callBack = function(element) {
//     sum += element
//   }
//   numbers.forEach(callBack)
//   return sum
// }
// console.log(sumArray(numbers))

// function sayHello() {
//     console.log('Hello');
// }
// setInterval(sayHello, 2000)

// function sayGoodBye() {
//     console.log('GoodBye');
// }
// setInterval(sayGoodBye, 2000)

// const numbers = [1, 2, 3, 4, 5]
// numbers.forEach(num => console.log(num))

// const countries = ['findland', 'denmark', 'sweden', 'norway', 'iceland']
// countries.forEach(country => console.log(country.toUpperCase()))

// const numbers = [1, 2, 3, 4, 5]
// const numSquare = numbers.map((num) => num * num)
// console.log(numSquare);

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const nameToUpperCase = names.map((ele) => ele.toUpperCase())
// console.log(nameToUpperCase);

// =============================================================================================
// const countries = ['Albania', 'Bolivia', 'Canada',
//     'Denmark', 'Ethiopia', 'Finland', 'Germany',
//     'Hungary', 'Ireland', 'Japan', 'Kenya',]
// =============================================================================================

// const countriesToAcronym = countries.map((country) => country.toUpperCase().slice(0, 3))
// console.log(countriesToAcronym);

// const findLand = countries.filter((ele) => ele.includes('land'))
// console.log(findLand);

// const scores = [
//     {name: 'Asabeneh', score: 95},
//     {name: 'Bsabeneh', score: 85},
//     {name: 'Csabeneh', score: 75},
//     {name: 'Dsabeneh', score: 65},
//     {name: 'Esabeneh', score: 55},
//     {name: 'Gsabeneh', score: 45}
// ]
// const scoresGreaterEight = scores.filter((ele) => ele.score > 80)
// console.log(scoresGreaterEight); 

// const numbers = [1, 2, 3, 4, 5]
// const sum = numbers.reduce((prev, cur) => prev + cur, 10)
// console.log(sum);

// const areAllStr = countries.every((name) => typeof name === 'string')
// console.log(areAllStr);

// const ages = [17, 15, 10, 18, 19, 20, 32, 40]
// const findAge = ages.find((age) => age < 15)
// console.log(findAge);

// const countriesFindLength = countries.find((ele) => ele.length > 7)
// console.log(countriesFindLength);

// ============================================================================================
// const score = [
//     { name: 'Asabehne', score: 95 },
//     { name: 'Bsabehne', score: 85 },
//     { name: 'Csabehne', score: 75 },
//     { name: 'Dsabehne', score: 65 },
//     { name: 'Esabehne', score: 55 }
// ]
// ============================================================================================

// const scores = score.find((user) => {
//     return user.score > 85
// })
// console.log(scores);

// const scoreBelow65Id = score.findIndex((ele) => ele.score < 65)
// console.log(scoreBelow65Id);  // 4

// const names = ['Asabehne', 'Bsabehne', 'Csabehne', 'Dsabehne', 'Esabehne']
// const bools = [true, true, true, true]

// const areSomeTrue = bools.some((b) => b === true)
// console.log(areSomeTrue);

// const arrAllStr = names.some((name) => typeof name === 'string')
// console.log(arrAllStr);

// const numbers = [9.81, 3.14, 100, 37]
// const numbersBasicSort = numbers.sort()
// console.log(numbersBasicSort);

// numbers.sort(function (a, b) {
//     return a - b
// })
// console.log(numbers);

// const scores = [
//     { name: 'Asabeneh', score: 95 },
//     { name: 'Mathias', score: 80 },
//     { name: 'Elias', score: 50 },
//     { name: 'Martha', score: 85 },
//     { name: 'John', score: 100 },
// ]

// scores.sort(function (a, b) {
//     if (a.score < b.score) return -1
//     if (a.score > b.score) return 1
//     return 0
// })

// console.log(scores);

// const users = [
//     { name: 'Asabeneh', age: 150 },
//     { name: 'Brook', age: 50 },
//     { name: 'Eyo', age: 100 },
//     { name: 'Elias', age: 22 },
// ]

// users.sort(function (a, b) {
//     if(a.age < b.age) return -1
//     if(a.age > b.age) return 1
//     return 0
// })
// console.log(users);

// ==============================================================================================
// ==============================================================================================
// LV1
// ==============================================================================================
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
// ]
// ==============================================================================================
// EX1: Explain the difference between forEach, map, filter, and reduce.
// ==============================================================================================
// forEach cannot directly change the value of the array
// map is used to change the value inside it
// filter out items that satisfy the condition
// Reduce takes a callback function. The call back function takes accumulator, current, and optional initial

// ==============================================================================================
// EX2: Define a call function before you them in forEach, map, filter or reduce.
// ==============================================================================================
// teacher Huy didn't understand the assignment title either
// ==============================================================================================

// ==============================================================================================
// EX3: Use forEach to console.log each country in the countries array.
// ==============================================================================================

// countryLog = countries.forEach((country) => console.log(country))
// console.log(countryLog);

// ==============================================================================================
// EX4: Use forEach to console.log each name in the names array.
// ==============================================================================================

// namesLog = names.forEach((name) => console.log(name))
// console.log(namesLog);

// ==============================================================================================
// EX5: Use forEach to console.log each name in the names array.
// ==============================================================================================

// numLog = numbers.forEach((numbers) => console.log(numbers))
// console.log(numLog);

// ==============================================================================================
// EX6: Use map to create a new array by changing each country to uppercase in the 
// countries array.
// ==============================================================================================

// const newArr = countries.map((country) => country.toUpperCase())
// console.log(newArr);

// ==============================================================================================
// EX7: Use map to create an array of countries length from countries array.
// ==============================================================================================

// const countriesLength = countries.map((country) => country.length)
// console.log(countriesLength)

// ==============================================================================================
// EX8: Use map to create a new array by changing each number to square in the numbers array
// ==============================================================================================

// const newArr = countriesLength.map((countryLength) => countryLength = 'square')
// console.log(newArr);

// ==============================================================================================
// EX9: Use map to change to each name to uppercase in the names array
// ==============================================================================================

// const nameToUpperCase = names.map((name) => name.toUpperCase())
// console.log(nameToUpperCase);

// ==============================================================================================
// EX10: Use map to map the products array to its corresponding prices. 
// ==============================================================================================

// const priceProducts = products.map(function (product) {
//     console.log(`${product.product} : ${product.price}`)
// })

// ==============================================================================================
// EX11: Use filter to filter out countries containing land.
// ==============================================================================================

// const countriesHaveLand = countries.filter((country) => country.includes('land'))
// console.log(countriesHaveLand);

// ==============================================================================================
// EX12: Use filter to filter out countries having six character
// ==============================================================================================

// const countries6Char = countries.filter((country) => country.length == 6)
// console.log(countries6Char);

// ==============================================================================================
// EX13: Use filter to filter out countries containing six letters and more in the country array.
// ==============================================================================================

// const countriesMore5Char = countries.filter((country) => country.length >= 6)
// console.log(countriesMore5Char);

// ==============================================================================================
// EX14: Use filter to filter out country start with 'E';
// ==============================================================================================

// const startWithE = names.filter((name) => name.startsWith('E'))
// console.log(startWithE);

// ==============================================================================================
// EX15: Use filter to filter out only prices with values.
// ==============================================================================================

// const filterPrice = products.filter((product) => typeof product.price != 'string')
// console.log(filterPrice);

// ==============================================================================================
// EX16: Declare a function called getStringLists which takes an array as a parameter and 
// then returns an array only with string items.
// ==============================================================================================

// function getStringLists(arr) {
//     let str = ''
//     arr.map((string) => str += string)
//     let newArr = []
//     newArr.push(str)
//     return newArr
// }
// console.log(getStringLists(['abcd', 'efgh', 'iklm']))

// ==============================================================================================
// EX17: Use reduce to sum all the numbers in the numbers array.
// ==============================================================================================

// let sum = 0
// const sumArr = numbers.reduce((acc, cur) => {
//     sum = acc + cur
//     return sum
// })
// console.log(sumArr);

// ==============================================================================================
// EX18: Use reduce to concatenate all the countries and to produce this sentence: Estonia, 
// Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// ==============================================================================================

// let title
// const countree = countries.reduce((prev, cur, index) => {
//     if(index != countries.length - 1) { 
//         title = prev + ', ' + cur
//     } else {
//         title += ` and ${cur} are north European countries`
//     }
//     return title 
// })
// console.log(`${countree}`);

// ==============================================================================================
// EX19: Explain the difference between some and every
// ==============================================================================================

// check whether all the elements of the array satisfy the given condition or not
// whether at least one of the elements of the array satisfies the given condition or not

// ==============================================================================================
// EX20: Use some to check if some names' length greater than seven in names array
// ==============================================================================================

// const checkLengthNames = names.some((name) => name.length > 7)
// console.log(checkLengthNames);

// ==============================================================================================
// EX21: Use every to check if all the countries contain the word land
// ==============================================================================================

// const checkLandCountries = countries.every((country) => country.includes('land'))
// console.log(checkLandCountries);

// ==============================================================================================
// EX22: Explain the difference between find and findIndex.
// ==============================================================================================

// find return value
// findIndex return index

// ==============================================================================================
// EX23: Use find to find the first country containing only six letters in the countries array
// ==============================================================================================

// const findFirstCountry = countries.find((country) => country.length == 6)
// console.log(findFirstCountry);

// ==============================================================================================
// EX24: Use findIndex to find the position of the first country containing only six letters 
// in the countries array
// ==============================================================================================

// const findFirstIdCountry = countries.findIndex((country) => country.length == 6)
// console.log(findFirstIdCountry);

// ==============================================================================================
// EX25: Use findIndex to find the position of Norway if it doesn't exist in the array you 
// will get -1.
// ==============================================================================================

// const findIdNorway = countries.findIndex((country) => country.includes('Norway'))
// console.log(findIdNorway);

// ==============================================================================================
// EX26: Use findIndex to find the position of Russia if it doesn't exist in the array you 
// will get -1.
// ==============================================================================================

// const findIdRussia = countries.findIndex((country) => country.includes('Russia'))
// console.log(findIdRussia);

// ==============================================================================================
// ==============================================================================================
//                                             LV2
// ==============================================================================================
// ==============================================================================================

// ==============================================================================================
// EX1: Find the total price of products by chaining two or more array 
// iterators(eg. arr.map(callback).filter(callback).reduce(callback))
// ==============================================================================================

// const callBack = () => {
//     let sum = 0
//     products.map((product) => {
//         if(typeof product.price == 'number') {
//             sum += product.price
//         }
//     })
//     return sum
// }
// const totalPrice = products.reduce((callBack))
// console.log(totalPrice);

// ==============================================================================================
// EX2: Find the sum of price of products using only reduce reduce(callback))
// ==============================================================================================

// const callBack = () => {
//     let sum = 0
//     products.reduce((prev, cur) => {
//         if(typeof cur.price == 'number') {
//             sum += cur.price
//         }
//     }, 0)
//     return sum
// }
// const totalPrice = products.reduce((callBack))
// console.log(totalPrice);

// ==============================================================================================
// EX3: Declare a function called categorizeCountries which returns an array of countries 
// which have some common pattern(you find the countries array in this repository as 
// countries.js(eg 'land', 'ia', 'island','stan')).
// ==============================================================================================

// import countries from "./countries.js";
// function categorizeCountries() {
//     countries.map((country) => {
//         if(country.name.includes('land') 
//         || country.name.includes('ia') 
//         || country.name.includes('island') 
//         || country.name.includes('stan')) {
//             return console.log(country.name)
//         }
//     })
// }
// categorizeCountries(countries)

// ==============================================================================================
// EX4: Create a function which return an array of objects, which is the letter and the number 
// of times the letter use to start with a name of a country.
// ==============================================================================================

// import countries from './countries.js'
// function startWithCountryName() {
//     let startLetter
//     let newArr = []
//     let rs = []
//     countries.map((country) => {
//         startLetter = country.name.slice(0, 1)
//         // console.log(country.name);
//         newArr.push(startLetter)
//     })
//     for(let i = 0; i < newArr.length; i++) {
//         var found = rs.find(item => item.name == newArr[i])
//         if(found) {
//             found.count += 1
//         } else {
//             found = {}
//             found.name = newArr[i]
//             found.count = 1
//             rs.push(found)
//         }
//     }
//     console.log(newArr);
//     console.log(rs);
// }
// startWithCountryName(countries)

// ==============================================================================================
// EX5: Declare a getFirstTenCountries function which returns the first ten countries in
//  the countries array.
// ==============================================================================================

// import countries from "./countries.js";

// function getFirstTenCountries() {
//     let newArr = []
//     countries.map((country, index) => {
//         if(index < 10) {
//             newArr.push(country.name)
//         }
//     })
//     console.log(newArr);
// }
// getFirstTenCountries(countries)

// ==============================================================================================
// EX6: Declare a getLastTenCountries function which returns the last ten countries in
//  the countries array.
// ==============================================================================================

// import countries from "./countries.js";

// function getLastTenCountries() {
//     let newArr = []
//     let countriesReverse = countries.reverse()
//     countriesReverse.map((country, index) => {
//                 if(index < 10) {
//                     newArr.push(country.name)
//                 }
//             })
//     console.log(newArr);
// }
// getLastTenCountries(countries)

// ==============================================================================================
// ==============================================================================================
//                                          LV3
// ==============================================================================================
// ==============================================================================================

// ==============================================================================================
// EX1: Use the countries information, in the data folder. Sort countries by name, 
// by capital, by population
// ==============================================================================================

// import countries from "./countries.js";

// function sortArrCountries() {
//     let sortCapital = []
//     let sortPopulation = []
//     let sortName = []
//     countries.map((country) => {
//         sortCapital.push(country.capital)
//         sortPopulation.push(country.population)
//         sortName.push(country.name)
//     })
//     sortCapital.sort()
//     sortPopulation.sort()
//     sortName.sort()
//     console.log(sortCapital);
//     console.log(sortPopulation);
//     console.log(sortName);
// }
// sortArrCountries(countries)

// ==============================================================================================
// EX2: Find the 10 most spoken languages:
// ==============================================================================================
// ==============================================================================================

// import countries from "./countries.js";

// function countCountry() {
//     let arr = []
//     for (let i = 0; i < countries.length; i++) {
//         let accessLanguages = countries[i].languages
//         for (let j = 0; j < accessLanguages.length; j++) {
//             arr.push(accessLanguages[j])
//         }
//     }
//     console.log(arr);
//     let newArr = []
//     let count = 0
//     for(let i = 0; i < arr.length; i++) {
//         var found = newArr.find(lang => lang.languages == arr[i])
//         if(found) {
//             found.count += 1
//         } else {
//             found = {}
//             found.languages = arr[i]
//             found.count = 1
//             newArr.push(found)
//         }
//     }
//     newArr.sort((a, b) => {
//         return b.count - a.count
//     })
//     let result = newArr.slice(0, 10)
//     console.log(result);
// }
// countCountry()
// =================================================================================================
// EX3: Use countries_data.js file create a function which create the ten most populated countries
// =================================================================================================

// import countries from './countries.js'

// function mostPopulation() {
//     let arr = []
//     for(let i = 0; i < countries.length; i++) {
//         let obj = {}
//         obj.country = countries[i].name
//         obj.population = countries[i].population
//         arr.push(obj)
//     }
//     arr.sort((a, b) => {
//         return b.population - a.population 
//     })
//     let result = arr.slice(0, 10)
//     console.log(result);
// }
// mostPopulation(countries)

