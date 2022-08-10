// Defining a class
class Person {
    // code goes here
  }
// class instanse
const person = new Person()
console.log(person)

//Contructor
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
  const person1 = new Person()
  
  console.log(person1)
// class method
class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
  }
  
  const person3 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  console.log(person3.getFullName())
  console.log(person2.getFullName())