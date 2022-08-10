const titleRandom = document.getElementById("titleRandom")
const techTitle = document.querySelector('.tech-title')
let colors = '255,255,255'
const randomColor = () => {
    const red = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    colors = (`${red},${blue},${green}`)
}

const titles = [
    'Education',
    'Programer',
    'Content Creator',
    'Motivator',
    'Instructor',
]
const techArr = [
    'NODEJS',
    'JAVASCRIPT',
    'PYTHON',
    'PHP',
    'NET'
]

// random title
const setTitle = ( () => {
    var randomIndex = Math.floor(Math.random() * titles.length);
    var randomElement = titles[randomIndex];
    titleRandom.innerHTML = randomElement
    titleRandom.style.color = `rgb(${colors})`
    randomColor()
      
})
setInterval(() => {
    setTitle()
},2000)

const setTech = ( () => {
    var randomIndex = Math.floor(Math.random() * techArr.length);
    var randomElement = techArr[randomIndex];
    techTitle.innerHTML = randomElement
    techTitle.style.color = `rgb(${colors})`  
    randomColor()
})
setInterval(() => {
    setTech()
},3000)
