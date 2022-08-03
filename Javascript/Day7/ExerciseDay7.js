// function sumAllNums() {
//     let sum = 0
//     for(let i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     return sum
// }
// console.log(sumAllNums(1, 2, 3, 4))

// const sumAllNums = (...args) => {
//     console.log(args);
// }
// sumAllNums(1, 2, 3, 4, 5)

// const anonymousFunc = function() {
//     console.log(
//         `I am an anonymous function and my value is stored in anonymousFunc`
//     );
// }
// anonymousFunc()

// const square = function(n) {
//     return n * n
// }
// console.log(square(2));

// (function(n) {
//     console.log(n * n);
// })(3)

// let squareNum = (function(n) {
//     return n * n
// })(4)
// console.log(squareNum);

// const changeToUpperCase = arr => {
//     const newArr = []
//     for (const element of arr) {
//         newArr.push(element.toUpperCase())
//     }
//     return newArr
// }
// const countries = ['findland', 'sweden', 'norway', 'denmark', 'iceland']
// console.log(changeToUpperCase(countries));

// function generateFullName(firstName = 'Asabehne' ,lastName = 'Yetayeh') {
//     let space = ' '
//     let fullName = firstName + space + lastName
//     return fullName
// }
// console.log(generateFullName())
// console.log(generateFullName('David', 'Smith'))

// function calculateAge(birthYear, currentYear = 2019) {
//     let age = currentYear - birthYear
//     return age
// }
// console.log('Age: ', calculateAge(1819));

// function weightOfObject(mass, gravity = 9.81) {
//     let weight = mass * gravity + ' N'
//     return weight
// }
// console.log('Weight of an object in Newton: ', weightOfObject(100));

// const greatings = (name = 'Peter') => {
//     let message = name + ' , welcome to 30 days of JavaScript'
//     return message
// }
// console.log(greatings());
// console.log(greatings('Ronaldo'));

// ==================================================================================================
// EX1: Declare a function fullName and it print out your full name.
// ==================================================================================================

// function fullName() {
//     let firstName = 'Nguyen'
//     let space = ' '
//     let lastName = 'Thien An'
//     let fullName = firstName + space + lastName
//     return fullName
// }
// console.log(fullName());

// ==================================================================================================
// EX2: Declare a function fullName and now it takes firstName, lastName
// as a parameter and it returns your full - name.
// ==================================================================================================

// function fullName(firstName, lastName) {
//     let space = ' '
//     let fullName = firstName + space + lastName
//     return fullName
// }
// console.log(fullName('Nguyen', 'Thien An'));

// ==================================================================================================
// EX3: Declare a function addNumbers and it takes two two parameters and it returns sum.
// ==================================================================================================

// const addNumbers = (num1, num2) => {
//     let sum = num1 + num2
//     return sum
// }
// console.log(addNumbers(5, 7));

// ==================================================================================================
// EX4: An area of a rectangle is calculated as follows: area = length x width.
// Write a function which calculates areaOfRectangle.
// ==================================================================================================

// function areaOfRectangle(width, height) {
//     let area = width * height
//     return area
// }
// console.log(areaOfRectangle(5, 3));

// ==================================================================================================
// EX5: A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width).
// Write a function which calculates perimeterOfRectangle
// ==================================================================================================

// const perimeterOfRec = (width, length) => {
//     let perimeter = 2 * (width + length)
//     return perimeter
// }
// console.log(perimeterOfRec(10, 5));

// ==================================================================================================
// EX6: A volume of a rectangular prism is calculated as follows:
// volume = length x width x height. Write a function which calculates volumeOfRectPrism
// ==================================================================================================

// const volumeOfRec = function(width, length, height) {
//     let volume = width * length * height
//     return volume
// }
// console.log(volumeOfRec(3, 4, 5));

// ==================================================================================================
// EX7: Area of a circle is calculated as follows: area = π x r x r.
// Write a function which calculates areaOfCircle
// ==================================================================================================

// function areaOfCircle(r) {
//     let area = Math.PI * r * r
//     return area
// }
// console.log(areaOfCircle(5));

// ==================================================================================================
// EX8: Circumference of a circle is calculated as follows: circumference = 2πr.
// Write a function which calculates circumOfCircle
// ==================================================================================================

// const circumferenceOfCircle = (r) => {
//     let circumference = 2 * Math.PI * r
//     return circumference
// }
// console.log(circumferenceOfCircle(6));

// ==================================================================================================
// EX9: Density of a substance is calculated as follows:density= mass/volume.
// Write a function which calculates density.
// ==================================================================================================

// function densityOfSubstance(mass, volume) {
//     let density = mass / volume
//     return density
// }
// console.log(densityOfSubstance(10, 5));

// ==================================================================================================
// EX10: Speed is calculated by dividing the total distance covered by a moving object
// divided by the total amount of time taken. Write a function which calculates a
// speed of a moving object, speed
// ==================================================================================================

// const speed = (distance, time) => {
//     let speed = distance / time
//     return speed
// }
// console.log(speed(25, 5))

// ==================================================================================================
// EX11: Weight of a substance is calculated as follows: weight = mass x gravity.
// Write a function which calculates weight.
// ==================================================================================================

// function weightOfSubstance(mass, gravity = 9.81) {
//     let weight = mass * gravity
//     return weight
// }
// console.log(weightOfSubstance(10));

// ==================================================================================================
// EX12: Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32.
// Write a function which convert oC to oF convertCelciusToFahrenheit.
// ==================================================================================================

// const oCConvertOF = (oC) => {
//     let oF = (oC * 9/5) + 32
//     return oF
// }
// console.log(oCConvertOF(28));

// ==================================================================================================
// EX13: Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height)
// in m2. Write a function which calculates bmi. BMI is used to broadly define different
// weight groups in adults 20 years old or older.Check if a person is underweight, normal,
// overweight or obese based the information given below.
// ==================================================================================================


// function classifyBmi(weight, height) {
//     var bmi = weight / (height * height)
//     console.log(`You bmi is ${bmi}`);
//     if (bmi < 18.5) {
//         console.log(`Underweight`)
//     }
//     if (bmi >= 18.5 && bmi < 25) {
//         console.log(`Normal weight`)
//     }
//     if (bmi >= 25 && bmi < 30) {
//         console.log(`Overweight`)
//     }
//     if (bmi >= 30) {
//         console.log(`Obese`)
//     }
// }
// classifyBmi(63, 1.77)

// ==================================================================================================
// EX14: Write a function called checkSeason, it takes a month parameter and returns the
// season:Autumn, Winter, Spring or Summer.
// ==================================================================================================

// function checkSeason(month) {
//      month = month.toLowerCase()
//     if (month == 'january' || month == 'february' || month == 'march') {
//         console.log(`It's the Spring now`);
//     } else if (month == 'april' || month == 'may' || month == 'june') {
//         console.log(`It's the Summer now`);
//     } else if (month == 'july' || month == 'august' || month == ' september') {
//         console.log(`It's the Autumn now`);
//     } else if (month == 'october', month == 'november', month == 'december') {
//         console.log(`It's the Winter now`);
//     } else {
//         console.log(`Please enter the season`);
//     }
// }
// console.log(checkSeason('June'));

// ==================================================================================================
// EX15: Math.max returns its largest argument. Write a function findMax that takes three
// arguments and returns their maximum with out using Math.max method
// ==================================================================================================

// const findMax = (num1, num2, num3) => {
//     result = Math.max(num1, num2, num3)
//     return `${result} is the maximum value`
// }
// console.log(findMax(10, 30, 25));

// ==================================================================================================
// ==================================================================================================
//                                              LV2
// ==================================================================================================
// EX1: Linear equation is calculated as follows: ax + by + c = 0. Write a function which
// calculates value of a linear equation, solveLinEquation.
// ==================================================================================================

// let x
// let y
// function solveLinEquation(a, b, c) {
//     if (a != 0 && b == 0) {
//         x = c / a
//         console.log(`${x}`);
//     } else if (a == 0 && b != 0) {
//         y = c / b
//         console.log(`${y}`);
//     } else if (a != 0 && b != 0) {
//         console.log(`y = ${-a / b} * x + ${c / b}`);
//     }
// }
// console.log(solveLinEquation(5, 3, 2));

// ==================================================================================================
// EX2: Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which
// calculates value or values of a quadratic equation, solveQuadEquation.
// ==================================================================================================

// let x, x1, x2, y
// function solveQuadEquation(a, b, c) {
//     let delta = Math.pow(b, 2) - (4 * a * c)
//     if (delta < 0) {
//         console.log(`the equation has no solution`);
//     } else if (delta == 0) {
//         x = -b / (2 * a)
//         console.log(`{${x}}`);
//     } else if (delta > 0) {
//         x1 = (-b + Math.sqrt(delta)) / (2 * a)
//         x2 = (-b - Math.sqrt(delta)) / (2 * a)
//         console.log(`{${x1}, ${x2}}`);
//     }
// }
// console.log(solveQuadEquation(2, 4, 2));

// ==================================================================================================
// EX3: Declare a function name printArray. It takes array as a parameter and it prints out
// each value of the array.
// ==================================================================================================

// function printArray(arr) {
//     arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//     return arr;
// }
// console.log(printArray());

// ==================================================================================================
// EX4: Write a function name showDateTime which shows time in this format: 08/01/2020 04:08
// using the Date object.
// ==================================================================================================

// let year = new Date().getFullYear()
// let month = new Date().getMonth()
// let day = new Date().getDay()
// let hour = new Date().getHours()
// let minute = new Date().getMinutes()

// function showDateTime() {
//     if (day < 10) {
//         day = '0' + day
//     }
//     if (month < 10) {
//         month = '0' + month
//     }
//     if (hour < 10) {
//         hour = '0' + hour
//     }
//     if (minute < 10) {
//         minute = '0' + minute
//     }
//     console.log(`${day}/${month}/${year} ${hour}:${minute}`);
// }
// console.log(showDateTime());

// ==================================================================================================
// EX5: Declare a function name swapValues. This function swaps value of x to y.
// ==================================================================================================

// function swapValues(x, y) {
//     let temp
//     temp = x
//     x = y
//     y = temp
//     return console.log(`${x}, ${y}`);
// }
// swapValues(3, 4)

// ==================================================================================================
// EX6: Declare a function name reverseArray. It takes array as a parameter and it returns
// the reverse of the array (don't use method)
// ==================================================================================================

// let newArr = []
// function reverseArray(...arr) {
//     for(let ele of arr) {
//         newArr.push(ele)
//     }
//     console.log(newArr);
// }
// reverseArray(2, 3, 4, 5, 6, 7)

// ==================================================================================================
// EX7: Declare a function name capitalizeArray. It takes array as a parameter and it returns
// the - capitalizedarray.
// ==================================================================================================

// function capitalizeArray(...arr) {
//     let capitalizedarray = []
//     for(let ele of arr) {
//         capitalizedarray.push(ele)
//     }
//     return capitalizedarray
// }
// console.log(capitalizeArray(1, 2, 3, 4, 5, 67,));

// ==================================================================================================
// EX8: Declare a function name addItem. It takes an item parameter and it returns an array
// after adding the item
// ==================================================================================================

// function addItem(...item) {
//     let arr = []
//     for(let ele of item) {
//         arr.push(ele)
//     }
//     return arr
// }
// console.log(addItem(1, 2, 4, 5, 6, 8));

// ==================================================================================================
// EX9: Declare a function name removeItem. It takes an index parameter and it returns an array
// after removing an item
// ==================================================================================================

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// const removeItem = (id) => {
//     for(let i = 0; i < arr.length; i++) {
//         if(id == arr[i]) {
//             arr.splice(id, 1)
//             console.log(arr);
//         }
//     }
// }
// removeItem(4)

// ==================================================================================================
// EX10: Declare a function name sumOfNumbers. It takes a number parameter and it adds all the
// numbers in that range.
// ==================================================================================================

// function sumOfNumbers(number) {
// let sum = 0
//     for(let i = 0; i <= number; i++) {
//         sum += i
//     }
//     return console.log(sum);
// }
// sumOfNumbers(10)

// ==================================================================================================
// EX11: Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd
// numbers in that - range.
// ==================================================================================================

// function sumOfOdds(number) {
//     let sum = 0
//     for(let i = 0; i <= number; i++) {
//         if(i % 2 != 0) {
//             sum += i
//         }
//     }
//     return console.log(sum);
// }
// sumOfOdds(10)

// ==================================================================================================
// EX12: Declare a function name sumOfEven. It takes a number parameter and it adds all the even
// numbers in that - range.
// ==================================================================================================

// function sumOfEven(number) {
//     let sum = 0
//     for(let i = 0; i <= number; i++) {
//         if(i % 2 == 0) {
//             sum += i
//         }
//     }
//     return console.log(sum)
// }
// sumOfEven(10)

// ==================================================================================================
// EX13: Declare a function name evensAndOdds. It takes a positive integer as parameter and it counts
// number of evens and odds in the number.
// ==================================================================================================

// function evensAndOdds(number) {
//     let countEven = 0
//     let countOdd = 0
//     for (let i = 0; i <= number; i++) {
//         if (i % 2 == 0) {
//             countEven++
//         } else {
//             countOdd++
//         }
//     }
//     return console.log(`number of evens is ${countEven}\nnumber of odds is ${countOdd}`);
// }
// console.log(evensAndOdds(100));

// ==================================================================================================
// EX14: Write a function which takes any number of arguments and return the sum of the arguments
// ==================================================================================================

// function sumOfNum(...args) {
//     let sum = 0;
//     for (let ele of args) {
//       sum += ele
//     }
//     return sum
//   }
// console.log(sumOfNum(1, 2, 3, 4, 5, 6))

// ==================================================================================================
// EX15: Write a function which generates a randomUserIp.
// ==================================================================================================

// function randomUserIp() {
//     let characters = 'ABCDEF0123456789GHIJKLMN0123456789OPQRSTUVWXYz0123456789abcdefghiklmnopqr0123456789stuvwxyz'
//     result = ''
//     for(let i = 0; i < 6; i++) {
//         result += characters.charAt(Math.floor(Math.random() * 91))
//     }
//     return result
// }
// console.log(randomUserIp())

// ==================================================================================================
// EX16: Write a function which generates a randomMacAddress
// ==================================================================================================

// function randomMacAddress() {
//     let characters = 'abcdef0123456789ghiklmn0123456789opqrstuvwxy01234567890123456789'
//     result = ''
//     result2 = ''
//     result3 = ''
//     result4 = ''
//     result5 = ''
//     result6 = ''
//     for(let i = 0; i < 2; i++) {
//         result += characters.charAt(Math.floor(Math.random() * 65))
//         result2 += characters.charAt(Math.floor(Math.random() * 65))
//         result3 += characters.charAt(Math.floor(Math.random() * 65))
//         result4 += characters.charAt(Math.floor(Math.random() * 65))
//         result5 += characters.charAt(Math.floor(Math.random() * 65))
//         result6 += characters.charAt(Math.floor(Math.random() * 65))
//     }
//     return `${result}-${result2}-${result3}-${result4}-${result5}-${result6}`
// }
// console.log(randomMacAddress())

// ==================================================================================================
// EX17: Declare a function name randomHexaNumberGenerator. When this function is called it
// generates a random hexadecimal number. The function return the hexadecimal number.
// ==================================================================================================


// function randomHexaNumberGenerator() {
//     let result = ''
//     let charactersHexa = 'a012bc345def6789'
//     for(let i = 0; i < 6; i++) {
//         result += charactersHexa.charAt(Math.floor(Math.random() * 16))
//     }
//     return `#${result}`
// }
// console.log(randomHexaNumberGenerator())

// ==================================================================================================
// EX18: Declare a function name userIdGenerator. When this function is called it generates seven
// character id. The function return the id.
// ==================================================================================================

// function userIdGenerator() {
//     let characters = 'ABCDEF0123456789GHIJKLMN0123456789OPQRSTUVWXYz0123456789abcdefghiklmnopqr0123456789stuvwxyz'
//     result = ''
//     for(let i = 0; i < 7; i++) {
//         result += characters.charAt(Math.floor(Math.random() * 91))
//     }
//     return result
// }
// console.log(userIdGenerator())

// ==================================================================================================
// LV3
// ==================================================================================================
// ==================================================================================================
// EX1: Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any 
// parameter but it takes two inputs using prompt(). One of the input is the number of characters and 
// the second input is the number of ids which are supposed to be generated.
// ==================================================================================================

// let numCharacters = prompt(`Enter number of characters you want to create`)
// let numOfId = prompt('Enter number of ID')

// function userIdGeneratedByUser() {
//     let result = ''
//     let characters = 'ABCDEFG4567HIK89LMNOPQUVWXYZ0123456789abcdefghiklm0123nopquvwxyz'
//     for(let i = 0; i < numCharacters; i++) {
//         result += characters.charAt(Math.floor(Math.random() * 64))
//     }
//     return `ID(${numOfId}): ${result}`
// }
// console.log(userIdGeneratedByUser())

// ==================================================================================================
// EX2: Write a function name rgbColorGenerator and it generates rgb colors.
// ==================================================================================================

// function rgbColorGenerator() {
//     let r = Math.floor(Math.random() * 265)
//     let g = Math.floor(Math.random() * 265)
//     let b = Math.floor(Math.random() * 265)
//     if(r > 10 && r < 100) {
//         r = '0' + r
//     } else if(r < 10) {
//         r = '00' + r
//     }
//     if(g > 10 && g < 100) {
//         g = '0' + g
//     } else if(g < 10) {
//         g = '00' + g
//     }
//     if(b > 10 && b < 100) {
//         b = '0' + b
//     } else if(b < 10) {
//         b = '00' + b
//     }
//     return `rgb(${r},${g},${b})`
// }
// console.log(rgbColorGenerator());

// ==================================================================================================
// EX3: Write a function arrayOfHexaColors which return any number of hexadecimal 
// colors in an array.
// ==================================================================================================

// let arr = []
// function arrayOfHexaColors(...numHexa) {
//     let characters = 'abcdef0123456789'
//     for(let i = 0; i < numHexa.length; i++) {  
//         for(let j = 0; j < 6; j++) {
//             numHexa[i] += characters.charAt(Math.floor(Math.random() * 16))
//         }
//     }
//     return `${numHexa}`
// }
// console.log(arrayOfHexaColors('#', '#', '#', '#', '#'));

// ==================================================================================================
// EX4: Write a function arrayOfRgbColors which return any number of RGB colors in an array
// ==================================================================================================

// function arrayOfHexaColors(...numRgb) {
//     for (let i = 0; i < numRgb.length; i++) {
//             r = Math.floor(Math.random() * 256)
//             b = Math.floor(Math.random() * 256)
//             g = Math.floor(Math.random() * 256)
//             numRgb[i] = `rgb(${r},${g},${b})`
//     }
//     return numRgb
// }
// console.log(arrayOfHexaColors(1, 2, 3, 4));

// ==================================================================================================
// EX5: Write a function convertHexaToRgb which converts hexa color to rgb and it returns an 
// rgb color.
// ==================================================================================================

// function convertHexaToRgb() {

// }

// function rgbToHex(r, g, b) {
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }

//   alert(rgbToHex(255, 255, 255));

// ==================================================================================================
// EX6: Write a function convertRgbToHexa which converts rgb to hexa color and it returns an 
// hexa color.
// ==================================================================================================

// ==================================================================================================
// EX7: Write a function generateColors which can generate any number of hexa or rgb colors.
// ==================================================================================================

// function generateColors(type, quantity) {
//     if (type == 'hexa') {
//         let character = 'abcdef0123456789'
//         let arr = []
//         for (let i = 0; i < quantity; i++) {
//             let result = ''
//             for (let j = 0; j < 6; j++) {
//                 result += character.charAt(Math.floor(Math.random() * 16))
//             }
//             arr.push([`#${result}`])
//         }
//         console.log(arr);
//     } else if (type == 'rgb') {
//         let arr = []
//         for (let i = 0; i < quantity; i++) {
//             let r = Math.floor(Math.random() * 256)
//             let g = Math.floor(Math.random() * 256)
//             let b = Math.floor(Math.random() * 256)
//             arr.push(`rgb(${r},${g},${b})`)
//         }
//         console.log(arr);
//     }
// }
// generateColors('hexa', 5)

// ==================================================================================================
// EX8: Call your function shuffleArray, it takes an array as a parameter and it returns a 
// shuffled array
// ==================================================================================================

// function shuffleArray(arr) {
//     arr = arr.sort(() => Math.random() - 0.5)
//     return arr
// }
// console.log(shuffleArray([1, 2, 3, 4, 5]))

// ==================================================================================================
// EX9: Call your function factorial, it takes a whole number as a parameter and it return a 
// factorial of the number
// ==================================================================================================

// function factorial(n) {
//     let factorial = 1
//     for(let i = n; i > 0; i--) {
//         factorial *= i
//     }
//     return console.log(factorial);
// }
// factorial(4)

// ==================================================================================================
// EX10: Call your function isEmpty, it takes a parameter and it checks if it is empty or not
// ==================================================================================================

// let param 
// function isEmpty(param) {
//     if(param) {
//         console.log(`this param isn't empty`);
//     } else {
//         console.log(`this param is empty`);
//     }
// }
// isEmpty(param)

// ==================================================================================================
// EX11: Call your function sum, it takes any number of arguments and it returns the sum.
// ==================================================================================================

// function sum(...args) {
//     let sum = 0
//     for(let i = 0; i < args.length; i++) {
//         sum += args[i]
//     }
//     console.log(sum);
// }
// sum(2, 4, 5, 6, 7)

// ==================================================================================================
// EX12: Write a function called sumOfArrayItems, it takes an array parameter and return the sum 
// of all the items. Check if all the array items are number types. If not give return reasonable 
// feedback.
// ==================================================================================================

// function sumOfArrayItems(arr) {
//     let sum = 0
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     console.log(sum);
// }
// sumOfArrayItems([1, 2, 3, 4, 5, 6])

// ==================================================================================================
// EX13: Write a function called average, it takes an array parameter and returns the average of 
// the items. Check if all the array items are number types. If not give return reasonable feedback.
// ==================================================================================================

// const average = (arr) => {
//     let count = 0
//     let sum = 0
//     let average = 0
//     for(let i = 0; i < arr.length; i++) {
//         count++
//         sum += arr[i]
//         average = sum / count
//     }
//     console.log(average);
// }
// console.log(average([1, 2, 3, 4, 5, 6]));

// ==================================================================================================
// EX14: Write a function called modifyArray takes array as parameter and modifies the fifth item of 
// the array and return the array. If the array length is less than five it return 'item not found'.
// ==================================================================================================

// function modifyArray(arr) {
//     if (arr.length > 5) {
//         for (let i = 0; i < arr.length; i++) {
//             if(i == 4) {
//                 arr[i] = arr[i].toUpperCase()
//                 console.log(arr[i]);
//             }
//         }
//         console.log(arr);
//     } else {
//         console.log(`item not found`);
//     }
// }
// modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot'])

// ==================================================================================================
// EX15: Write a function called isPrime, which checks if a number is prime number.
// ==================================================================================================

// function isPrime(n) {
//         for(let i = 2; i < n; i++) {
//             if(n % i == 0) {
//                 console.log(`${n} isn't prime`);
//                 break
//             } else {
//                 console.log(`${n} is prime`);
//             }
//         }
//     }

// isPrime(11)