const text = document.querySelector('.text')
const character = 'ABCDEF0123456789'
let result = ''
text.innerHTML = '30 DAYS OF JAVASCRIPT'
text.style.textAlign = 'center'
text.style.marginTop = '200px'
text.style.fontSize = '10rem'

setInterval(() => {
    randomColor()
    text.style.color = '#' + result
}, 1000)


function randomColor() {

    for (let i = 0; i < 6; i++) {
        result += character.charAt(Math.floor(Math.random() * 16))
    }
}
