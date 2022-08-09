// let pattern = 'love'
// let flag = 'gi'
// let regEx = new RegExp(pattern, flag)

// let regEx = new RegExp('love', 'gi')

// let regEx = /love/gi
// let regEx = new RegExp('love', 'gi')

// let regEx = /love/gi
// let regEx = new RegExp('love', 'gi')

// const str = 'I love JavaScript'
// const pattern = /love/
// const result = pattern.test(str)
// console.log(result);

// const str = 'I love JavaScript'
// const pattern = /love/
// const result = str.match(pattern)
// console.log(result);

// const str = 'I love JavaScript'
// const pattern = /love/g
// const result = str.match(pattern)
// console.log(result);

// const str = 'I love JavaScript'
// const pattern = /love/g
// const result = str.search(pattern)
// console.log(result);

// const txt = 'Python is the most beautiful language that a human begin has ever created.\ I recommend Python for a first programming language'
// let matchReplaced = txt.replace(/Python|python/, 'JavaScript')
// let matchReplacedG = txt.replace(/Python|python/g, 'JavaScript')
// let matchReplacedGi = txt.replace(/Python/gi, 'JavaScript')
// console.log(matchReplaced);
// console.log(matchReplacedG);
// console.log(matchReplacedGi);

// const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
// T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
// p%e%o%ple.\
// I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
// D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

// let matches = txt.replace(/%/g, '')
// console.log(matches);

// const pattern = '[Aa]pple'
// const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away.'
// const matches = txt.match(pattern)
// console.log(matches);

// const pattern = /[Aa]pple/g
// const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
// const matches = txt.match(pattern)
// console.log(matches);

// const pattern = /[Aa]pple|[Bb]anana/g
// const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
// const matches = txt.match(pattern)
// console.log(matches);

// const pattern = /\d/g
// const txt = 'This regular expression example was made in January 12,  2020.'
// const matches = txt.match(pattern)
// console.log(matches);

// const pattern = /\d+/g
// const txt = 'This regular expression example was made in January 12,  2020.'
// const matches = txt.match(pattern)
// console.log(matches);

// const pattern = /[a]./g
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)
// console.log(matches);

// const pattern = /[a].+/g
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)
// console.log(matches);

// const pattern = /[a].*/g
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)
// console.log(matches);

// const txt = 'I am not sure if there is a convention how to write the word e-mail.\ Some people write it email others may write it as Email or E-mail.'
// const pattern = /[Ee]-?mail/g
// let matches = txt.match(pattern)
// console.log(matches);

// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\d{4}/g
// const matches = txt.match(pattern)
// console.log(matches);

// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\d{1,4}/g
// const matches = txt.match(pattern)
// console.log(matches);

// const txt = 'This regular expression example was made in December 6, 2019.'
// const pattern = /^This/g
// const matches = txt.match(pattern)
// console.log(matches);

// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /[^A-Za-z,. ]+/g
// const matches = txt.match(pattern)
// console.log(matches);

// let pattern = /^[A-Z][a-z]{3,12}$/
// let name = 'Asabehne'
// let result = pattern.test(name)
// console.log(result);

// ===============================================================================
// ===============================================================================
//                                   LV1
// ===============================================================================
// ===============================================================================

// ===============================================================================
// EX1: Calculate the total annual income of the person from the following text. 
// ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro 
// online courses per month.’
// ===============================================================================

// let txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus,\
// 5500 euro online courses per month.'
// let income = /\d+/g
// let matches = txt.match(income)

// function totalIncome() {
//     let sum = 0
//     for(let income of matches) {
//         let strToNum = parseInt(income)
//         sum += strToNum
//     }
//     return sum
// }
// console.log(totalIncome());

// ===============================================================================
// EX2: The position of some particles on the horizontal x-axis -12, -4, -3 and 
// -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. 
// Extract these numbers and find the distance between the two furthest particles.
// ===============================================================================

// Thay Huy bao bo qua