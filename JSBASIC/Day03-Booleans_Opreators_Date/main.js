// Booleans
 let lightOn = true;
 let isRaining= false;
//Undefined
 let name;
 console.log(name); //not defined

//Null
 let age = null;
 console.log(age); //null
//Operator
 let numOne = 4
 let numTwo = 3
 let sum = numOne + numTwo
 let diff = numOne - numTwo
 let mult = numOne * numTwo
 let div = numOne / numTwo
 let remainder = numOne % numTwo //chia lấy dư
 let powerOf = numOne ** numTwo // cơ số mũ

 console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64
// Logical Operators
const check = 4 > 3 && 10 > 5         // true && true -> true
const check2 = 4 > 3 && 10 < 5         // true && false -> false
const check3 = 4 < 3 && 10 < 5         // false && false -> false

const check4 = 4 > 3 || 10 > 5         // true  || true -> true
const check5 = 4 > 3 || 10 < 5         // true  || false -> true
const chec6 = 4 < 3 || 10 < 5         // false || false -> false
//Increment àn decrement
 let i = 1;
 console.log(++i);//2
 console.log(--i);//0

 //Ternary Operator

 let isRaining2 = true
 isRaining
 ? console.log('You need a rain coat.')
 : console.log('No need for a rain coat.')
 isRaining2 = false

 isRaining2
 ? console.log('You need a rain coat.')
 : console.log('No need for a rain coat.')
//Date 
 const now = new Date();
 console.log(now);
 console.log(now.getFullYear);
 console.log(now.getMonth);
// Getting Times :
 const nowTime = new Date() //
 console.log(nowTime.getTime())
