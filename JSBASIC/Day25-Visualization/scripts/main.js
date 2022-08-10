import  countries from "../data/countries_data.js";
const colName = document.getElementById("nameCountries")
const progress = document.getElementById("progessCountries")
const progessCountriesLang = document.getElementById("progessCountriesLang")
const population = document.getElementById("valueCountries");
const numberLang = document.getElementById("numberLang")
const btnPopulation = document.getElementById("btnPopulation")
const btnLanguages = document.getElementById("btnLanguages")
const listPopulation = document.getElementById("population")
const listLanguges = document.getElementById("languages")
const nameCountriesLang = document.getElementById("nameCountriesLang")

btnPopulation.addEventListener('click' , () => {
    listPopulation.classList.add('active')
    listLanguges.classList.remove('active')
})

btnLanguages.addEventListener('click' , () => {
    listLanguges.classList.add('active')
    listPopulation.classList.remove('active')
})


//Get toàn bộ dân số thế giới
const totalPopulationHandler = (accumulator,currentValue)=>{
    return accumulator + currentValue.population;
 }
let totalPopulation = countries.reduce(totalPopulationHandler, 0);


const filterPopulation = countries.sort((a, b) => {
    return b.population - a.population
})
let getTenCountries = filterPopulation.slice(0,10);

//WORD
document.getElementById("worldPopulation").innerHTML = totalPopulation

for(let countries of getTenCountries){
    // get Name 
    const rowName = document.createElement('div')
    rowName.classList.add('row');
    rowName.appendChild(document.createTextNode(countries.name))
    colName.appendChild(rowName)
    // getProgress
    const rowProgress = document.createElement('div')
    rowProgress.classList.add('row')
    const progress_row = document.createElement('div')
    progress_row.classList.add('progress','mt-2')

    const progressBar = document.createElement('div')
    progressBar.classList.add('progress-bar','bg-warning')
    progressBar.style.width = `${(countries.population/totalPopulation)*100}%`

    progress.appendChild(rowProgress)
    rowProgress.appendChild(progress_row)
    progress_row.appendChild(progressBar)
    // getPopulation
    const rowPopulation = document.createElement('div')
    rowPopulation.classList.add('row');
    rowPopulation.appendChild(document.createTextNode(countries.population))
    population.appendChild(rowPopulation)


}
// Get quốc gia có ngôn ngữ nhiều nhất 
// const filterLanguages = countries.sort((a, b) => {
//     return b.population - a.population
// })
const filterLanguages = countries.sort((a, b) => {
    return b.languages.length - a.languages.length
})
let getTenLanguages = filterLanguages.slice(0,10);
for(let languages of getTenLanguages){
    // get Name 
    const rowName = document.createElement('div')
    rowName.classList.add('row');
    rowName.appendChild(document.createTextNode(languages.name))
    nameCountriesLang.appendChild(rowName)
    // display progresss

    const rowProgress = document.createElement('div')
    rowProgress.classList.add('row')
    const progress_row = document.createElement('div')
    progress_row.classList.add('progress','mt-2')

    const progressBar = document.createElement('div')
    progressBar.classList.add('progress-bar','bg-warning')
    progressBar.style.width = `${(languages.languages.length) *10}%` 

    progessCountriesLang.appendChild(rowProgress)
    rowProgress.appendChild(progress_row)
    progress_row.appendChild(progressBar)

    // get number langugess
    const rowPopulation = document.createElement('div')
    rowPopulation.classList.add('row','ml-2');
    rowPopulation.appendChild(document.createTextNode(languages.languages.length))
    numberLang.appendChild(rowPopulation)
}