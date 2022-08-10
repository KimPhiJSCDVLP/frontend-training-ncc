import countries from "./countries.js";
const contentItem = document.querySelector('.country-item')
const contentName = document.querySelector('.country-name')
const chardBar = document.querySelector('.chard-bar')
const chardBarLang = document.querySelector('.chart-bar-lang')
const quantity = document.querySelector('.quantity')
const languages = document.querySelector('.languages-list')
const quantityLang = document.querySelector('.quantity-lang')
const countriesItem = document.querySelector('.country-item')
const languagesItem = document.querySelector('.languages-item-wrapper')
const populationBtn = document.querySelector('.population')
const languagesBtn = document.querySelector('.languages')
const countriesContentTitle = document.querySelector('.countries-content-title')
const languagesContentTitle = document.querySelector('.languages-content-title')

populationBtn.addEventListener('click', () => {
    countriesContentTitle.classList.remove('active')
    languagesContentTitle.classList.remove('active')
    countriesItem.classList.remove('active')
    languagesItem.classList.remove('active')
})

languagesBtn.addEventListener('click', () => {
    countriesContentTitle.classList.add('active')
    languagesContentTitle.classList.add('active')
    countriesItem.classList.add('active')
    languagesItem.classList.add('active')
})

const pop = countries.sort((a, b) => {
    return b.population - a.population
})
let arr = pop.slice(0, 10)
arr.map((title) => {
    let countryItem = document.createElement('div')
    countryItem.setAttribute('class', 'country')
    countryItem.innerHTML = title.name
    contentName.appendChild(countryItem)
})
arr.map((chart) => {
    let chartItem = document.createElement('div')
    chartItem.setAttribute('class', 'chart')
    chartItem.innerHTML 
    chardBar.appendChild(chartItem)
})
arr.map((title) => {
    let populationItem = document.createElement('div')
    populationItem.setAttribute('class', 'population-quantity')
    populationItem.innerHTML = title.population
    quantity.appendChild(populationItem)
})


let newArr = []
for (let country of countries) {
    let accessLanguages = country.languages
    for (let i = 0; i < accessLanguages.length; i++) {
        newArr.push(accessLanguages[i])
    }
}
let lg = []
for (let i = 0; i < newArr.length; i++) {
    var found = lg.find(item => item.languages == newArr[i])
    if (found) {
        found.count += 1
    } else {
        found = {}
        found.languages = newArr[i]
        found.count = 1
        lg.push(found)
    }
}

const lang = lg.sort((a, b) => {
    return b.count - a.count
})
const top10Lang = lang.slice(0, 10)
console.log(top10Lang);
top10Lang.map((title) => {
    let languagesItem = document.createElement('div')
    languagesItem.setAttribute('class', 'language')
    languagesItem.innerHTML = title.languages
    languages.appendChild(languagesItem)
})
top10Lang.map((title) => {
    let chartBarLanguagesItem = document.createElement('div')
    chartBarLanguagesItem.setAttribute('class', 'chart-lang')
    chartBarLanguagesItem.innerHTML
    console.log(chartBarLanguagesItem);
    chardBarLang.appendChild(chartBarLanguagesItem)
})
top10Lang.map((title) => {
    let countLanguagesItem = document.createElement('div')
    countLanguagesItem.setAttribute('class', 'language')
    countLanguagesItem.innerHTML = title.count
    quantityLang.appendChild(countLanguagesItem)
})

