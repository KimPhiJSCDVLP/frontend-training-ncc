const dropdownBtn = document.querySelector('#btnGroupDrop1')
const dropdownMenu = document.querySelector('.dropdown-menu')
dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active')
})