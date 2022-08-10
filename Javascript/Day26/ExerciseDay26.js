import countries from "./countries.js";
const content = document.querySelector('.content-container')
const input = document.querySelector('.input')
const sortByAlphabet = document.querySelector('.sortByAlphabet')
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
        if(a > b) {
            return -1
        }
    })
}

let isOrderAtoZ = true
sortByAlphabet.addEventListener('click', () => {
    if(isOrderAtoZ){
        isOrderAtoZ = false;
    }
    else{
         isOrderAtoZ = true;
    }
    renderData();
})

const contentEle = document.querySelector('.content-container');
function renderData() {
    let count = 0
    content.innerHTML = "";
    if(isOrderAtoZ == true) {
         sortDataAToZ()
    } 
    if(isOrderAtoZ == false) {
         sortDataZToA()
    }

    for (let i = 0; i < countryArr.length; i++) {
        createRow = document.createElement('div')
        createRow.setAttribute('class', 'row')
        createRow.innerHTML
        content.appendChild(createRow)
        for (let j = 0; j < countryArr.length; j++) {
            count++
            createCol = document.createElement('div')
            createCol.setAttribute('class', 'item col-lg-2 col-md-3 col-sm-6 col-12')
            createCol.innerHTML = countryArr[j]
            if (count <= countries.length) {
                createRow.appendChild(createCol)
            }
        }
    } 
}
renderData()

input.addEventListener('input', e => {
    console.log(e.target.value);
}) 

