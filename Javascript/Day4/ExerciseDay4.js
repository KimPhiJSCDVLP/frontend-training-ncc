// // DATA TYPES

// // Primitive data types
// let numOne = 3
// let numTwo = 3
// console.log(numOne == numTwo) // true

// let js = 'javascript'
// let pt = 'python'
// console.log(js == pt); // false

// let lightOn = true
// let lightOff = false
// console.log(lightOn = lightOff) // true

// // Non primitive data types
// let nums = [1,2,3]
// nums[0] = 10
// console.log(nums); [10, 2, 3]

// let nums = [1, 2, 3]
// let numbers = [1, 2, 3]
// console.log(nums == numbers) // false

// let userOne = {
//     name: 'Asabeneh',
//     role: 'teaching',
//     country: 'Finland'
// }

// let userTwo = {
//     name: 'Asabeneh',
//     role: 'teaching',
//     country: 'Finland'
// }
// console.log(userOne == userTwo) // false

// let nums = [1, 2, 3]
// let numbers = nums
// console.log(nums = numbers) // true

// let userOne = {
//     name: 'Asabeneh',
//     role: 'teaching',
//     country: 'Finland'
// }
// let userTwo = userOne
// console.log(userOne == userTwo) // true

// // NUMBER

// // Declairing number data types
// let age = 35 // can change
// const gravity = 9.81 // can't change
// let mass = 71 // can change
// const PI = 3.14 // can't change
// // More example
// const boilingPoint = 100 // boiling point of water which is a constant
// const bodyTemp = 37 // can't change

// // Math object
// const PI = Math.PI
// // console.log(PI) // output: 3.141592...
// console.log(Math.round(PI)) // output: 3 to round values to the nearest number, output = 3
// console.log(Math.round(9.81)) // output: 10
// console.log(Math.floor(PI)) // 3 rounding down
// console.log(Math.ceil(PI)) // 4 rounding up 
// console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, return the minimum value
// console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, return the maximum value
// const randNum = Math.random() // create random number between 0 to 0.9999999
// // let us create random number between 0 to 9.999999
// console.log(randNum)
// // create random number between 0 to 10
// const randNum = Math.ceil(Math.random() * 10)
// console.log(randNum)
// // Absolute value
// console.log(Math.abs(-10)) // 10
// // Square root
// console.log(Math.sqrt(100)) // 10
// console.log(Math.sqrt(2)) // 1.41421356...
// // Power
// console.log(Math.pow(3, 2)) // 9
// console.log(Math.E) // output: 2.718
// // Logarithm
// // Return the natural logarithm with base E of x, Math.log(X)
// console.log(Math.log(2)) // 0.69314718...
// console.log(Math.log(10)) // 2.302585...
// // Trigonometry 
// Math.sin(0)
// Math.cos(60)
// Math.tan(60)

// // STRING
// let space = ' ' // an empty space string
// let firstName = 'Asabehne'
// let lastName = 'Yetayeh'
// let country = 'Finland'
// let city = 'Helsinki'
// let age = 20
// let language = 'Javascript'
// let job = 'teacher'
// let quote = "The saying, 'seeing in...'" 
// let quoteWithBackTick = `The saying, 'seeing in...'` 
// // String concatenation
// let fullName = firstName + space + lastName
// console.log(fullName) // output: Asabehne Yetayeh
// Concatenating Using Addition Operator
// let fullName = firstName + space + lastName
// let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country
// console.log(personInfoOne) // output: abc xyz. I am 20. I live in Finland
// Long literal strings
// const paragraph = "fjsagiosfejifwejmfeopfjsdofjrogriogojdpathienhtiwfejrghtidrthienhtiefjlsfke"
// console.log(paragraph) // output: fjsagiosfejifwejmfeopfjsdofjrogriogojdpathienhtiwfejrghtidrthienhtiefjlsfke
// // Escape Sequences in Strings
// console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
// console.log('Days\tTopics\tExercises')
// console.log('Day 1\t3\t5')
// console.log('Day 2\t3\t5')
// console.log('Day 3\t3\t5')
// console.log('Day 4\t3\t5')
// console.log('This is a backslash  symbol (\\)') // To write a backslash
// console.log('In every programming language it starts with \"Hello, World!\"')
// console.log("In every programming language it starts with \'Hello, World!\'")
// console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
// Template Literals (Template Strings).
// `String literal text`
// const expression = 'abcdef'
// console.log(`String literal text ${expression}`)
// console.log(`The sum of 2 and 3 is 5`)
// let a = 2
// let b = 3
// console.log(`The sum of ${a} and ${b} is ${a + b}`)
// let a = 2
// let b = 3
// console.log(`${a} is greater than ${b}: ${a > b}`) // output: 2 is greater than 3: false

// STRING METHOD

// Length.
// let js = 'Javascript'
// console.log(js.length) // 10
// let firstName = 'Asabeneh'
// console.log(firstName.length) // 8
// Accessing characters.
// let string = `Javascript`
// let firstCharacter = string[0] 
// console.log(firstCharacter) // output: J
// let secondLetter = string[1]
// let thirdLetter = string[2]
// let fourthLetter = string[9]
// console.log(fourthLetter) // op: t
// let lastIndex = string.length - 1
// console.log(lastIndex) // 9 
// console.log(string[lastIndex]) // op: t
// // toUpperCase.
// let string = 'Javascript'
// console.log(string.toUpperCase()) // output: JAVASCRIPT
// // toLowerCase.
// console.log(string.toLowerCase()) // output: javascript
// substr.
// let string = 'JavaScript'
// console.log(string.substr(4,6)) // output: Script
// let country = 'Finland'
// console.log(country.substr(3, 4))   // land
// substring.
// let string = 'JavaScript'
// console.log(string.substring(0, 4)) // Java
// console.log(string.substring(4, 10)) // Script
// console.log(string.substring(4)) // Java
// split().
// let string = '30 days of JavaScript'
// console.log(string.split()) // output: ['30 days of JavaScript']
// console.log(string.split(' ')) // output: ['30', 'days', 'of', 'JavaScript']
// let firstName = 'Asabeneh'
// console.log(firstName.split()) // output: ['Asabeneh']
// console.log(firstName.split('')) // output: ['A', 's', 'b', 'e',...]
// let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
// console.log(countries.split(',')) // output: ['Findland', ' Sweden', ' Norway',...]
// console.log(countries.split(', ')) // output: ['Findland', 'Sweden', 'Norway',...]
// trim().
// let string = '   30 days of JavaScript   '
// console.log(string) // output:    30 days of JavaScript   
// console.log(string.trim(' ')) // output:30 days of JavaScript   
// let firstName = ' Asabeneh '
// console.log(firstName) // output: Asabeneh 
// console.log(firstName.trim()) // output:Asabeneh 
// includes().
// let string = '30 days of JavaScript'
// console.log(string.includes('days')) // output: true
// console.log(string.includes('Days')) // output: false 
// console.log(string.includes('Script')) // output: true 
// console.log(string.includes('script')) // output: false 
// replace.
// string.replace(oldsubstring, newsubstring)
// let string = '30 days of JavaScript'
// console.log(string.replace('JavaScript', 'Python')) // output: 30 days of Python
// let country = 'Findland'
// console.log(country.replace('land', 'Index')) // output: FindIndex
// charAt().
// string.charAt(index)
// let string = '30 days of JavaScript'
// console.log(string.charAt(3)) // output: d
// let lastIndex = string.length - 1
// console.log(string.charAt(lastIndex)) // output: t
// charCodeAt()
// string.charCodeAt(index)
// let string = '30 days of JavaScript'
// console.log(string.charCodeAt(3)) // D ASCII number is 68
// let lastIndex = string.length - 1
// console.log(string.charCodeAt(lastIndex)) // x ASCII number is 116
// indexOf()
// String.indexOf(substring)
// let string = '30 days of JavaScript'
// console.log(string.indexOf('d')) // output: 3
// console.log(string.indexOf('days')) // output: 3
// console.log(string.indexOf('Days')) // output: -1
// console.log(string.indexOf('JavaScript')) // output: 11
// lastIndexOf()
// string.lastIndexOf(substring)
// let string = 'I love JavaScript. If you do not love JavaScript what else can you love'
// console.log(string.lastIndexOf('JavaScript')) // 38
// console.log(string.lastIndexOf('love')) // 67
// console.log(string.lastIndexOf('you')) // 63
// concat()
// string.concat(substring, substring, substring)
// let string = '30'
// console.log(string.concat(" days", " of", " JavaScript")) // output: 30 days of JavaScript
// startsWith()
// string.startsWith(substring)
// let string = 'Love is the best to in this world'
// console.log(string.startsWith('Love'))
// console.log(string.startsWith('love'))
// console.log(string.startsWith('world'))
// endsWith()
// String.endsWith(substring)
// let string = 'a b c d e f g h i j k l m'
// console.log(string.endsWith('a')) // output: false
// console.log(string.endsWith('l')) // output: false
// console.log(string.endsWith('m')) // output: true
// search
// string.search(substring)
// let string = ('a b c d e f ... x y z')
// console.log(string.search('c')) // output: 4
// console.log(string.search('z')) // output: 20
// console.log(string.search('f')) // output: 10
// match
// let string = 'love'
// let partternOne = /love/
// let partternTwo = /love/gi
// string.match(substring)
// let string = 'I love JavaScript. If you do not love JavaScript what else can you love'
// console.log(string.match('love')) // output: ['love', index: 2, input: 'I love JavaScript. If you do not love JavaScript what else can you love', groups: undefined]
// let pattern = /love/gi
// console.log(string.match(pattern)) // output: ['love', 'love', 'love']
// let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
// let regEx = /\d+/
// console.log(txt.match(regEx)) // output: ['2019', index: 3, input: 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge', groups: undefined]
// console.log(txt.match(/\d+/g)) // output: ['2019', '30', '2020']
// repeat
// string.repeat(n)
// let string = 'love'
// console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove
// CHECKING DATA TYPES AND CASTING
// Checking Data Types
// let firstName = 'Nguyen' // string
// let lastName = 'An' // string
// let country = 'Ha Noi' // string
// let city = 'Quy Nhon' // string
// let age = 20 // number
// let job // undefined
// console.log(typeof 'Nguyen') // string
// console.log(typeof lastName) // string
// console.log(typeof 10) // number
// console.log(typeof 3.14) // number
// console.log(typeof true) // boolean
// console.log(typeof false) // boolean
// console.log(typeof NaN) // number
// console.log(typeof job) // undefined
// console.log(typeof undefined) // undefined
// console.log(typeof null) // object
// Changing Data Type (Casting)
// String to Int
// parseInt()
//     let num = '10'
//     let numInt = parseInt(num)
//     console.log(numInt) // 10
// Number()
//     let num = '10'
//     let numInt = Number(num) // 10
// Plus sign(+)
//     let num = '10'
//     let numInt = +num
//     console.log(numInt) // 10
// String to Float
// parseInt()
//     let num = '9.81'
//     let numFloat = parseFloat(num)
//     console.log(numFloat) // 9.81
// Number()
// let num = '9.81'
// let numFloat = Number(num) // 9.81
// console.log(numFloat);
// Plus sign(+)
// let num = '9.81'
// let numFloat = +num
// console.log(numFloat) // 9.81
// End Day 2

// Day 3
// BOOLEANS

// let isLightOn = true
// let isLightOff = false
// let trueValue = 4 > 3 // output: true
// let falseValue = 3 > 4 // output: false

// undefined
// let firstName
// console.log(firstName) // Undefined

// Arithmetic
// let soThuNhat = 4
// let soThuHai = 3
// let tong = soThuNhat + soThuHai // output: 7
// let diff = soThuNhat - soThuHai // output: 1
// let mult = soThuNhat * soThuHai // output: 12
// let div = soThuNhat / soThuHai // output: 1.33
// let remainder = soThuNhat % soThuHai // output: 1
// let powerOf = soThuNhat ** soThuHai // output: 64
// const PI = 3.14 
// let radius = 100
// const areaOfCircle = PI * radius * radius
// console.log(areaOfCircle) // 314 m
// const boilingPoint = 100 // boiling point of water
// console.log(`The boiling point of water is ${boilingPoint}`)

// console.log(3 > 2) // true
// console.log(3 == '3') // true
// console.log(3 == '2') // false
// console.log(1 == false) // false 
// console.log(0 == false) // true 
// console.log(0 === false) // false 
// console.log(0 == '') // true 
// console.log(1 == true) // true 
// console.log(undefined == null) // true 
// console.log(undefined === null) // false
// console.log(NaN == NaN) // false not equal
// console.log(NaN === NaN) // false
// console.log(typeof NaN) // number
// console.log('mango'.length == 'avocado'.length) // false
// console.log('mango'.length != 'avocado'.length) // true
// console.log('mango'.length < 'avocado'.length) // true

// Logical Operators
// const check = 4 > 3 && 5 > 3 // output: true
// const check = 4 > 3 && 2 > 3 // output: false
// const check = 4 > 3 || 10 > 5 // output: true
// const check = 4 > 3 || 5 > 10 // output: true
// let check = 4 > 3 // true
// let check = !(4 > 3) // false
// let isLightOn = true
// let isLightOff = !isLightOn // false
// let isMarried = !false // true

// Increment Operator
// 1. Pre-increment
// let count = 0
// console.log(++count) // 1
// console.log(count) // 1

// 2. Post-increment
// let count = 0
// console.log(count++) // 0
// console.log(count) // 1

// Decrement Operator
// 1. Pre-decrement
// let count = 0
// console.log(--count) // -1  
// console.log(count) //  -1
// // 2. Post-decrement
// let count = 0
// console.log(count--) // 0 
// console.log(count) //  -1

// Ternary Operators
// let isRaining = true
// isRaining 
//     ? console.log('?t')
//     : console.log(':t')

// isRaining = false
//     ? console.log('?f')
//     : console.log(":f")
// let number = 5
// number > 0
//     ? console.log(`${number} is the positive number`)
//     : console.log(`${number} is the negative number`)
// number = -5
// number > 0
//     ? console.log(`${number} is the positive number`)
//     : console.log(`${number} is the negative number`)

// WINDOW METHOD

// Window alert() method
// let message = 'hello'
// alert(message)
// alert('Welcome to 30 days of JavaScript')
// Window prompt() method
// prompt('required text', 'optional text')
// let number = prompt('Enter number', '')
// console.log(number);
// const agree = confirm('Are you sure you are 18+?')
// console.log(agree)

// Creating a time Object
// const now = new Date()
// console.log(now.getHours());
// console.log(now.getFullYear());
// console.log(now.getMinutes());
// console.log(now.getTime());
// console.log(now.getMonth());

// Getting time
// 1. Using getTime()
// const now = new Date()
// console.log(now.getTime())
// // 2. Using Date.now()
// const allSeconds = Date.now()
// console.log(allSeconds) 
// const timeInSeconds = new Date().getTime()
// console.log(allSeconds == timeInSeconds) // true

// Switch case
// let weather = 'Cold'
// switch (weather) {
//     case 'Hot':
//         console.log(`Hot!`)
//         break
//     case 'Cloudy':
//         console.log(`cloudy`)
//         break
//     case 'Cold':
//         console.log(`cold`)
//         break
//     default:
//         break
// }
// let dayUserInput = prompt(`What day is today?`)
// let day = dayUserInput.toUpperCase()

// switch (day) {
//     case 'MONDAY':
//         console.log(`today is monday`);
//         break;
//     case 'TUESDAY':
//         console.log(`today is tuesday`);
//         break;
//     case 'WEDNESDAY':
//         console.log(`today is wednesday`);
//         break;
//     case 'THURSDAY':
//         console.log(`today is thursday`);
//         break;
//     case 'FRIDAY':
//         console.log(`today is friday`);
//         break;
//     case 'SATURDAY':
//         console.log(`today is saturday`);
//         break;
//     case 'SUNDAY':
//         console.log(`today is sunday`);
//         break;
//     default:
//         console.log(`it is not a week day`);
//         break;
// }
// let num = prompt('Enter number')
// switch (true) {
//     case num > 0:
//         console.log(`number is positive`);
//         break;
//     case num == 0:
//         console.log(`number is 0`);
//         break;
//     case num < 0:
//         console.log(`number is negative`);
//         break;
//     default:
//         console.log(`it is not a number!`);
//         break;
// }

// Ternary Operators
// let isRaining = false
// isRaining
//     ? console.log('You need a rain coat')
//     : console.log('No need for a rain coat')

// EX1: Get user input using prompt(“Enter your age:”).If user is 18 or older,
// give feedback: 'You are old enough to drive' but if not 18 give another 
// feedback stating to wait for the number of years he neds to turn 18.

// let userInput = prompt('Enter your age:')

// if (userInput >= 18) {
//     console.log(`You are old enough to drive`);
// } else {
//     const years = 18 - userInput;
//     console.log(`You are left with ${years} years to drive`);
// }


// EX2: Compare the values of myAge and yourAge using if … else. Based on the 
// comparison and log the result to console stating who is older (me or you). 
// Use prompt(“Enter your age:”) to get the age as input.

// let myAge = 20
// let yourAge = prompt(`Enter your age:`)

// if(myAge > yourAge) {
//     const distance = myAge - yourAge
//     console.log(`you are ${distance} years younger than me`);
// } else if(myAge == yourAge) {
//     console.log(`you are my age`);
// } else {
//     const distance = yourAge - myAge
//     console.log(`you are ${distance} years older than me`);
// }

// EX3: If a is greater than b return 'a is greater than b' else 'a is less than b'. 
// Try to implement it in to ways
// + using if else
// + ternary operator.

// let a = 4
// let b = 3
// if(a > b) {
//     console.log(`a greater than b`);
// } else if( a = b) {
//     console.log(`a = b`);
// } else {
//     console.log(`a less than b`);
// }
// a > b
//     ? console.log(`a greater than b`)
//     : console.log(`a less than b`)

// EX4: Even numbers are divisible by 2 and the remainder is zero. How do you check, 
// if a number is even or not using JavaScript?
   
// const num = prompt('Enter a')

// if(num % 2 == 0) {
//     console.log(`${num} is an even number`);
// } else {
//     console.log(`${num} is an odd number`);
// }

// EXLV2: Write a code which can give grades to students according to theirs scores
// + 80-100, A
// + 70-89, B
// + 60-69, C
// + 50-59, D
// + 0-49, F

// const score = prompt(`Enter your score:`)

// if(score >= 80 && score <= 100) {
//     console.log(`A is your score`);
// } else if (score >= 70 && score < 80) {
//     console.log(`B is your score`);
// } else if (score >= 60 && score < 70) {
//     console.log(`C is your score`);
// } else if (score >= 50 && score < 60) {
//     console.log(`D is your score`);
// } else if (score >= 0 && score < 50) {
//     console.log(`F is your score`);
// } else {
//     console.log(`Please enter 0 - 100`);
// }

// EX3LV2: Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// + September, October or November, the season is Autumn
// + December, January or February, the season is Winter
// + March, April or May, the season is Spring
// + June, July or August, the season is Summer

// let month = prompt(`Enter month:`)
// let handleMonth = month.toLowerCase()
// if (handleMonth == 'september' || handleMonth == 'october' || handleMonth == 'november') {
//     console.log(`the season is Autumn`)
// } else if (handleMonth == 'december' || handleMonth == 'january' || handleMonth == 'february') {
//     console.log(`the season is Winter`)
// } else if (handleMonth == 'march' || handleMonth == 'april' || handleMonth == 'may') {
//     console.log(`the season is Spring`);
// } else if (handleMonth == 'june' || handleMonth == 'july' || handleMonth == 'august') {
//     console.log(`the season is Summer`);
// } else {
//     console.log(`Please, enter the month!`);
// }

// EX4LV2: Check if a day is weekend day or a working day. Your script will take day as an input

// let day = prompt(`Enter the day:`)
// let handleDay = day.toLowerCase()
// let handleDayContinue = handleDay.charAt(0).toUpperCase() + handleDay.slice(1)

// if (handleDayContinue == 'Monday' || handleDayContinue == 'Tuesday' || handleDayContinue == 'Wednesday' || handleDayContinue == 'Thursday' || handleDayContinue == 'Friday') {
//     console.log(`${handleDayContinue} is a working day`)
// } else if (handleDayContinue == 'Saturday' || handleDayContinue == 'Sunday') {
//     console.log(`${handleDayContinue} is a weekend`)
// } else {
//     console.log(`Please enter the day`)
// }

// EX1LV3 : Write a program which tells the number of days in a month
// Write a program which tells the number of days in a month, now consider leap year

// let month = prompt('Enter the month:')
// let handleMonth = month.toLowerCase()
// let handleMonthContinue = handleMonth.charAt(0).toUpperCase() + handleMonth.slice(1)

// if(handleMonthContinue == 'February') {
//     console.log(`${handleMonthContinue} has 28 days`);
// } else if(handleMonthContinue == 'April' || handleMonthContinue == 'June' || handleMonthContinue == 'September' || handleMonthContinue == 'November') {
//     console.log(`${handleMonthContinue} has 30 days`);
// } else if(handleMonthContinue == 'January' || handleMonthContinue == 'March' || handleMonthContinue == 'May' || handleMonthContinue == 'July' || handleMonthContinue == 'August' || handleMonthContinue == 'October' || handleMonthContinue == 'December') {
//     console.log(`${handleMonthContinue} has 31 days`);
// } else {
//     console.log(`Please enter the month`);
// }