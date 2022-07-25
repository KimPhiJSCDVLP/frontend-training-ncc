// Callback
// là hàm dùng truyền đối số, khi gọi hàm khác
const myFunction = (n)=>{
    n("Hello");
}
 const myCallBack = (value) =>{
    console.log(value)
 }
 myFunction(myCallBack);
// setInterval and setTimeout
// setInterval : Thực hiện sau 1 khoảng thời gian quy định và lặp lại
// setTimeOut : Sau khoảng tg thực hiện và dừng

function sayHello() {
    console.log('Hello')
  }
  setTimeout(sayHello, 2000) 
  setInterval(sayHello, 2000) // it prints hello in every 2 seconds
// Foreach : lặp các pt mảng
    let sum = 0;
    const numbers = [1,2,3,4,5]
    numbers.forEach(num => sum += num)
    console.log(sum);
// map :lặp lại phần tử các mảng và sữa đổi
    const arr = [1,2,3,4,5]
    const numberSquare = arr.map((num) => num * num)
    console.log(numberSquare);
     var course = [
        {
            id :1,
            name :'PHP',
            price :123,
            isCheck : true
        },
        {
            id :2,
            name :'JavaScripts',
            price :345,
            isCheck : false
        },
        {
            id :3,
            name :'Ruby',
            price :202,
            isCheck : false
        },

     ]

     // Sửa đổi key value của course
    courseHandler = (course,index) =>{
        return{
            id:course.id,
            name : `Khoa hoc : ${course.name}`,
            price :`Gia cua khoas hoc : ${course.price}`
        }
    }
    var newCourse = course.map(courseHandler);
    console.log(newCourse);

// Reduce in arrray : tối ưu hơn dùng for
//      dung vong for
    var total = 0;
     for(var c of course){
        total += c.price;
     }
     console.log(total);
    // dung reduce
     priceHandler = (accumulator,currentValue,currentIndex,originArray)=>{
        return accumulator + currentValue.price;
     }
    var total = course.reduce(priceHandler, 0);
    console.log(total);
// filter : lọc theo điều kiện trong mảng
  var filterCourse = course.filter(function(course,index,array){
    return course.price > 200;
  })
  console.log(filterCourse); 
  //0: {id: 2, name: 'JavaScripts', price: 345}
//   1: {id: 3, name: 'Ruby', price: 202}

// every : check xem tất cẩ các phàn tử thõa đk thì true
 const checkCourse = course.every(function(course,index,arr){
    return course.price > 500;
 })
console.log(checkCourse); //false

 //some : check element nếu 1 phần tử thỏa là thỏa
const checkSome = course.some(function(course,index,arr){
    return course.isCheck === true;
 })
console.log(checkSome); //true

// find : Return firts element which satisfies the condition
const checkFind = course.find(function(course,index,arr){
    return course.price > 100;
 })
console.log(checkFind); // PHP

// findIndex :Return the position of the first element which satisfies the condition
const checkFindIndex = course.findIndex(function(course,index,arr){
    return course.price > 100;
 })
 console.log(checkFindIndex); // index : 0


