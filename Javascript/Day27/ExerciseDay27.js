const animationBar = document.querySelector('.animation-bar')
const animationText = document.querySelector('.animation-text')
const animationBot = document.querySelector('.animation-text-below-group-item')

const animationHeader = [
    'Instructor',
    'Motivational Speaker',
    'Programmer',
    'Motivator',
    'Content Creator',
    'Educator'
]

const animationBottom = [
    'REACT',
    'PANDAS',
    'NUMPY',
    'HTML',
    'JAVASCRIPT',
    'MONGODB',
    'REDUX',
    'PYTHON',
]

let index = 0
let count = 0
setInterval(() => {
    count++
    let temp = animationHeader[index++ % animationHeader.length]
    animationBar.innerHTML = temp
    console.log(animationText)
}, 2000)

setInterval(() => {
    count++
    let temp = animationBottom[index++ % animationBottom.length]
    animationBot.innerHTML = temp
}, 2000)

// const tl = new AnimationTimeline();
// tl.fromTo(animationBar, 1, {opacity: 0, x: 30}, {opacity: 1, x: 0})