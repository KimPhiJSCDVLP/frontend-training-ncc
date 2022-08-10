// function declaration
function printFullName (){
    let firstName = 'Thuan'
    let lastName = 'Anh'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName) 
}
printFullName()

//Func with parameters
function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
  console.log(sumArrayValues(numbers));
// Anonymous Fucnt
const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}
//Arrow Fucnt
const fullName = (firstName, lastName) =>{
    return `${lastName} ${firstName}`;
}
console.log(fullName('Thuan','NguyenLeAnh'));