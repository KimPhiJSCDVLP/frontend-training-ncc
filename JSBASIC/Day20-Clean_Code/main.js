// For
const hexaColor = () => {
    const str = '0123456789abcdef'
    let hexa = '#'
    let index
    for (let i = 0; i < 6; i++) {
      index = Math.floor(Math.random() * str.length)
      hexa += str[index]
    }
    return hexa
  }

// Objetc
// declaring object literal
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js'],
    isMarried: true
  }
  // iterating through object keys
  for(const key in person) {
      console.log(key, person[key])
  }
  
// class
// defining class
class Person {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  