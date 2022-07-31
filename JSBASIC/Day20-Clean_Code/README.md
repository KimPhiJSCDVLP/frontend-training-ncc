### Clean Code
-    Các quy ước Clean Code-    
-   Khai báo biến hoặc hàm sử dụng camelCase (firstName)
-   tên biến bắt đầu bằng chữ cái (age not 10age)
-   dùng `const` để khai báo hằng , array, object
-   dấu ; không cần thiết
-   sử dụng arrow function
-   không có dấu , ở cuối cùng của 1 object
-   += , -=, *= , /=, **=
### Biến
```js

    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let country = 'Finland'
    let city = 'Helsinki'

    const PI = Math.PI
    const gravity = 9.81
```
### Arrray 
-   Tên mảng nên đặt số nhiều : courses, countries
```js
    // arrays
        const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
        const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
        const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
        const languages = ['Amharic', 'Arabic', 'English', 'French', 'Spanish']
        const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python']
        const fruits = ['banana', 'orange', 'mango', 'lemon']
        const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
```
### Function 
```js
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
```
