const string = "30 Days Of JavaScript: Animating Characters"
// const arrString = Array.from(string);
const h1Elem = document.getElementById("heading")
const span = document.createElement('span')

const body = document.getElementsByTagName('body')[0];
let colors = '255,255,255'
const randomColor = () => {
    const red = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    return colors = (`${red},${blue},${green}`)
}
// h1 color
const appendContent = () => {
    for (let i = 0; i < string.length; i++){
        let s = string.charAt(i)
         span.textContent = `${s}`
          h1Elem.appendChild(span)  
    }
}
appendContent()
//body COlor
const randomBody =  () => {
    body.style.backgroundColor = `rgb(${colors})`
    randomColor()
}
setInterval(() => {
    randomBody()
},2000)

function showTitle(){
    const list = string.split('');
    let content = list.map((item) => `<span style = "color : rgb(${randomColor()})">` +item + `</span>`)
    content = content.join("");
    h1Elem.innerHTML = content

}

showTitle();    
// setInterval(() => {
//     showTitle()
// },1000)