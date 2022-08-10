// const companies = new Set()


// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French'
// ]
// const setOfLanguages = new Set(languages)
// setOfLanguages.clear()
// setOfLanguages.add('VietNam')
// setOfLanguages.delete('Finnish')
// console.log(setOfLanguages.has('VietNam'))
// console.log(setOfLanguages.has('Japan'))
// console.log(setOfLanguages);

// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
// ]
// const langSet = new Set(languages)
// console.log(langSet);
// console.log(langSet.size);

// const counts = []
// const count = {}

// for(const l of langSet) {
//     const filteredLang = languages.filter((lng) => lng === l)
//     console.log(filteredLang);
//     counts.push({lang: l, count: filteredLang.length})
// }
// console.log(counts);

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// let c = [...a, ...b]
// console.log(c);

// let A = new Set(a)
// let B = new Set(b)
// let C = new Set(c)

// console.log(C);

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6, 7]
// let A = new Set(a)
// let B = new Set(b)

// let c = a.filter((num) => B.has(num))
// let C = new Set(c)
// console.log(C);

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6, 7]

// let A = new Set(a)
// let B = new Set(b)

// let c = a.filter((num) => !B.has(num))
// console.log(c);

// const map = new Map()
// console.log(map);

// const countries = [
//     ['Findland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo']
// ]
// const map = new Map(countries)
// map.set('VietNam', 'HaNoi')
// map.set('French', 'Paris')
// console.log(map.get('Findland'));
// console.log(map.has('VietNam'));
// console.log(map);
// console.log(map.size);
// for(const country of map) {
//     console.log(country);
// }
// for(const [country, city] of map) {
//     console.log(country, city);
// }

// ===============================================================================
// ===============================================================================
//                                      LV1
// ===============================================================================
// ===============================================================================

// ===============================================================================
// EX1: create an empty set
// ===============================================================================
// let emptySet = new Set()
// console.log(emptySet);

// ===============================================================================
// EX2: Create a set containing 0 to 10 using loop
// ===============================================================================

// let setUsingLoop = new Set()
// for (let i = 0; i < 11; i++) {
//     setUsingLoop.add(i)
// }
// console.log(setUsingLoop);


// ===============================================================================
// EX3: Remove an element from a set
// ===============================================================================

// setUsingLoop.delete(0)
// console.log(setUsingLoop);

// ===============================================================================
// EX4: Clear a set
// ===============================================================================

// setUsingLoop.clear()
// console.log(setUsingLoop);

// ===============================================================================
// EX5: Create a set of 5 string elements from array
// ===============================================================================

// const string = [
//     'Mot', '1',
//     'Hai', '2',
//     'Ba', '3',
//     'Bon', '4',
//     'Nam', '5'
// ]
// const setOfStr = new Set(string)
// console.log(setOfStr);

// ===============================================================================
// EX6: Create a map of countries and number of characters of a country
// ===============================================================================

// const countries = [
//     [1, 'Finland'],
//     [2, 'Sweden'],
//     [3, 'Norway']
// ]
// const mapOfCountries = new Map(countries)
// console.log(mapOfCountries);

// ===============================================================================
// ===============================================================================
//                                      LV2
// ===============================================================================
// ===============================================================================
// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]
// ===============================================================================
// EX1: Find a union b
// ===============================================================================

// const union = [...new Set([...a, ...b])]
// console.log(union);

// ===============================================================================
// EX2: Find a intersection b
// ===============================================================================

// const B = new Set(b)
// const intersection = a.filter((num) => B.has(num))
// console.log(intersection);

// ===============================================================================
// EX3: Find a with b
// ===============================================================================

// const c = new Set([...a,...b])
// console.log(c);

// ===============================================================================
// ===============================================================================
//                                      LV3
// ===============================================================================
// ===============================================================================

// ===============================================================================
// EX1: How many languages are there in the countries object file
// ===============================================================================

// import countries from "./countriesDay10.js";

// function countLanguages() {
//     let arr = []
//     let rs = []
//     let result = []
//     countries.map(country => {
//         let accessLanguages = country.languages
//         accessLanguages.map((language) => {
//             var found = rs.find(lang => lang.languages == language)
//             if(found) {
//                 found.count += 1
//             } else {
//                 found = {}
//                 found.languages = language
//                 found.count = 1
//                 rs.push(found)
//             }
//         })
//     })
//     rs.map(lang => {
//         result.push(lang.languages)
//     })
//     console.log(result);
//     console.log(result.length);
// }
// countLanguages()


// ===============================================================================
// EX2: Use the countries data to find the 10 most spoken languages
// ===============================================================================

// import countries from "./countriesDay10.js";

// function countLanguages() {
//     let arr = []
//     countries.map((country) => {
//         let accessLanguage = country.languages
//         accessLanguage.map((language) => {
//             arr.push(language)
//         })
//     })
//     let rs = []
//     arr.map((language) => {
//         var found = rs.find((lang) => lang.languages == language)
//         if(found) {
//             found.count += 1
//         } else {
//             found = {}
//             found.languages = language
//             found.count = 1
//             rs.push(found)
//         }
//     })
//     rs.sort((a, b) => {
//         return b.count - a.count
//     })
//     let rsSlice = rs.slice(0, 10)
//     let obj = {}
//     let newObj = {}
//     rsSlice.map((e) => {
//         let a = e.languages
//         obj[a] = e.count
//     })

//     console.log(obj);
// }
// countLanguages()