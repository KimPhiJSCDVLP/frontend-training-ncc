const a = document.getElementById('button-1')
const btn = document.getElementById('button-2')
const collapse = document.querySelector('.collapse')
const btnOne = document.getElementById('buttonOne')
const btnTwo = document.getElementById('buttonTwo')
const btnThree = document.getElementById('buttonThree')

const contentOne = document.getElementById('contentOne')
const contentTwo = document.getElementById('contentTwo')

a.addEventListener('click', () => {
    collapse.classList.toggle('active')
})

btn.addEventListener('click', () => {
    collapse.classList.toggle('active')
})

btnOne.addEventListener('click',()=>{
    contentOne.classList.toggle('active');
})

btnTwo.addEventListener('click',()=>{
    contentTwo.classList.toggle('active');
})

btnThree.addEventListener('click',()=>{
    contentTwo.classList.remove('active');
    contentOne.classList.remove('active');
})


