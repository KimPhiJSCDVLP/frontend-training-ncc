// const allTitles = document.getElementsByClassName('title')
// console.log(allTitles);

// for(let i = 0; i < allTitles.length; i++) {
//     console.log(allTitles[i]);
// }
// let firstTitle = document.querySelector('h1')
// let secondTitle = document.querySelector('#second-Title')
// let thirdTitle = document.querySelector('.third-Title')
// console.log(firstTitle);
// console.log(secondTitle);

// const allTitles = document.querySelectorAll('h1')
// console.log(allTitles);

// for(let i = 0; i < allTitles.length; i++) {
//     console.log(allTitles[i]);
// }


// const titles = document.querySelectorAll('h1')
// titles[2].class = 'title'
// titles[2].id = 'fourth-title'
// titles.forEach((title) => console.log(title))

// const titles = document.querySelectorAll('h1')
// titles[3].setAttribute('class', 'title')
// titles[3].setAttribute('id', 'fourth-title')
// titles[3].className = 'title'
// titles[3].id = 'fourth-title'
// titles[3].classList.add('title', 'head-title')
// titles[3].classList.remove('title', 'head-title')
// console.log(titles[3]);

// titles[3].textContent = 'fifth-title'

// for(let i = 0; i < titles.length; i++) {
//     console.log(titles[i]);
// }

// const lists = `
// <li>30DaysOfPython Challenge Done</li>
// <li>30DaysOfJavaScript Challenge Ongoing</li>
// <li>30DaysOfReact Challenge Coming</li>
// <li>30DaysOfFullStack Challenge Coming</li>
// <li>30DaysOfDataAnalysis Challenge Coming</li>
// <li>30DaysOfReactNative Challenge Coming</li>
// <li>30DaysOfMachineLearning Challenge Coming</li>
// `
// const ul = document.querySelector('ul')
// ul.innerHTML = lists

// const titles = document.querySelectorAll('h1')
// titles.forEach((title, i) => {
//     title.style.fontSize = '36px'
//     if(i % 2 === 0) {
//         title.style.color = 'green'
//     } else {
//         title.style.color = 'red'
//     }
// })

// const titles = document.querySelectorAll('h1')
// titles.forEach((title, i) => {
//     title.style.fontSize = '36px'
//     if (i % 2 === 0) {
//         title.style.backgroundColor = 'green' 
//     } else {
//         title.style.backgroundColor = 'red'
//     }
// })

// const titles = document.querySelectorAll('h1')
// titles.forEach((title, i) => {
//     title.style.fontSize = '20px'
//     if (i % 2 === 0) {
//         title.style.fontSize = '36px'
//     } else {
//         title.style.fontSize = '22px'
//     }
// })

// ========================================================================================
// ========================================================================================
//                                          LV1
// ========================================================================================
// ========================================================================================

// ========================================================================================
// EX1: Create an index.html file and put four p elements as above: Get the first 
// paragraph by using document.querySelector(tagname) and tag name
// ========================================================================================

// let getElement = document.querySelector('p')
// getElement.textContent = 'first title'


// ========================================================================================
// EX2: Get get each of the the paragraph using document.querySelector('#id') and 
// by their id
// ========================================================================================

let getElementById1 = document.querySelector('#index1')
let getElementById2 = document.querySelector('#index2')
let getElementById3 = document.querySelector('#index3')
let getElementById4 = document.querySelector('#index4')
getElementById1.textContent = 'first title'
getElementById2.textContent = 'second title'
getElementById3.textContent = 'third title'
getElementById4.textContent = 'fourth title'

// ========================================================================================
// EX3: Get all the p as nodeList using document.querySelectorAll(tagname) and by their 
// tag name
// ========================================================================================

let qsa = document.querySelectorAll('p')
qsa.forEach((item) => {
    item.style.color = 'blue'
    item.style.fontSize = '36px'
})

// ========================================================================================
// EX4: Loop through the nodeList and get the text content of each paragraph
// ========================================================================================

let nodeList = document.querySelectorAll('p')
nodeList.forEach((node) => {
    console.log(node.textContent);
})

// ========================================================================================
// EX5: Set a text content to paragraph the fourth paragraph,Fourth Paragraph
// ========================================================================================

nodeList[3].textContent = 'fourth paragraph'
 
// ========================================================================================
// EX6: Set id and class attribute for all the paragraphs using different attribute 
// setting methods
// ========================================================================================

let firstWay = document.querySelector('p')
firstWay.className = 'first-way'
firstWay.id = 'id1'
console.log(firstWay);

let secondWay = document.querySelectorAll('p')
secondWay[1].setAttribute('class', 'second-way')
secondWay[1].setAttribute('id', 'id2')
console.log(secondWay);

let thirdWay = document.querySelectorAll('p')
thirdWay[2].classList.add('third-way')
console.log(thirdWay);

// ========================================================================================
// ========================================================================================
//                                          LV2
// ========================================================================================
// ========================================================================================

// ========================================================================================
// EX1: Change style of each paragraph using JavaScript(eg. color, background, border, 
// font-size, font-family)
// ========================================================================================

nodeList.forEach((node) => {
    node.style.color = '#fff'
    node.style.backgroundColor = 'gray'
    node.style.border = '5px solid black'
    node.style.fontSize = '56px'
    node.style.fontFamily = 'arial'
})

// ========================================================================================
// EX2+3: Select all paragraphs and loop through each elements and give the first and 
// third paragraph a color of green, and the second and the fourth paragraph a red 
// color
// ========================================================================================

// same as above
