const btnClose = document.querySelector('.btn-close')
const alert_dismissible = document.querySelector('.alert-dismissible')
btnClose.addEventListener('click', () => {
    alert_dismissible.classList.add('hide')
})