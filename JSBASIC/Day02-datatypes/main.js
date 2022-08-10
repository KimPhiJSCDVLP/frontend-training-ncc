//Kieu du lieu primative
 let fullName = 'Thuan Anh';
 let age = 23;
 let lightOn = true;
 let fullInfo = 'My name is' + fullName + '' +age


// Kieu du lieu non-primative
var myObject = {
    name :'anh thuan',
    age :22,
    myFunction :function(){
    }
};
console.log('myObject',myObject);
var myArray = [
    'abc',
    'def'
];
console.log('myArray',myArray)

//Math Object
 const PI = Math.PI;
 let a = 100;
 console.log(Math.sqrt(a));
 let random = Math.random()
 console.log(random);
//String method
    //acessing character in a string
 let string = 'Thuan'
 let firstString = string[0] // T
 let secondString = string[1] //h
    
 let lastIndex = string.length -1 //4
 console.log(string(lastIndex)); //n
    //toUpperCase : in hoa hoặc viết thường các chuỗi
 console.log(string.toUpperCase()) //THUAN
 console.log(string.toLowerCase()); //thuan
    //substr() : Cắt chuỗi
    // cần 2 đối số chỉ mục đầu và số kí tự cắt
 console.log(string.substr(3,3));  //uan
    //split : Tách chuỗi
 let stringName = 'Thuan Anh'
 console.log(stringName.split());
 console.log(stringName.split('')); //["Thuan","Anh"]
 let trimString = '  Thuan Anh   ';
 console.log(trimString.trim('')); //ThuanAnh
    //includes : check xem có kí tự này tồn tại trong chuỗi không
 console.log(string.includes('Thuan'))     // true
 console.log(string.includes('Anh'))     // false 
    //replace : Thay thế một kí tự trong chuỗi
 console.log(string.replace('Thuan','ThuanAnh')); //ThuanAnh
    //chatART : Gía trị index của chuỗi
 console.log(string.charAt(2)); // u
    //indexof : Lấy một chuỗi con và nếu chuỗi con tồn tại trong một chuỗi, nó trả về vị trí đầu tiên của chuỗi con nếu không tồn tại, nó trả về -1
 console.log(string.indexOf('Th')); // 0
 console.log(string.indexOf('Anh')); //-1
    //concat : nối các chuỗi
 let stringConcat = 'Anh';
 console.log(string.concat(stringConcat)); // Thuan Anh
   //startsWith
   let startsWith = 'Love is the best to in this world'
   console.log(startsWith.startsWith('Love'))   // true
   console.log(startsWith.startsWith('love'))   // false
   console.log(startsWith.startsWith('world'))  // false

   //endsWith
   //search
   console.log(startsWith.search('Love')) //0
   //repeat
   let repeat = 'Thuan';
   console.log(repeat.repeat(10)); //thuan*10
 // check typeOf data
   let firstName = 'Asabeneh'      // string
   let lastName = 'Yetayeh'        // string
   let country = 'Finland'         // string
   let city = 'Helsinki'           // string
   let ageNB = 250                   // number, it is not my real age, do not worry about it
   let job                         // undefined, because a value was not assigned

   console.log(typeof 'Asabeneh')  // string
   console.log(typeof firstName)   // string
   console.log(typeof 10)          // number
   console.log(typeof 3.14)        // number
   console.log(typeof true)        // boolean
   console.log(typeof false)       // boolean
   console.log(typeof NaN)         // number
   console.log(typeof job)         // undefined
   console.log(typeof undefined)   // undefined
   console.log(typeof null)        // object

// CHANGE DATA TYPE
   let num = '10'
   let numInt = parseInt(num)
   console.log(numInt) // 10

 


