import countries from "./countries.js";
const contentItem = document.querySelector('.country-item')
const contentName = document.querySelector('.country-name')
const chardBar = document.querySelector('.chard-bar')
const quantity = document.querySelector('.quantity')
// const content = document.querySelector('.content')

    const pop = countries.sort((a,b) => {
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
    