// EX1: Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

// const challenge = `30 Days Of Javascript`

// EX2: Print the string on the browser console using console.log()

// console.log(`30 Days Of Javascript`)

// EX3: Print the length of the string on the browser console using console.log()

// const challenge = `30 Days Of Javascript`
// console.log(challenge.length) 

// EX4: Change all the string characters to capital letters using toUpperCase() method

// const challenge = `30 Days Of Javascript`
// console.log(challenge.toUpperCase()) 

// EX5: Change all the string characters to lowercase letters using toLowerCase() method

// const challenge = `30 Days Of Javascript`
// console.log(challenge.toLowerCase()) 

// EX6: Cut (slice) out the first word of the string using substr() or substring() method

// const challenge = `30 Days Of Javascript`
// console.log(challenge.substring(0, 2)); 

// EX7: Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

// const challenge = `30 Days Of Javascript`
// console.log(challenge.slice(3, 20));

// EX8: Check if the string contains a word Script using includes() method

// const challenge = `30 Days Of JavaScript`
// console.log(challenge.includes('Script'));

// EX9: Split the string into an array using split() method

// const challenge = `30 Days Of JavaScript`
// console.log(challenge.split(' '));

// EX10: Split the string 30 Days Of JavaScript at the space using split() method

// const challenge = `30 Days Of JavaScript`
// console.log(challenge.split(' ,'));

// EX11: 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
// split the string at the comma and change it to an array.

// const challenge = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
// console.log(challenge.split(','));

// EX12: Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

// const challenge = `30 Days Of JavaScript`
// console.log(challenge.replace('JavaScript', 'Python'))

// EX13: What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

// const challenge = `30 Days Of JavaScript`
// console.log(challenge.charAt(15));

// EX14: What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

// const challenge = `30 Days Of JavaScript`
// console.log(challenge.charCodeAt(12));

// EX15: Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

// const challenge = `30 Days Of JavaScript`
// console.log(challenge.indexOf('a'));

// EX16: Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

// const challenge = `30 Days Of JavaScript`
// console.log(challenge.lastIndexOf('a'));

// EX17: Use indexOf to find the position of the first occurrence of the word because in the following sentence

// const challenge = 'You cannot end a sentence with because because because is a conjunction'
// console.log(challenge.indexOf('because'));

// EX18: Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'

// const challenge = 'You cannot end a sentence with because because because is a conjunction'
// console.log(challenge.lastIndexOf('because'));

// EX19: Use search to find the position of the first occurrence of the word because in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'

// const challenge = 'You cannot end a sentence with because because because is a conjunction'
// console.log(challenge.search('because'));

// EX20: Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g 
// ' 30 Days Of JavaScript '.

// const challenge = '   30 Days Of JavaScript   '
// console.log(challenge);
// console.log(challenge.trim());

// EX21: Use startsWith() method with the string 30 Days Of JavaScript and make the result true

// const challenge = `30 Days Of JavaScript`
// console.log(challenge.startsWith(30));
// console.log(challenge.startsWith('30'));

// EX22: Use endsWith() method with the string 30 Days Of JavaScript and make the result true

// const challenge = `30 Days Of JavaScript`
// console.log(challenge.endsWith('JavaScript'));
// console.log(challenge.endsWith('pt'));
// console.log(challenge.endsWith('t'));

// EX23: Use match() method to find all the a’s in 30 Days Of JavaScript

// const challenge = `30 Days Of JavaScript`
// console.log(challenge.match('a'));

// EX24: Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

// const firstString = '30 Days of '
// const secondString = 'JavaScript'
// console.log(firstString.concat(secondString));

// EX25: Use repeat() method to print 30 Days Of JavaScript 2 times

// const challenge = ` 30 Days Of JavaScript `
// console.log(challenge.repeat(2));

// EX1LV2: Using console.log() print out the following statement:

// console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// EX2LV2: Using console.log() print out the following quote by Mother Teresa:

// console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);

// EX3LV2: Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

// const num = 10
// const numString = '10'
// const numStringTest = 'abc'

// console.log(typeof num);
// console.log(typeof parseInt(numString));
// console.log(typeof parseInt(numStringTest), numStringTest);

// EX4LV2: Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

// const num = '9.8'
// console.log(parseFloat(num).toFixed())

// EX5LV2: Check if 'on' is found in both python and jargon

// const challenge = `python and jargon`
// console.log(challenge.search('on'));

// EX6LV2: I hope this course is not full of jargon. Check if jargon is in the sentence.

// let challenge = `I hope this course is not full of jargon`
// console.log(challenge.indexOf('jargon'));

// EX7LV2: Generate a random number between 0 and 100 inclusively.

// let randomNum = Math.random() * 100
// console.log(Math.floor(randomNum));

// EX8LV2: Generate a random number between 50 and 100 inclusively.

// let randomNum = (Math.random() * 50) + 50
// console.log(Math.floor(randomNum))

// EX9LV2: Generate a random number between 0 and 255 inclusively.

// let randomNum = Math.random() * 255
// console.log(Math.floor(randomNum));

// EX10LV2: Access the 'JavaScript' string characters using a random number.

// let challenge = `JavaScript`
// console.log(challenge.charAt(4));

// EX11LV2: Use console.log() and escape characters to print the following pattern.

// console.log(`1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125`);

// EX12LV2: Use substr to slice out the phrase because because because from the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'

// let challenge = 'You cannot end a sentence with because because because is a conjunction'
// console.log(challenge.indexOf('because'));
// console.log(challenge.substr(31, 23));

// EX1LV3: 'Love is the best thing in this world. Some found their love and some are still looking 
// for their love.' Count the number of word love in this sentence.

// let challenge = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// console.log(challenge.length);

// EX2LV3: Use match() to count the number of all because in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'

// let challenge = 'You cannot end a sentence with because because because is a conjunction'
// console.log(challenge.match('because'));

// EX3LV3: Clean the following text and find the most frequent word 
// (hint, use replace and regular expressions)

// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// // let re = new RegExp()
// for(i = 0; i < sentence.length; i++) {
//     if()
// }
// console.log(sentence);

// EX4LV4: Calculate the total annual income of the person by extracting the numbers from the following text. 
// 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

// let salary = 5000
// let bonus = 10000
// let onlineCourses = 15000

// for(i = 1; i <= 12; i++) {
//     salary = 5000 * i
//     bonus = 10000 * i
//     onlineCourses = 15000 * i
//     totalAnnualIncome = salary + bonus + onlineCourses
// }

// console.log(totalAnnualIncome);