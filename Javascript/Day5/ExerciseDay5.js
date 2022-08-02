// const fruits = [`banana`, `orange`, `mango`, `lemon`]

// console.log(`Fruits:`, fruits)
// console.log(`Number of fruits:`, fruits.length)

// const arr = [
//     'Milks',
//     10000,
//     true,
//     {
//         country: 'Viet Nam',
//         city: 'Quy Nhon'
//     },
//     {
//         components: [
//             "cow's Milk",
//             "sugar",
//             "cocoa"
//         ]
//     }
// ]
// console.log(arr);

// let companies = 'Meta, Google, Amazon, Ocracle'
// let useSplit = companies.split(', ')

// console.log(useSplit[2]);
// console.log(useSplit);

// const country = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Germany',
//     'Hungary'    
// ]
// console.log(country);
// console.log(country[5]);

// let lastIndex = country.length - 1
// console.log(lastIndex);

// const number = [1, 2, 3, 4, 5]
// number[0] = 10
// number[4] = 50
// console.log(number);

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Findlane',
//     'Germany',
//     'Ireland',
//     'Japan'
// ]
// countries[0] = 'Afghanistan'
// let lastId = countries.length - 1
// countries[lastId] = 'Viet Nam'
// console.log(countries);

// let firstList = ['1', '2', '3']
// let secondList = ['4', '5', '6']
// console.log(firstList.concat(secondList));

// let indexInArr = ['1', '2', '3', '4', '5']

// console.log(indexInArr.indexOf('3'))
// console.log(indexInArr.indexOf('5'))

// const fruit = [
//     'banana',
//     'orange',
//     'mango',
//     'lemon'
// ]
// let index = fruit.indexOf('orange')

// if(index != -1) {
//     console.log('This fruit does exist in the array')  
// } else {
//     console.log('This fruit does not exist in the array')
// }

// index == -1 
// ? console.log('This fruit does exist in the array')
// : console.log('This fruit does not exist in the array') 

// let checkArr = ['1', '2', '3', '4', '5']
// console.log(Array.isArray(checkArr)); // true

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.includes(1));
// console.log(numbers.includes(0));
// console.log(numbers.includes(3));

// const webTechs = [
//     'HTML',
//     'CSS',
//     'REACT',
//     'JAVASCRIPT',
//     'PHP',
//     'PYTHON'
// ]
// console.log(webTechs.includes('PYTHON'));
// console.log(webTechs.includes('CSS'));
// console.log(webTechs.includes(0));

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.toString());

// let numbers = [1, 2, 3, 4, 5]
// console.log(numbers.join());

// let fruits = [
//     'apple',
//     'orange',
//     'mango',
//     'banana',
//     'cherry'
// ]
// console.log(fruits.join());
// console.log(fruits.join(''));
// console.log(fruits.join(' '));
// console.log(fruits.join('#'));

// let numbers = [1, 2, 3, 4, 5]
// console.log(numbers.slice(0));
// console.log(numbers.slice(2));
// console.log(numbers.slice(0, numbers.length));
// console.log(numbers.slice(1, 4));

// let numbers = [1, 2, 3, 4, 5, 6]
// console.log(numbers.splice(1, 3));
// console.log(numbers.splice(0, 1));
// console.log(numbers.splice(0, 5));

// let numbers = [1, 2, 3, 4, 5]
// numbers.push('New Element', 'New E2')
// numbers.pop()
// numbers.shift()
// numbers.unshift(123)
// numbers.reverse()
// numbers.sort()
// console.log(numbers);

// let arrOfArr = [[0, 1, 2], [3, 4, 5]]
// console.log(arrOfArr[0]);

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']
// const fullstack = [frontEnd, backEnd]
// console.log(fullstack);
// console.log(fullstack.length);
// console.log(fullstack[0]);

// ===========================================================================

// 1. Declare an empty array;

// let emptyArr = []

// 2. Declare an array with more than 5 number of elements

// let numArr = [1, 2, 3, 4, 5, 6]

// 3. Find the length of your array

// let tempArr = [1, 2, 3]
// console.log(tempArr.length);

// 4. Get the first item, the middle item and the last item of the array

// let item = ['firstItem', 'middleItem', 'lastItem']
// item.splice(1, 1)
// item.shift()
// item.pop()
// console.log(item);

// 5. Declare an array called mixedDataTypes, put different data types in  
// the array and find the length of the array. The array size should be 
// greater than 5

// let mixedDataTypes = [
//     'Nguyen Thien An',
//     2002,
//     {
//         breakFast: true,
//         lunch: true,
//         dinner: true
//     },
//     [
//         city = 'Ha Noi',
//         address = '109 Nguyen Cong Tru',
//         phoneNumber = '0766668602'
//     ]
// ]

// 6. Declare an array variable name itCompanies and assign initial values 
// Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// + 7. Print the array using console.log()
// + 8 Print the number of companies in the array
// + 9 Print the first company, middle and last company
// + 10 Print out each company
// + 11 Change each company name to uppercase one by one and print them out
// + 12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, 
// IBM,Oracle and Amazon are big IT companies
// + 13 Check if a certain company exists in the itCompanies array. If it exist 
// return the company else return a company is not found
// + 14 Filter out companies which have more than one 'o' without the filter method
// + 15 Sort the array using sort() method
// + 16 Reverse the array using reverse() method
// + 17 Slice out the first 3 companies from the array
// + 18 Slice out the last 3 companies from the array
// + 19 Slice out the middle IT company or companies from the array
// + 20 Remove the first IT company from the array
// + 21 Remove the middle IT company or companies from the array
// + 22 Remove the last IT company from the array
// + 23 Remove all IT companies

// let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// let itCompanies = companies.split(',')
// console.log(itCompanies)
// let firstIndex = 0
// let lastIndex = (itCompanies.length - 1)
// let middleIndex = itCompanies.length / 2
// console.log(itCompanies.slice(2, 2)); 
// console.log(middleIndex);
// console.log(itCompanies[firstIndex]);
// console.log(itCompanies[lastIndex]);
// for(i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i].toUpperCase());
// }
//     console.log(`${itCompanies} are big IT companies`);
// if(itCompanies.includes('Facebook')) {
//     console.log(`Facebook`);
// } else {
//     console.log(`Not found`);
// }
// for (let i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i].includes('oo'));
// }
// console.log(itCompanies.sort());
// console.log(itCompanies.reverse());
// console.log(itCompanies.splice(3, 4));
// console.log(itCompanies.splice(0, 4));
// console.log(itCompanies.splice(2, 2), itCompanies);
// console.log(itCompanies.shift(), itCompanies);
// console.log(itCompanies.pop(), itCompanies);
// console.log(itCompanies.splice(2, 2), itCompanies);
// itCompanies.length = 0
// console.log(itCompanies);


// LV 2

// EX1: Create a separate countries.js file and store the countries array in 
// to this file, create a separate file web_techs.js and store the webTechs 
// array in to this file. Access both file in main.js file

// import countries from "./country.js"
// import webTechs from "./webTechs.js"
// console.log(countries)
// console.log(webTechs)

// EX2: First remove all the punctuations and change the string to array and count 
// the number of words in the array

// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// let stringToArr = text.split(' ')
// console.log(stringToArr);

// EX3: In the following shopping cart add, remove, edit items
//  + add 'Meat' in the beginning of your shopping cart if it has not been already added
//  + add Sugar at the end of you shopping cart if it has not been already added
//  + remove 'Honey' if you are allergic to honey
//  + modify Tea to 'Green Tea'

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// shoppingCart.unshift('Meat')
// shoppingCart.push('Sugar')
// console.log(shoppingCart.indexOf('Honey'), shoppingCart.splice(4,1), shoppingCart);
// console.log(shoppingCart.splice(3, 1, 'Green Tea'))
// console.log(shoppingCart);


// EX4: In countries array check if 'Ethiopia' exists in the array if it exists 
// print 'ETHIOPIA'. If it does not exist add to the countries list

// import countries from "./country.js"

// for(let i = 0; i < countries.length; i++) {
//     if(countries[i].includes('Ethiopia') == true){
//         console.log('ETHIOPIA');
//     }
// }
// console.log(countries);

// EX5: In the webTechs array check if Sass exists in the array and if it exists print 
// 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the 
// array.

// import webTechs from "./webTechs.js"

// for (let i = 0; i < webTechs.length; i++) {
//     if (webTechs.includes('Sass') == true) {
//         console.log('Sass is a CSS preprocess')
//     } else {
//         webTechs.push('Sass')
//         webTechs.reverse() 
//         console.log(webTechs)
//     }
// }

// EX6: Concatenate the following two variables and store it in a fullStack variable.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// const fullStack = frontEnd.concat(backEnd)
// console.log(fullStack)

// LV 3 

// EX1: The following is an array of 10 students ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// 1. Sort the array and find the min and max age
// 2. Find the median age(one middle item or two middle items divided by two)
// 3. Find the average age(all items divided by number of items)
// 4. Find the range of the ages(max minus min)
// 5. Compare the value of(min - average) and(max - average), use abs() method 1.
// Slice the first ten countries from the countries array

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// ages.sort()
// const minAges = 0
// const maxAges = ages.length - 1
// console.log(`Min age is ${ages[minAges]}`);
// console.log(`Max age is ${ages[maxAges]}`);

// console.log((ages.length - 1) / 2)
// const medianItem = (ages[4] + ages[5]) / 2

// console.log(`the Median age is ${medianItem}`);

// let sum = 0
// for (let index = 0; index < ages.length; index++) {
//     sum = sum + ages[index]
// }
// let averageAges = sum / ages.length
// console.log(averageAges);

// let minAverage = Math.abs(ages[minAges] - averageAges)
// console.log(minAverage)

// let maxAverage = Math.abs(ages[maxAges] - averageAges)
// console.log(maxAverage);
// let rangeOfAge = ages[maxAges] - ages[minAges]
// console.log(`the range of age is ${rangeOfAge}`);

// EX2: Slice the first ten countries from the countries array
// EX3: Find the middle country(ies) in the countries array

// import countries from "./country.js";
// // console.log(countries.slice(0, 10), countries);

// let middleCountry = (countries.length + 1) / 2
// console.log(middleCountry);

// EX4: Divide the countries array into two equal arrays if it is even. 
// If countries array is not even , one more country for the first half

// import countries from "./country.js";

// let semiArr = (countries.length + 1) / 2

// let firstArr = countries.splice(0, semiArr)
// let secondArr = countries
// console.log(firstArr, 'firstArr');
// console.log(secondArr, 'secondArr');