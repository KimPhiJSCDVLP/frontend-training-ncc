//
var promise = new Promise(
    function (resolve, reject)  {
        //Logic
        //Thành công : resolve
        //Thất bại : reject
        resolve([
            {
                id: 1,
                name : 'JS'
            }
        ]);
    }
);

promise
    .then(function(course) {
        console.log(course);
    })
    .catch(function () {
        console.log('Error');
    })
    .finally(function () {
        console.log('Done');
    })
// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.length > 0) {
        resolve(skills)
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))

// Fetch API
const url = 'https://jsonplaceholder.typicode.com/posts' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => { // getting the data
    console.log(data)
  })
  .catch(error => console.log(error)) // handling error if something wrong happens

//Asysn Await
const fetchData = async () => {
    try {
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.log(err)
    }
  }
  console.log('===== async and await')
  fetchData()