const dropDown = document.querySelector('.dropdown-menu');
const btn = document.querySelector('.dropdown-toggle');


btn.addEventListener('click', () => {
    dropDown.classList.toggle('active')
})