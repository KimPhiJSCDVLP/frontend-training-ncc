### DOM : DOCUMENT OBJECT MODEL
-   Các method của DOM :
+   getElementsByTagName(): lấy tên element  làm tham số (h1,p,span)
+   getElementsByClassName() : lấy qua className
+   getElementsById() : lấy qua attribute id 
+   querySelector : lấy thông qua tên thẻ , id, class và trả về ele đầu tiên nó tìm đc
+   querySelectorAll : lấy và trả về nodeList các element

### add properties
-   Thêm các props bằng setAttribute
```js
    const titles = document.querySelectorAll('h1')
    titles[3].setAttribute('class', 'title')
    titles[3].setAttribute('id', 'fourth-title')
```
### addClassList
-   Thêm các class bằng classList.add
```js
    titles[3].classList.add('title', 'header-title')
```
### remove ClassList
-   Remove class
```js
    titles[3].classList.remove('title', 'header-title')
```
### add content
```js
const titles2 = document.querySelectorAll('h1')
titles2[3].textContent = 'Fourth Title'
```
### Inner HTML
-   Chèn text vào thẻ hoặc style cho chúng
```js
// inner HTML
        const lists = `
            <li>30DaysOfPython Challenge Done</li>
                    <li>30DaysOfJavaScript Challenge Ongoing</li>
                    <li>30DaysOfReact Challenge Coming</li>
                    <li>30DaysOfFullStack Challenge Coming</li>
                    <li>30DaysOfDataAnalysis Challenge Coming</li>
                    <li>30DaysOfReactNative Challenge Coming</li>
                    <li>30DaysOfMachineLearning Challenge Coming</li>`
        const ul = document.querySelector('ul')
        ul.innerHTML = lists

        // style HTML
        const titles3 = document.querySelectorAll('h1')
        titles3.forEach((title, i) => {
        title.style.fontSize = '24px' // all titles will have 24px font size
        if (i % 2 === 0) {
            title.style.color = 'green'
        } else {
            title.style.color = 'red'
        }
        })
```