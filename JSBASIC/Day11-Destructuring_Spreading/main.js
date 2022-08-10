// -   Giair nén 1 mảng và đối tượng sau đó gán cho biến riêng biệt
const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names
console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)

// ### Destructuring during iteration 
// -   Giarir nến mảng trong 1 mảng có nhiều mảng
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  
  for(const [first, second, third] of fullStack) {
  console.log(first, second, third)
  }
// Destructuring Object :Giai nén Object
const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width, height, area, perimeter } = rectangle
  
  console.log(width, height, area, perimeter) // 20,10,200,undefined
// ### Renaming during structuring
// -   Giai nén và đổi tên các key

const course = {
    id : 1,
    name : 'HTML',
    price : 100
}
let {id: idCoure, name: nameCourse, price: priceCourse} = course;
console.log(idCoure, nameCourse, priceCourse); // 1 HTML 100

const rect = {
    width: 20,
    height: 10
  }
// ### Object parameter without destructuring
// -   Tham số Object ko có cấu trúc

  const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
  }
  
  console.log(calculatePerimeter(rect)) // 60
//   Object parameter with destructuring
  const calculatePerimeter2 = ({ width, height }) => {
    return 2 * (width + height)
  }
  
  console.log(calculatePerimeter(rect)) // 60
// Spread or Rest Operator :Cắt mảng
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums 
console.log(num1, num2, num3) //1,2,3
console.log(rest) //4,5,6,7,8,9,10

//### Spread operator to copy array 
// -   Sao chép mảng
const frontEnd = ['HTML', 'CSS', 'JS', 'React']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack2 = [...frontEnd, ...backEnd]

console.log(fullStack2) // ["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"]

// Object tương tư như mảnge Spread operator to copy object

// ### Spread operator with arrow function
const sumAllNums = (...args) => {
    let sum = 0
    for (const num of args){
      sum += num
    }
    return sum
    
  }
  
  console.log(sumAllNums(1, 2, 3,4,5))
