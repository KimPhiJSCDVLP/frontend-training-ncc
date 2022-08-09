// class person {

// }
// const person = new person()
// console.log(person);

// class person {
//     constructor(firstName, lastName) {
//         console.log(this)
//         this.firstName = firstName
//         this.lastName = lastName
//     }
// }
// const ps = new person()
// console.log(ps);

// class person {
//     constructor(
//         firstName = 'Asabehne',
//         lastName = 'Yetayeh',
//         age = 250,
//         country = 'Finland',
//         city = 'Helsinki'
//     ) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//     }
// }
// const person1 = new person()
// const person2 = new person('Nguyen', 'Thien An', 20, 'Viet Nam', 'Ha Noi')
// console.log(person1);
// console.log(person2);

// class person {
//     constructor(firstName, lastName, age, country, city) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//     }
//     getFullName() {
//         const fullName = this.firstName + ' ' + this.lastName
//         return fullName
//     }
// }
// const person1 = new person('Nguyen', 'Van A', 20, 'Viet Nam', 'Vung Tau')
// const person2 = new person('Nguyen', 'Van B', 22, 'Viet Nam', 'Hue')
// console.log(person1.getFullName());
// console.log(person2.getFullName());

// class person {
//     constructor(firstName, lastName, age, country, city) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//         this.score = 0
//         this.skills = [] 
//     } 
//     getFullName() {
//         const fullName = this.firstName + ' ' + this.lastName
//         return fullName
//     }
// }
// const person1 = new person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
// const person2 = new person('Nguyen', 'Thien An', 20, 'Viet Nam', 'Ha Noi')
// person1.skills = ['HTML','CSS','JavaScript']
// person2.skills = ['HTML','CSS','JavaScript','React']
// console.log(person1.getFullName());
// console.log(person2.getFullName());
// console.log(person1.score);
// console.log(person1.skills);
// console.log(person2.skills);

// class Person {
//     constructor(firstName, lastName, age, country, city) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.country = country
//       this.city = city
//       this.score = 0
//       this.skills = []
//     }
//     getFullName() {
//       const fullName = this.firstName + ' ' + this.lastName
//       return fullName
//     }
//     get getScore() {
//       return this.score
//     }
//     get getSkills() {
//       return this.skills
//     }
//     set setScore(score) {
//       this.score += score
//     }
//     set setSkill(skill) {
//       this.skills.push(skill)
//     }
//     getPersonInfo() {
//       let fullName = this.getFullName()
//       let skills =
//         this.skills.length > 0 &&
//         this.skills.slice(0, this.skills.length - 1).join(', ') +
//           ` and ${this.skills[this.skills.length - 1]}`
//       let formattedSkills = skills ? `He knows ${skills}` : ''
  
//       let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
//       return info
//     }
//   }
  
//   const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
//   const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
//   const person3 = new Person('John', 'Doe', 50, 'Mars', 'Mars city')

// person1.setScore = 1
// person2.setScore = 1
// person1.setSkill = 'HTML'
// person1.setSkill = 'CSS'
// person1.setSkill = 'Javascript'
// person2.setSkill = 'Node'
// person2.setSkill = 'Express'
// person2.setSkill = 'MongoDB'

// console.log(person1.getScore)
// console.log(person2.getScore)

// console.log(person1.getSkills)
// console.log(person2.getSkills)
// console.log(person3.getSkills)

// console.log(person1.getPersonInfo())
// console.log(person2.getPersonInfo())
// console.log(person3.getPersonInfo())

// class Student extends Person {
//     saySomeThing() {
//         console.log('I am a child of the person class');
//     }
// }
// const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
// console.log(s1);
// console.log(s1.saySomeThing());
// console.log(s1.getFullName());
// console.log(s1.getPersonInfo);

// class Student extends Person {
//     constructor(firstName, lastName, age, country, city, gender) {
//       super(firstName, lastName, age, country, city)
//       this.gender = gender
//     }
//     saySomething() {
//       console.log('I am a child of the person class')
//     }
//     getPersonInfo() {
//       let fullName = this.getFullName()
//       let skills =
//         this.skills.length > 0 &&
//         this.skills.slice(0, this.skills.length - 1).join(', ') + ` and ${this.skills[this.skills.length - 1]}`
  
//       let formattedSkills = skills ? `He knows ${skills}` : ' '
//       let pronoun = this.gender == 'Male' ? 'He' : 'She'
  
//       let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
//       return info
//     }
//   }
//   const s1 = new Student(
//     'Asabeneh',
//     'Yetayeh',
//     250,
//     'Finland',
//     'Helsinki',
//     'Male'
//   )
//   const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
//   s1.setScore = 1
//   s1.setSkill = 'HTML'
//   s1.setSkill = 'CSS'
//   s1.setSkill = 'JavaScript'
//   s2.setScore = 1
//   s2.setSkill = 'Planning'
//   s2.setSkill = 'Managing'
//   s2.setSkill = 'Organizing'
//   console.log(s1)
//   console.log(s1.saySomething())
//   console.log(s1.getFullName())
//   console.log(s1.getPersonInfo())
//   console.log(s2.saySomething())
//   console.log(s2.getFullName())
//   console.log(s2.getPersonInfo())

// ===============================================================================================
// ===============================================================================================
//                                             LV1
// ===============================================================================================
// ===============================================================================================

// ===============================================================================================
// EX1: Create an Animal class. The class will have name, age, color, legs properties and create
// different methods
// ===============================================================================================

// class Animals {
//     constructor(name, age, color, legs) {
//         this.name = name
//         this.age = age
//         this.color = color
//         this.legs = legs
//     }
//     animalInfo() {
//         return `this is a ${this.color} ${this.name} and it has ${this.legs} legs.`
//     }
//     chirp() {
//     }
// }

// const dog = new Animals('dog', '10', 'black', 'four')
// console.log(dog);
// console.log(dog.animalInfo());

// ===============================================================================================
// EX2: Create a Dog and Cat child class from the Animal Class.
// ===============================================================================================

// class Dog extends Animals {
//     constructor(name, color, legs) {
//         super()
//         this.name = name
//         this.color = color
//         this.legs = legs
//     }
//     dogBark() {
//         return `woof barking ${this.name}.`
//     }
// }

// class Cat extends Animals {
//     constructor(name, color, legs) {
//         super()
//         this.name = name
//         this.color = color
//         this.legs = legs
//     }
//     catBark() {
//         return `meow barking ${this.name}.`
//     }
// }

// const poodle = new Dog('cat', 'pink', 'four')
// const shortHair = new Cat('dog', 'purple', 'four')
// console.log(poodle.animalInfo());
// console.log(shortHair.animalInfo());

// ===============================================================================================
// ===============================================================================================
//                                             LV2
// ===============================================================================================
// ===============================================================================================

// ===============================================================================================
// EX1: Override the method you create in Animal class
// ===============================================================================================

// class Animal extends Animals {
//     constructor(name, age, color, legs) {
//         super(name, age, color, legs) 
//         this.name = name
//         this.age = age
//         this.color = color
//         this.legs = legs
//     }
//     animalInfo() {
//         return `this is ${this.name}.`
//     }
// }
// const newDog = new Animal('Chicken', 20, 'red', 'two')
// console.log(newDog.animalInfo());