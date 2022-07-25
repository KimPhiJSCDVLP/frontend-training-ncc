//For loops
const countries = ['VietNam', 'CPC', 'TQ', 'TL', 'LAOS']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}
console.log(newArr); //['VIETNAM', 'CPC', 'TQ', 'TL', 'LAOS']

const numbers = [1, 2, 3, 4, 5]
const newArrNumber = []
let sum = 0
for(let i = 0; i < numbers.length; i++){
    newArrNumber.push(i * i)
}
console.log(newArr)  // [1, 4, 9, 16, 25]

//While Loop
let i = 0
while (i <= 5) {
  console.log(i)
  i++
} //1,2,3,4,5

//for of loop
 const languges = ['PHP','JAVASCRIPT','RUBY']
 for(const l of languges){
    console.log(l.toLowerCase());
 }
//break : stop loops
for(const l of languges){
    if(l==='RUBY'){
        break
    }
    console.log(l); //PHP,RUBY
 }
 for (let i = 0;i<10;i++){
    console.log(`${i} * ${i} = ${i*i}`);
 }
