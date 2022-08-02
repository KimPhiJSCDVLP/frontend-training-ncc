// EX1: Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it 
// and use the typeof operator to check different data types

// let firstName = `Leonardo`
// let lastName = `da Vinci`
// let country = `Italy`
// let city = '...' 
// let age = 570
// let isMarried = false

// console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried)

// EX2: Check if type of '10' is equal to 10

// console.log(typeof '10', typeof 10)

// EX3: Check if parseInt('9.8') is equal to 10

// console.log(parseInt(Math.round('9.8')));

// EX4: Boolean value is either true or false.

// + Write three JavaScript statement which provide truthy value.
// + Write three JavaScript statement which provide falsy value.

// console.log('string');
// console.log(20);
// console.log(true);
// console.log(NaN);
// console.log(undefined);
// console.log(0);

// EX5: Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3 // true
// 4 >= 3 // true
// 4 < 3  // false
// 4 <= 3 // false
// 4 == 4 // true
// 4 === 4 // true
// 4 != 4 // false
// 4 !== 4 // false
// 4 != '4' // false
// 4 == '4' // true
// 4 === '4' // false
// Find the length of python and jargon and make a falsy comparison statement. // true

// console.log(4 > 3);
// console.log(4 >= 3);
// console.log(4 < 3);
// console.log(4 <= 3);
// console.log(4 == 4);
// console.log(4 === 4);
// console.log(4 != 4);
// console.log(4 !== 4);
// console.log(4 != '4');
// console.log(4 == '4');
// console.log(4 === '4');
// let pt = `python`
// let jg = `jargon`
// console.log(pt.length == jg.length);

// EX1LV2: Write a script that prompt the user to enter base and height of the triangle and
// calculate an area of a triangle (area = 0.5 x b x h).

// let base = prompt(`Enter base:`)
// let height = prompt(`Enter height:`)

// if(base > 0 && height > 0) {
//     let area = 0.5 * base * height
//     console.log(`The area of the triangle is ${area}`)
// } else {
//     console.log(`Please re-enter number`);
// }

// EX2LV2: Write a script that prompt the user to enter side a, side b, and side c of the triangle and 
// calculate the perimeter of triangle (perimeter = a + b + c)

// let sideA = +prompt(`Enter side a`)
// let sideB = +prompt(`Enter side b`)
// let sideC = +prompt(`Enter side c`)
// const perimeter = (sideA + sideB + sideC)
// sideA > 0 && sideB > 0 && sideC > 0
//     ? console.log(`the perimeter of triangle is ${perimeter}`)
//     : console.log(`Please re-enter number`)


// EX3LV2: Get length and width using prompt and calculate an area of rectangle (area = length x width
// and the perimeter of rectangle (perimeter = 2 x (length + width))

// let widthRec = +prompt(`Enter width:`)
// let lengthRec = +prompt(`Enter length:`)
// let perimeterRec = 2 * (lengthRec + widthRec)
// let area = lengthRec * widthRec

// widthRec > 0 && lengthRec > 0
//     ? console.log(`area of rectangle is ${area}`)
//     : console.log(`Please re-enter width`)

// widthRec > 0 && lengthRec > 0
//     ? console.log(`the perimeter of rectangle is ${perimeterRec}`)
//     : console.log(`Please re-enter length`)

// EX4LV2: Get radius using prompt and calculate the area of a circle (area = pi x r x r) and
// circumference of a circle(c = 2 x pi x r) where pi = 3.14

// var PI = 3.14
// let getRadius = prompt(`Enter radius:`)
// var area = PI * getRadius * getRadius
// var circumference = 2 * PI * getRadius

// getRadius > 0
//     ? console.log(`the area of circle is ${area}`)
//     : console.log(`Please re-enter the radius`)
// getRadius > 0
//     ? console.log(`the circumference of circle is ${circumference}`)
//     : console.log(`Please re-enter the radius`)

// EX5LV2: Calculate the slope, x-intercept and y-intercept of y = 2x -2

// EX6LV2: Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and 
// figure out at what x value y is 0.

// EX9LV2: Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// let hour = prompt(`Enter hour:`)
// let ratePerHour = prompt(`Enter rate per hour:`)
// let pay = hour * ratePerHour

// hour > 0 && ratePerHour > 0
// ? console.log(`Your total income is ${pay}`)
// : console.log(`Please, re-enter!`);

// EX10LV2: If the length of your name is greater than 7 say, your name is long else say your name is short.

// let urName = prompt(`Enter your name:`)

// if(urName.length > 7) {
//     console.log(`Your name is long`);
// } else {
//     console.log(`Your name is short`);
// }

// EX11LV2: Compare your first name length and your family name length and you should get this output.

// let urName = prompt(`Enter your name:`)
// let familyName = prompt(`Enter your family name`)

// if(urName.length > familyName.length) {
//     console.log(`Your name ${urName}, is longer than your family name, ${familyName}`)
// } else if(urName.length == familyName.length) {
//     console.log(`Your name ${urName}, is equal than your family name, ${familyName}`);
// } else {
//     console.log(`Your name ${urName}, is shorter than your family name, ${familyName}`)
// }

// EX12LV2: Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge

// let myAge = 20
// let yourAge = 50
// let distance

// if(myAge > yourAge) {
//     distance = myAge - yourAge
//     console.log(`Im ${distance} years older than you`);
// } else if(myAge == yourAge) {
//     console.log(`We are the same age`);
// } else if(myAge < yourAge){
//     distance = yourAge - myAge
//     console.log(`Im ${distance} years younger than you`);
// } else {
//     console.log(`Please re-enter your age!`);
// }

// EX13LV2: Using prompt get the year the user was born and if the user is 18 or above allow the user to drive 
// if not tell the user to wait a certain amount of years

// let d = new Date()
// let timeNow = d.getFullYear()
// let yourBirthYear = prompt(`Enter birth year:`)
// let distance = timeNow - yourBirthYear

// if(distance < 18) {
//     let oldEnough = 18 - distance
//     console.log(`You are ${distance}. You will be allowed to drive after ${oldEnough} years.`);
// } else if(distance > 100) {
//     console.log(`Please re-enter your BIRTH YEAR`);
// } else if(distance >= 18) {
//     console.log(`You are ${distance}. You are old enough to drive`);
// } else {
//     console.log(`Please re-enter your BIRTH YEAR`);
// }

// EX14LV2: Write a script that prompt the user to enter number of years. Calculate 
// the number of seconds a person can live. Assume some one lives just hundred years

// let yourAge = prompt(`Enter your age:`)
// let changeToDay = yourAge * 365 
// let changeToHour = changeToDay * 24 
// let changeToMinute = changeToHour * 60 
// let changeToSecond = changeToMinute * 60 

// if(yourAge < 100) {
//     console.log(`You lived ${changeToSecond} seconds.`);
// }

// EX15LV2 + EX1LV3: Create a human readable time format using the Date time object

// let d = new Date()
// let year = d.getFullYear()
// let day = d.getDay()
// let month = d.getMonth()
// let hour = d.getHours()
// let minute = d.getMinutes()
// let handleDay
// let handleMonth
// let handleHour
// let handleMinute

// if(day < 10) {
//     handleDay = '0' + day
// } 

// if(month < 10) {
//     handleMonth = '0' + month
// } 
// console.log(`${year}-${handleMonth}-${handleDay} ${hour}:${minute} `);
// console.log(`${handleDay}-${handleMonth}-${year} ${hour}:${minute} `);
// console.log(`${handleDay}/${handleMonth}/${year} ${hour}:${minute} `);