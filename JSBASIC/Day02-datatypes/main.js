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
 console.log(Math.abs(a));
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
 console.log(string.substr(3,2));  //an
    //split : Tách chuỗi
 let stringName = 'Thuan Anh'
 console.log(string.split('')); //["Thuan","Anh"]
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
 


