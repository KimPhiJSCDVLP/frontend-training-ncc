// Arrray
const arr = []; // array empty
const numberArray = [1,2,3,4,5,6];
console.log(numberArray);
console.log(numberArray.length); //6

//ARRAY with different data types
var languages = [
    'javascript',
    'php',
    'ruby',
    'Dart',
    null,
    undefined,
    function(){
    },
    Object
];
//Split string to array
 let string = 'Thuan';
 const chartInJS = string.split(''); // ["T","h","u","a","n"]
// Accessing array item using index;
 let firstNumber = numberArray[0]; 
 let lastNumber = numberArray.length -1;
 console.log(firstNumber); //  1
 console.log(numberArray[lastNumber]); //6

//Modifying aray element
const numbers = [1, 2, 3, 4, 5]
numbers[0] = 10      // changing 1 at index 0 to 10
numbers[1] = 20      // changing  2 at index 1 to 20

console.log(numbers) // [10, 20, 3, 4, 5]

//Method array
var languages = [
    'JS',
    'Php',
    'dart'
];
var language2 = [
    'java',
    'bac'
];
console.log(languages.toString()) //covert to sring
console.log(languages.join('-')) // chèn kí tự giữa các element
console.log(languages.pop()) //delete phần tử cuối của mảng và trả về phần tử đẫ delete
console.log(languages.shift()) //delete phần tử đầu tiên
console.log(languages.push('Dart2')) //Add ELement vào array
languages.splice(1,0,'Ruby')//(vị trí xóa,số lượng xóa tính sang phải, mục thêm vào)
languages.splice(1,0,'Dart')
console.log(languages.concat(language2)) // Nối 2 mảng lại với nhau
console.log(languages.slice(0,3)) //(vị trí bđ,vị trí kt không bao gồm vtkt) //JS,PHP