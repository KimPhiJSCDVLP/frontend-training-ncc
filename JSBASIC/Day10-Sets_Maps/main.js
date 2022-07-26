//Creating set from array
// SET : chứa các key value duy nhất , không trùng
 const languges = [
    'PHP',
    'JAVASCRIPT',
    'RUBY',
    'PHP'
 ]
  const setOfLanguges = new Set (languges);
  console.log(setOfLanguges);

// add element to set
const logo = new Set();
console.log(logo.size); //0
logo.add('Google');
console.log(logo.size);//1
console.log(logo);
logo.add('Google');
console.log(logo); //Google
// using for loop add element to Set
const logoArray = [
    'YOUTUBE',
    'FACEBOOK',
    'TIKTOK'
]
 for(l of logoArray){
    logo.add(l);
 }
 console.log(logo);

//delete an element a set
console.log(logo.delete('TIKTOK'));
console.log(logo); //Set(3) {'Google', 'YOUTUBE', 'FACEBOOK'}
// has : check element exists
console.log(logo.has('YOUTUBE')); //TRUE
//clear : clear set

//Union of sets : Hợp 2 set A với B n(Lấy phần riêng)
 let a = [1,2,3,4,5];
 let b = [2,3,4,5,6,7,8];
 let c = [...a,...b];

 let A = new Set(a);
 let B = new Set(b);
 let C = new Set(c);
 console.log(C); //1,2,3,4,5,6,7,8
//Intersection of sets : Lấy phần chung giống nhau SET
 let d = a.filter((num)=>B.has(num));
 console.log(d);
 let D = new Set(d);
 console.log(D); //2,3,4,5

 //Difference of sets : Tìm sự khác nhau giữa 2 SET
 let e = a.filter((num)=> !B.has(num));
 console.log(e);
 let E = new Set(e);
 console.log(E); //1

 /* Map : Giống Object nhưng cho phép tất cả các kiểu dữ liệu thiết lập key trong key-value
   */

countries = [
   ['VietNam','HaNoi'],
   ['ThaiLan', 'BANGKOK']
   ['NhatBan','TOKYO'],
]
 const map = new Map (countries)
