const btn = document.getElementById('dropdownMenuButton1');
const dropMenuOne = document.getElementById('dropMenuOne');
const li = document.querySelectorAll('li'); 
const splitBT = document.getElementById('buttonsplit')
const dropMenuTwo = document.getElementById('dropMenuTwo');

const navDrop = document.getElementById('navbarDarkDropdownMenuLink');
const dropMenuThree = document.getElementById('dropMenuThree')

btn.addEventListener('click',()=>{
    dropMenuOne.classList.toggle('show');
})

for( var i = 0 ; i< li.length;i++){
    li[i].addEventListener('click',()=>{
        dropMenuOne.classList.remove('show');
        dropMenuTwo.classList.remove('show-split');
    })
}

splitBT.addEventListener('click',()=>{
    dropMenuTwo.classList.toggle('show-split');
})
navDrop.addEventListener('click',()=>{
    dropMenuThree.classList.toggle('show');
})