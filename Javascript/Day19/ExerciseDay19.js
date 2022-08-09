// EX1: Create a closure which has one inner function

// function outerFunc(a, b) {
//     let sum = 0
//     function innerFunc() {
//         sum = a + b
//         return sum
//     }
//     innerFunc(a, b)
//     return sum
// }
// console.log(outerFunc(1, 2));

// EX2: Create a closure which has three inner functions

// function outerFunc(a, b) {
//     let sum = 0
//     function innerFunc() {
//         sum = a + b
//         if(sum % 2 == 0) {
//             console.log('sum is even number');
//         } else {
//             console.log('sum is odd number')
//         }
//         do {
//             console.log(`is not a positive number`);
//         } while (a < 0)
//         return sum
//     }
//     innerFunc(a, b)
//     return sum
// }
// console.log(outerFunc(1, -2));