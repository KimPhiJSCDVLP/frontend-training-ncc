// console.log('console.log()');
// console.warn('console.warn()');
// console.error('console.error()');

// let names = ['Asabehne', 'Brook', 'David', 'John']
// console.table(names)

// const countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo']
// ]
// console.time('regular for loop')
// for(let i = 0; i < countries.length; i++) {
//     console.log(countries[i][0], countries[i][1]);
// }
// console.timeEnd('regular for loop')

// console.info('30 Days Of JavaScript challenge is trending on Github')

// console.assert(4 > 3, '4 is greater than 3')
// console.assert(3 > 4, '3 is not greater than 4')

// const namess = ['Asabeneh', 'Brook', 'David', 'John']
// const countriess = [
//   ['Finland', 'Helsinki'],
//   ['Sweden', 'Stockholm'],
//   ['Norway', 'Oslo']
// ]
// const user = {
//   name: 'Asabeneh',
//   title: 'Programmer',
//   country: 'Finland',
//   city: 'Helsinki',
//   age: 250
// }
// const users = [
//   {
//     name: 'Asabeneh',
//     title: 'Programmer',
//     country: 'Finland',
//     city: 'Helsinki',
//     age: 250
//   },
//   {
//     name: 'Eyob',
//     title: 'Teacher',
//     country: 'Sweden',
//     city: 'London',
//     age: 25
//   },
//   {
//     name: 'Asab',
//     title: 'Instructor',
//     country: 'Norway',
//     city: 'Oslo',
//     age: 22
//   },
//   {
//     name: 'Matias',
//     title: 'Developer',
//     country: 'Denmark',
//     city: 'Copenhagen',
//     age: 28
//   }
// ]

// console.group('Namess')
// console.log(namess);
// console.groupEnd('Namess')

// console.group('Countries')
// console.log(countries)
// console.groupEnd('Countries')

// console.group('Users')
// console.log(user)
// console.log(users)
// console.groupEnd()

// const func = () => {
//     console.count('Function has been called')
// }
// func()
// func()
// func()
// func()
// func()

// console.clear()

// =============================================================================================
// =============================================================================================
// LV1
// =============================================================================================
// =============================================================================================

// =============================================================================================
// EX1: Display the countries array as a table
// =============================================================================================

// const countriesArr = [
//     'Viet Nam',
//     'Campuchia',
//     'Laos',
//     'Indonesia',
//     'Singapore'
// ]

// console.table(countriesArr)

// =============================================================================================
// EX2: Display the countries object as a table
// =============================================================================================

// const countriesObj = {
//     country: 'Viet Nam',
//     city: 'Ha Noi',
//     title: 'asia'
// }

// console.table(countriesObj)

// =============================================================================================
// EX3: Use console.group() to group logs
// =============================================================================================

// console.group('Group logs')
// console.table(countriesArr)
// console.table(countriesObj)
// console.groupEnd('Group logs')

// =============================================================================================
// =============================================================================================
// LV2
// =============================================================================================
// =============================================================================================

// =============================================================================================
// EX1: 10 > 2 * 10 use console.assert()
// =============================================================================================

// console.assert(10 > 2 * 10, "10 isn't greater than 2 * 10")

// =============================================================================================
// EX2: Write a warning message using console.warn()
// =============================================================================================

// console.warn('this is warn!')

// =============================================================================================
// EX3: Write an error message using console.error()
// =============================================================================================

// console.error('this is error!')

// =============================================================================================
// =============================================================================================
// LV3
// =============================================================================================
// =============================================================================================

// =============================================================================================
// EX1: Check the speed difference among the following loops: while, for, for of, forEach
// ============================================================================================= 
// console.time("check time of for loop")
//     for(let i = 0; i < 10; i++) {
//         console.log(i);
//     }
// console.timeEnd("check time of for loop")

// let i
// console.time("check time of while")
// do {
//     console.log(i)
// } while (i < 10)
// console.timeEnd("check time of while")

// console.time("check time of for of")
// for(let country of countries) {
//     country.length < 10
//     ? console.log(country)
//     : console.log(undefined);
// }
// console.timeEnd("check time of for of")

// console.time("check time of forEach")
// countries.forEach(country => {
//     country.length < 10
//     ? console.log(country)
//     : console.log(undefined);
// });
// console.timeEnd("check time of forEach")
