const text = document.querySelector('.text')
const character = 'ABCDEF0123456789'
const html = document.querySelector('html')
let colors
let string = '30 DAYS OF JAVASCRIPT'
text.style.textAlign = 'center'
text.style.marginTop = '200px'
text.style.fontSize = '10rem'
html.style.backgroundColor = 'rgb(178, 210, 255)'

setInterval(() => {
    randomColor()
    html.style.backgroundColor = colors
}, 1000)

function randomColor() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return colors = `rgb(${r},${g},${b})`
}

function textHandle() {
    let str = string.split('')
    let temp = str.map(char => `<span style="color:${randomColor()}">`+ char +`</span>`)
    temp = temp.join('')
    console.log(temp);
    text.innerHTML = temp
}
textHandle()

setInterval(() => {
    textHandle()
}, 1000)