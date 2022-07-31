// add properties bằng setAttribute
const titles = document.querySelectorAll('h1')
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')
// add classList
//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.add('title', 'header-title')

//remove class
titles[3].classList.remove('title', 'header-title')

// thêm content in HTML
const titles2 = document.querySelectorAll('h1')
titles2[3].textContent = 'Fourth Title'

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