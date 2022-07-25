// Biến 
//  Có 3 loại :Window, Global , Local
// Không khai báo gì : a=100 (windows)
// Khai báo ngoài 1 hàm : let a = 200 (global)
// Khai báo trong hàm  : local

let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  let c = 30
  if (true) {
    // we can access from the function and outside the function but 
    // variables declared inside the if will not be accessed outside the if block
    let a = 'Python'
    let b = 20
    let d = 40
    console.log(a, b, c) // Python 20 30
  }
  // we can not access c because c's scope is only the if block
  console.log(a, b) // JavaScript 10
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible

//Object (key:value)
    var course =
    {
        id :1,
        name :'PHP',
        price :123,
        skills :[
            'HTML',
            'SQL',
            'CSS'
        ],
        getNameCourse : function(){
            return `Khoa hoc :${this.name}, gia : ${this.price}`
        }
    }
    console.log(course.id);
    console.log(course.getNameCourse());
    // add key value  to object
    course.soluong = 100;
    course.teacher = 'Thuan';
    //edit value price
    course.price = 200
    console.log(course);
    //add value in skills
    course.skills.push('JS')
/*
    Object Method
*/
// Object.assign : Sao chép object mà không sửa đổi obj gốc

    const copyCourse = Object.assign({},course);
    copyCourse.name = 'JavaScript';
    copyCourse.id = 2
    console.log(copyCourse); //{id: 2, name: 'JavaScript', price: 200, skills: Array(4), getNameCourse: ƒ, …}
//Object.keys : Lấy key của 1 obj trả về dạng mảng
    const keys = Object.keys(copyCourse)
    console.log(keys); //['id', 'name', 'price', 'skills', 'getNameCourse', 'soluong', 'teacher']
//Object.values : Tương tự như trên mà là values
    const values = Object.values(copyCourse);
    console.log(values); //[2, 'JavaScript', 200, Array(4), ƒ, 100, 'Thuan']
//Object.entries : get key and values trả về theo cặp giá trị dưới dạng mảng
    const entries = Object.entries(copyCourse)
    console.log(entries); 
    // 0: (2) ['id', 2]
    // 1: (2) ['name', 'JavaScript']
    // 2: (2) ['price', 200]
    // 3: (2) ['skills', Array(4)]
    // 4: (2) ['getNameCourse', ƒ]
    // 5: (2) ['soluong', 100]
    // 6: (2) ['teacher', 'Thuan']

//hasOwnProperty : check key or value existed
    console.log(copyCourse.hasOwnProperty('name')); //true
    console.log(copyCourse.hasOwnProperty('fullname')); //false


