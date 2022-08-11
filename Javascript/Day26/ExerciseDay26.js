import countries from "./countries.js";
const content = document.querySelector('.content-container')
const input = document.querySelector('.input')
const sortByAlphabet = document.querySelector('.sortByAlphabet')
const searchWordBtn = document.querySelector('.search-word')
const startingWordBtn = document.querySelector('.starting-word')
let inputVal
let countryArr = []

let createRow
let createCol

function sortDataAToZ() {
    countryArr = []
    for (let country of countries) {
        countryArr.push(country)
    }
    countryArr.sort((a, b) => a - b)
}
function sortDataZToA() {
    countryArr = []
    for (let country of countries) {
        countryArr.push(country)
    }
    countryArr.sort((a, b) => {
        if (a > b) {
            return -1
        }
    })
}

let isOrderAtoZ = true
sortByAlphabet.addEventListener('click', () => {
    if (isOrderAtoZ) {
        isOrderAtoZ = false;
    }
    else {
        isOrderAtoZ = true;
    }
    renderData();
})

function renderData() {
    if (isOrderAtoZ) {
        sortDataAToZ()
    } else {
        sortDataZToA()
    }
    const row = document.createElement('div')
    row.setAttribute('class', 'row')
    row.innerHTML
    content.appendChild(row)
    countryArr.forEach(country => {
        const col = document.createElement('div')
        col.setAttribute('class', 'item col-lg-2 col-md-3 col-sm-6 col-12')
        col.innerHTML = country
        console.log(col);
        row.appendChild(col)
    });
}
renderData()
searchWordBtn.addEventListener('click', () => {
    input.addEventListener('input', e => {
        renderData()
        let value = e.target.value.toLowerCase()
        if (typeof value == 'string') {
            content.innerHTML = ''
        }
        const result = countryArr.filter(item => item.toLowerCase().includes(value))
        const row = document.createElement('div')
        row.setAttribute('class', 'row')
        row.innerHTML
        content.appendChild(row)
        result.forEach((country) => {
            const col = document.createElement('div')
            col.setAttribute('class', 'item col-lg-2 col-md-3 col-sm-6 col-12')
            col.innerHTML = country
            row.appendChild(col)
        })
    })
})
startingWordBtn.addEventListener('click', () => {
    input.addEventListener('input', e => {
        renderData()
        content.innerHTML = ''
        let value = e.target.value.charAt(0).toLowerCase()
        const result = countryArr.filter(item => item.charAt(0).toLowerCase().includes(value))
        let row = document.createElement('div')
        row.setAttribute('class', 'row')
        row.innerHTML
        content.appendChild(row)
        result.forEach(country => {
            let col = document.createElement('div')
            col.setAttribute('class', 'item col-lg-2 col-md-3 col-sm-6 col-12')
            col.innerHTML = country
            row.appendChild(col)
        })
    })
})
