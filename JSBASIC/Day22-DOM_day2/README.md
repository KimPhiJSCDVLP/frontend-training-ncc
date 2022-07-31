### Manipulating DOM OBJ
-   Thao tác với DOM

### Create an Element
```js
    let title = document.createElement('h1')
        title.className = 'title'
        title.style.fontSize = '24px'
        title.textContent = 'Creating HTML element DOM Day 2'

        console.log(title)
```
-   Hiển thị ra DOM 
```js
    document.body.appendChild(title)
```
### removeChild 
```js
    const ul = document.querySelector('ul')
        const lists = document.querySelectorAll('li')
        for (const list of lists) {
            ul.removeChild(list)

        }
```
-    hoặc có thể innerHTML
```js
     const ul = document.querySelector('ul')
        ul.innerHTML = ''
```