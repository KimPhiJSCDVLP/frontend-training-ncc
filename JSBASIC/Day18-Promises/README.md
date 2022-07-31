
### Promises : 
-   Xử lý bất đồng bộ trong JAVAScripts
-   cho phép xử lý các hoạt đồng thành công hoặc thất bại
-   tạo Promise 
```js
    var promise = new Promise(
    function (resolve, reject)  {
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
```
-   Có ba trạng thái :
    1. Pendding : trạng thái ban đầu, không hoàn thành cũng như không bị từ chối.
    2. fulfilled : Thành công
    3. rejected : Thất bại
### Fetch API
-   Nạp dữ liệu 
```js
    const url = 'https://restcountries.eu/rest/v2/all' // countries api
    fetch(url)
    .then(response => response.json()) // accessing the API data as JSON
    .then(data => { // getting the data
        console.log(data)
    })
    .catch(error => console.log(error)) // handling error if something wrong happens
```

### Await Asyns
-   Xử lý bất đồng bộ 
-   Asyns trước tên hàm nghĩa là hàm đó trả về promised
-   await truy cập promise đó
```js
    const square = async function (n) {
        return n * n
        }
        const value = await square(2)
```