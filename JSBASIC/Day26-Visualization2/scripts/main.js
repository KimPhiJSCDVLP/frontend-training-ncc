import countries from '../data/countries.js'
const rowList = document.getElementById("rowList")
const searchInput = document.getElementById("searchInput")
const countCountry = document.getElementById("count-country")
const btnStart = document.getElementById("btnStart")
const btnAny = document.getElementById("btnAny")
let searchValue = ""
searchInput.addEventListener('keyup', (event) =>{
    onSearch(event)
})

const onSearch = (event) => {
    searchValue = event.target.value.toLowerCase();
    showCountries()
    }
// Type seacrh
let typeSearch = 0
btnStart.addEventListener('click', () => {
    typeSearch = 0
    console.log(typeSearch);
})   
btnAny.addEventListener('click', () => {
    typeSearch = 1
    console.log(typeSearch);
}) 
//List countries
const showCountries = () => {
    rowList.innerHTML = ""
    let arrCountries = [];
    if(typeSearch == 0){
        if(searchValue){
             arrCountries = countries.filter((item) => {
                return (
                    item[0].toLocaleLowerCase() == searchValue
                )
            })
        }
        else {
            arrCountries = countries;
        }
    }else if(typeSearch == 1){
        if(searchValue){
             arrCountries = countries.filter((item) => {
                return (
                    item.toLowerCase().includes(searchValue)
                )
            })
        }
        else {
            arrCountries = countries;
        }
    }
    arrCountries.forEach((e) => {
        const colCountry = document.createElement('div')
        colCountry.classList.add('col-md-2', 'mt-5')
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        const bg_alpha = document.createElement('div')
        bg_alpha.classList.add('bg-alpha')
        const h5 = document.createElement('h5')
        h5.classList.add('nameCountries')
        h5.innerHTML = e

        rowList.appendChild(colCountry)
        colCountry.appendChild(countryDiv)
        countryDiv.appendChild(bg_alpha)
        bg_alpha.appendChild(h5)
    })
    let total = 0
    for(let i=0 ; i< arrCountries.length; i++){
        total++
    }
    countCountry.innerHTML = `Countries start with <b>${searchValue}</b> are <b>${total}</b>`

}
showCountries()

