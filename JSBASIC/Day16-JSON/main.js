// JSON Covert to Object
const usersText = `{
    "users":[
      {
        "firstName":"Thuan",
        "lastName":"Anh",
        "age":22
      },
      {
        "firstName":"Mido",
        "lastName":"Anh",
        "age":23
      },
      {
      "firstName":"Nguyen",
      "lastName":"Le",
      "age":28
      }
    ]
    }`
    
    const usersObj = JSON.parse(usersText)
    console.log(usersObj)

// Object to JSON
const coures = {
    PHP :{
        name :'Khoa hoa PHP',
        id : 1,
        price :200
    },
    JS :{
        name :'Khoa hoa PHP',
        id : 1,
        price :200
    },
    JAVASCRIPT :{
        name :'Khoa hoa PHP',
        id : 1,
        price :200
    },

}
const couresJson = JSON.stringify(coures);
console.log(couresJson);
const user = {
    firstName: 'Thuan',
    lastName: 'Anh',
    country: 'QN',
    city: 'QN',
    email: 'mid@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Pyhton'],
    age: 25,
    points: 30
  }
  
  const txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
  console.log(txt)