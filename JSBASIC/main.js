
//Kieeur du lieu
// var myObject = {
//     name :'aNH THUAN',
//     age :22,
//     myFunction :function(){

//     }
// };
// console.log('myObject',myObject);
/*
var myArray = [
    'anc',
    'def'
];
console.log('myArray',myArray)
*/
//TOAN TU SO SANH P2
/**
 * ===
 * !==
 * so sanh tuyet doi ca value và datatype
 */
// var a = 1;
// var b = '1';
// console.log( a != b);
/* Chuoi trong JS*/
/**
 * 1 tao chuoi
 * 2 mot so case su dung backflash (\)
 * 3 xem do dai chuoi(lenght)
 * 4 Templaste String  ES6
 */
// var fullName = 'Anh Thuan \"Vippro\"';
// var a = 'day la dau \\';
// console.log(fullName.length);

// var firtName = 'ANH';
// var lastName = 'Thuan';
// // cach cu console.log('Toi la' +firtName + lastName);
// console.log(`Toi la : ${firtName} ${lastName}`); //cach mới

///cach lam viec voi chuoi "keyword :Js String method"
/**
 * 1. Do dai chuoi
 * 2. Tim vi tri index (indexOf, lastIndexOf,search)
 * indexOf quy dinh vi tri truyen vao
 * search khong quy dinh vi tri 
 * 3. Cut String (slice(1,2),)
 * 4. Replace
 * Thay tat ca /chuoi can thay/g
 * 5. Thay Upcase va lowcase
 * 6. Trim (Thua ki tu trong)loai bo cac khoang trang 
 * 7. Split cat chuoi thanh array "console.log(language.split(', '))""
 * Cat theo diem chung hop li cua chuoi vi du phay va cachs
 * 8. Get a character by index
 */
// var myString = '    Hoc lap trinh F7 F7    ';
// console.log(myString.length);
// console.log(myString.lastIndexOf('F7'));
// console.log(myString.slice(-3,-1));
// console.log(myString.replace(/F7/g,'F8'))
// console.log(myString.toLowerCase('H'))
// console.log (myString.trim())
// var language = 'Js , php, ruby';
// console.log(language.split(', '))
// var myString2 = 'Thuan Mifo';
// //get by index
// console.log(myString2.charAt(3))

/**
 * Kieu so trong javascript
 * 1. Tao gia tri number
 * 2. Lam viec voi number
 * To String
 * To Fixed( lam tron so toi may chu so toFixed(2))
 */
// var age = 22;
// var PI = 30000.9999;
// console.log( typeof age);//kiem tra datatype 
// var result = 20 / 'abc';
// //kiem tra so NaN hay khong (isNaN)
// console.log(isNaN(result))
// console.log(age.toString())
// var myString = age.toString()
// console.log(typeof myString)
// console.log (PI.toFixed(3))

/**
 * 1. Tao mang
 * 2. Truy xuat Mang
 */
// var language = 'JavacScript';
// var language2 = 'PHP';
// //tao mag thay cho cach tren
// var languages = [
//     'javascript',
//     'php',
//     'ruby',
//     'Dart',
//     null,
//     undefined,
//     function(){

//     },
//     Object
// ];

// // cach 2 tao array khohg khuyen khich
// var languages2 = new Array(
//     'javascript',
//     'php',
//     'ruby',
//     'Dart',
//     null,
//     undefined,
//     function(){

//     },
//     Object
// );
// //ktra xem  phai la 1 array hay khong
// console.log(Array.isArray(languages2))
// //lay ra phan tu theo chi muc
// console.log(languages2[3])


/**
 * Lam viec voi Array
 * 1. toString
 * 2. Join
 * 3. Pop (xoa phan tu cuoi mang va tra ve chinh no)
 * 4.Push (Them vao  cuoi phan tu moi)
 * 5.Shift (Xoa dau mang va tra ve da xoa)
 * 6.Unshift (Them vao dau phan tu moi)
 * 7.Splicing ( Xoa hoac cat hoac chen vao)
 * 8.Concat ( Noi cac array lai voi nhau )
 * 9.Slicing (Cat mot vai element cua mang)
 
 */
// var languages = [
//     'JS',
//     'Php',
//     'dart'
// ];
// var language2 = [
//     'java',
//     'bac'
// ];
// console.log(languages.toString())
// console.log(languages.join('-')) // chen ki tu do giuax cac tp
// console.log(languages.pop()) //Xoa phan tu cuoi mang
// //tra ve chinh phan tu dax xoa
// console.log(languages.push('Dart2'))
// languages.splice(1,0,'Ruby') //de 0 la chen , so khac la xoa
// languages.splice(1,0,'Dart')
// console.log(languages.concat(language2)) //hop nhat 2 array
// console.log(languages.slice(-2,-1))

/**
 * 
 */

// Callback
// là hàm dùng truyền đối số, khi gọi hàm khác
// const myFunction = (n)=>{
//     n("Hello");
// }
//  const myCallBack = (value) =>{
//     console.log(value)
//  }
 
//  myFunction(myCallBack)

// Foreach

    // let sum = 0;
    // const numbers = [1,2,3,4,5]
    // numbers.forEach(num => sum += num)
    // console.log(sum);
// map :lặp lại phần tử các mảng và sữa đổi
    // const arr = [1,2,3,4,5]
    // const numberSquare = arr.map((num) => num * num)
    // console.log(numberSquare);

    //  var course = [
    //     {
    //         id :1,
    //         name :'PHP',
    //         price :123
    //     },
    //     {
    //         id :2,
    //         name :'JavaScripts',
    //         price :123
    //     },
    //     {
    //         id :3,
    //         name :'Ruby',
    //         price :123
    //     },

    //  ]
    // courseHandler = (course,index) =>{
    //     return{
    //         id:course.id,
    //         name : `Khoa hoc : ${course.name}`,
    //         price :`Gia cua khoas hoc : ${course.price}`
    //     }
    // }
    // var newCourse = course.map(courseHandler);
    // console.log(newCourse);

//Reduce in arrray
    //  dung vong for
    // var total = 0;
    //  for(var c of course){
    //     total += c.price;
    //  }
    //  console.log(total);
    // dung reduce
    //  priceHandler = (accumulator,currentValue,currentIndex,originArray)=>{
    //     return accumulator + currentValue.price;
    //  }
    // var total = course.reduce(priceHandler, 0);
    // console.log(total);

// JSON
     -  Stringify :từ js sang JSON
     -  Parse : jSON SANG JS