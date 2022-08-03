// let countries = [1, 2, 3, 4, 5, 6, 7]
// let newArr = []
// for (let i = 0; i < countries.length; i++) {
//     newArr.push(countries[i])
// }
// console.log(newArr);

// let i = 0
// while(i <= 5) {
//     console.log(i);
//     i++
// }

// let i = 1
// do {
//     console.log(i);
//     i++
// } while(i <= 10) 

// let numbers = [1, 2, 3, 4, 5]
// for(const num of numbers) {
//     console.log(num * num);
// }

// let sum = 0 
// for(const num of numbers) {
//     sum += num
// }
// console.log(sum);   

// for(let i = 0; i <= 5; i++) {
//     if(i == 3) {
//         continue
//     }
//     console.log(i);
// }

// EX1: Iterate 0 to 10 using for loop, do the same using while and do while loop

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// let i = 0

// while (i <= 10) {
//     console.log(i);
//     i++
// }

// do {
//     console.log(i);
//     i++
// } while(i <= 10)

// EX2: Iterate 10 to 0 using for loop, do the same using while and do while loop

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// i = 10
// while(i >= 0) {
//     console.log(i);
//     i--
// }

// i = 10
// do {
//     console.log(i);
//     i--
// } while (i >= 0)

// EX3: Iterate 0 to n using for loop

// let n = prompt(`Enter n:`)

// for(let i = 0; i <= n; i++) {
//     console.log(i);
// }

// EX4: Write a loop that makes the following pattern using console.log():\
// #
// ##
// ###
// ####
// #####
// ######
// #######

// let tag = '#'
// let sum = ''
// for(i = 0; i <= 7; i++) {
//     console.log(sum += tag);
// }


// EX5: Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

// for(i = 0; i <= 10; i++) {
//     console.log(`${i} x ${i} = ${i * i}`);
// }

// EX6: Using loop print the following pattern
// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000

// console.log(`i\t\ti^2\t\ti^3`);
// for (let i = 0; i <= 10; i++) {
//     console.log(`${i}\t\t${i * i}\t\t${i * i * i}`);
// }

// EX7: Use for loop to iterate from 0 to 100 and print only even numbers
// for(let i = 0; i <= 100; i++) {
//     if(i % 2 == 0) {
//         console.log(i);
//     }
// }

// EX8: Use for loop to iterate from 0 to 100 and print only odd numbers
// for(let i = 0; i <= 100; i++) {
//     if(i % 2 != 0) {
//         console.log(i);
//     }
// }

// EX9: Use for loop to iterate from 0 to 100 and print only prime numbers

// * determine prime number
// function determinePrimeNum(n) {
//     let flag = true
//     if (n < 2) {
//         flag = false
//     } else {
//         for (let i = 2; i < n - 1; i++) {
//             if (n % i == 0) {
//                 flag = false
//                 do {
//                     console.log(`${n} isn't a prime number`);
//                 } while (flag == false)
//                 break
//             } else {
//                 flag = true
//                 console.log(`${n} is a prime number`);
//             }
//         }
//     }
// }
// determinePrimeNum(7)

// function laSoNguyenTo(number){
//     for(let i = 2; i < number ; i ++){
//         if(number % i == 0) return false;
//     }
//     return true;
// }


// function inSoNguyenTo(range){
//     for(let number = 1; number < range ; number ++){
//         if(laSoNguyenTo(number)){
//             console.log(number);
//             console.log(" ");
//         }
//     }
// }
// inSoNguyenTo(100)

// =========================================================================
// function xacDinhSoNguyenTo(number) {
//     for(let i = 2; i < number; i++) {
//         if(number % i == 0) {
//             return false    
//         }
//     }
//     return true
// }


// function inRaSoNguyenTo() {
//     for(let number = 1; number <= 100; number++) {
//         // console.log(number);

//         if(xacDinhSoNguyenTo(number)) {
//             console.log(`${number} la so nguyen to`);
//         } 
//     }
// }
// inRaSoNguyenTo()

// EX10: Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// let sum = 0
// for(i = 0; i <= 100; i++) {
//     sum += i
// }
// console.log(sum);

// EX11: Use for loop to iterate from 0 to 100 and print the sum of all evens and
// the sum of all odds.
// let sumEven = 0
// let sumOdd = 0
// for(let i = 0; i <= 100; i++) {
//     if(i % 2 == 0) {
//         sumEven += i
//     } else {
//         sumOdd += i
//     }
// }
// console.log(sumEven);
// console.log(sumOdd);

// EX12: Use for loop to iterate from 0 to 100 and print the sum of all evens and the
// sum of all odds. Print sum of evens and sum of odds as array

// let arr = []
// let sumEven = 0
// let sumOdd = 0
// for(let i = 0; i <= 100; i++) {
//     if(i % 2 == 0) {
//         sumEven += i
//     } else {
//         sumOdd += i
//     }
// }
// arr.push(sumEven, sumOdd)
// console.log(arr);

// EX13: Develop a small script which generate array of 5 random numbers
// + EX14: and the numbers must be unique

// let arr = []
// for(i = 0; i < 5; i++) {
//     r = Math.random()
//     arr.push(r)
// }
// console.log(arr);

// EX15: Develop a small script which generate a six characters random id:

// let characters = `ABCDdxyz01234EefghijklmnopqrstuvwFGHIJKLMNOPQRSTUVWXYZabc56789`
// let result = ''
// for (let i = 0; i <= 5; i++) {
//     result += characters.charAt(Math.floor(Math.random() * 60))
// }
// console.log(result);
// ====================================================================================
// let characters = 'asdjhn12b456mfkletwoper7674iegketgh4354jiog654654d43290912shtjklhjgb32543dfsfkjenfs'
// let result = ''
// for(let i = 0; i < 6; i++) {
//     result += characters.charAt(Math.floor(Math.random() * 50))
// }    
// console.log(result);

// LV2

// EX1: Develop a small script which generate any number of characters random id:

// let characters = `ABCDdxyz01234EefghijklmnopqrstuvwFGHIJKLMNOPQRSTUVWXYZabc56789`
// let result = ''
// for (let i = 0; i < 10; i++) {
//     result += characters.charAt(Math.floor(Math.random() * 70))
// }
// console.log(result);

// EX2: Write a script which generates a random hexadecimal number

// let tag = '#'
// let hexadecimal = 'ABCDEF0123456789'
// let result = ''
// for(let i = 0; i < 6; i++) {
//     result += hexadecimal.charAt(Math.floor(Math.random() * 16))
// }
// let randHexadecimal = `${tag}${result}`
// console.log(randHexadecimal);

// EX3: Write a script which generates a random rgb color number
// let first = ''
// let second = ''
// let thirth = ''

// first += Math.floor(Math.random() * 256)
// second += Math.floor(Math.random() * 256)
// thirth += Math.floor(Math.random() * 256)

// let randomRGB = `rgb(${first},${second},${thirth})`
// console.log(randomRGB);

// EX4: Using the above countries array, create the following new array.

// import countries from "./country.js"
// let newArr = []
// for(let country of countries) {

//     let upperCountry = country.toUpperCase()
//     newArr.push(upperCountry)
// }
// console.log(newArr);

// EX5: Using the above countries array, create an array for countries length
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

// import countries from "./country.js";
// let newArr = []

// for(let country of countries) {
//     let pushCountryLengthToArr = country.length
//     newArr.push(pushCountryLengthToArr)
// }
// console.log(newArr);

// EX6: Use the countries array to create the following array of arrays:
// [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
//   ]

// import countries from "./country.js";

// let arr = []

// for(let country of countries) {
//     let acronymOfCountry = country.slice(0, 3).toUpperCase()
//     let lengthOfCountry = country.length
//     arr.push([country, acronymOfCountry, lengthOfCountry])
// }
// console.log(arr);

// EX7: In above countries array, check if there is a country or countries containing 
// the word 'land'. If there are countries containing 'land', print it as array. If 
// there is no country containing the word 'land', print 'All these countries are 
// without land'.
// ['Finland', 'Iceland']

// import countries from "./country.js";

// let arr = []
// for(let country of countries) {
//     if(country.includes('land') == true) {
//         arr.push(country)
//     } else {
//         console.log(`All these countries are without land`);
//     }
// }

// EX8: In above countries array, check if there is a country or countries end with a 
// substring 'ia'. If there are countries end with, print it as array. If there is no 
// country containing the word 'ai', print 'These are countries ends without ia'.

// import countries from "./country.js";

// let arr = []
// for(let country of countries) {
//     if(country.lastIndexOf('ia') != -1) {
//         arr.push(country)
//     } 
// }
// console.log(arr);

// EX9: Using the above countries array, find the country containing the biggest 
// number of characters.

// import countries from "./country.js";
// function longestWordOfCountries() {

//     for(let i = 0; i < countries.length; i++) {
//         var longestWord = countries[0].length
//         for(let j = 1; j < countries.length; j++) {
//             if(countries[j].length > longestWord) {
//                 longestWord = countries[j]
//             }
//         }
//         console.log(`The country with the most alphabetic characters is ${longestWord}`);
//     }
// }
// longestWordOfCountries()


// EX10: Using the above countries array, find the country containing only 5 characters.

// import countries from "./country.js";

// let arr = []
// for(let i = 0; i < countries.length; i++) {
//     if(countries[i].length == 5) {
//         arr.push(countries[i])
//     }
// }
// console.log(arr);

// EX11: Find the longest word in the webTechs array

// import webTechs from "./webTechs.js";

// function longestWordOfWebtechs() {

//     for(let i = 0; i < webTechs.length; i++) {
//         var longestWord = webTechs[0].length
//         for(let j = 1; j < webTechs.length; j++) {
//             if(webTechs[j].length > longestWord) {
//                 longestWord = webTechs[j]
//             }
//         }
//         console.log(longestWord);
//     }
// }
// longestWordOfWebtechs()

// EX12: Use the webTechs array to create the following array of arrays:
// [
// ["HTML", 4], ["CSS", 3], ["JavaScript", 10],
// ["React", 5], ["Redux", 5], ["Node", 4],
// ["MongoDB", 7]
// ]

// import webTechs from "./webTechs.js";
// let arr = []
// for(let i = 0; i < webTechs.length; i++) {
//     let wordLength = webTechs[i].length
//     arr.push([webTechs[i], wordLength])
// }
// console.log(arr);

// EX13: An application created using MongoDB, Express, React and Node is called a MERN 
// stack app. Create the acronym MERN by using the array mernStack

// let mernStack = ['MongoDB', 'Express', 'React', 'Node']

// let mernAcronym = ''
// for(let i = 0; i < 1; i++) {
//     var mernAcronymFirst = mernStack[0].slice(0, 1)
//     var mernAcronymSecond = mernStack[1].slice(0, 1)
//     var mernAcronymThirth = mernStack[2].slice(0, 1)
//     var mernAcronymFourth = mernStack[3].slice(0, 1)
//     mernAcronym += mernAcronymFirst + mernAcronymSecond + mernAcronymThirth + mernAcronymFourth
// }
// console.log(mernAcronym);

// EX14: Iterate through the array, 
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] 
// using a for loop or for of loop and print out the items.

// import webTechs from "./webTechs.js";

// for(let webTech of webTechs) {
//     console.log(webTech);
// }

// EX15: This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order 
// using loop without using a reverse method.

// let fruits = ['banana', 'orange', 'mango', 'lemon']

// for(let i = fruits.length - 1; i >= 0; i--) {
//     console.log(fruits[i]) 
// }

// EX16: Print all the elements of array as shown below

// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
// ]
// for(let i = 0; i < fullStack.length; i++) {
//     console.log(fullStack[i].concat(fullStack[i+1]).join());
// }

                                    // LV3
// EX1: Copy countries array(Avoid mutation)

// import countries from "./country.js";
// let copyArr = []
// for(let i = 0; i < countries.length; i++) {
//     copyArr.push(countries[i])
// }
// console.log('originalArr', countries);
// console.log('copyArr', copyArr);


// EX2: Arrays are mutable. Create a copy of array which does not modify the original. 
// Sort the copied array and store in a variable sortedCountries

// import countries from "./country.js";

// let sortedCountries
// let copyArr = []
// for(let i = 0; i < countries.length; i++) {
//     copyArr.push(countries[i])
//     sortedCountries = copyArr
// }
// console.log(sortedCountries);

// EX3: Sort the webTechs array

// import webTechs from "./webTechs.js";
// console.log(webTechs.sort())

// EX4: Extract all the countries contain the word 'land' from the countries array and 
// print it as array

// import countries from './countries.js'
// let arr = []
// for(let i = 0; i < countries.length; i++) {
//     if(countries[i].includes('land') == true) {
//         arr.push(countries[i])
//     }
// }
// console.log(arr);

// EX5: Find the country containing the hightest number of characters in the countries 
// array

// import countries from "./countries.js";

// let maxLength = 0;
// let maxName = "";
// for(let i = 0; i < countries.length; i++) {
//      if(maxLength < countries[i].length){
//         maxLength = countries[i].length;
//         maxName = countries[i];
//      }
// }
// console.log(maxName)
// console.log(maxLength)

// EX6 like EX4

// EX7: Extract all the countries containing only four characters from the countries array 
// and print it as array

// import countries from "./countries.js";

// let arr = []
// for(let i = 0; i < countries.length; i++) {
//     if(countries[i].length == 4) {
//         arr.push(countries[i])
//     }
// }
// console.log(arr);

// EX8: Extract all the countries containing two or more words from the countries array and 
// print it as array

// import countries from "./countries.js";

// let arr = []
// for(let i = 0; i < countries.length; i++) {
//     if(countries[i].includes(' ') == true) {
//         arr.push(countries[i])
//     }
// }
// console.log(arr);

// EX9: Reverse the countries array and capitalize each country and stored it as an array

// import countries from './countries.js'
// let ortherArr = []
// for(let i = 0; i < countries.length; i++) {
//     ortherArr.push(countries[i].toUpperCase())
// }
// console.log(ortherArr.reverse());
