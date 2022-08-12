const loginForm = document.getElementById('login-form')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const phoneNumber = document.getElementById('phone')
const userBio = document.getElementById('user-bio')
const firstNameWarn = document.querySelector('.first-name-warn')
const lastNameWarn = document.querySelector('.last-name-warn')
const emailWarn = document.querySelector('.email-warn')
const passwordWarn = document.querySelector('.password-warn')
const phoneWarn = document.querySelector('.phone-warn')
const bioWarn = document.querySelector('.bio-warn')
const btnSubmit = document.querySelector('.btn-submit')
let flag = false
const handleFirstName = () => {
    firstName.addEventListener('input', e => {
        let value = e.target.value
        var pattern = /^[\w]{3,16}$/
        var valid = pattern.test(value)
        if(valid) {
            firstNameWarn.style.display = 'none'
            firstName.style.border = '1px solid green'
            flag = true
        } else {
            firstNameWarn.style.display = 'block' 
            firstName.style.border = '1px solid rgba(0, 0, 0, 0.034)'
            flag = false
        }
    })
}
const handleLastName = () => {
    lastName.addEventListener('input', e => {
        let value = e.target.value
        var pattern = /^[\w]{3,16}$/
        var valid = pattern.test(value)
        if(valid) {
            lastNameWarn.style.display = 'none'
            lastName.style.border = '1px solid green'
            flag = true
        } else {
            lastNameWarn.style.display = 'block' 
            lastName.style.border = '1px solid rgba(0, 0, 0, 0.034)'
            flag = false
        }
    })
}
const handleEmail = () => {
    email.addEventListener('input', e => {
        let value = e.target.value
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        var valid = pattern.test(value)
        if(valid) {
            emailWarn.style.display = 'none'
            email.style.border = '1px solid green'
            flag = true
        } else {
            emailWarn.style.display = 'block'
            email.style.border = '1px solid rgba(0, 0, 0, 0.034)'
            flag = false
        }
    })
}
const handlePassword = () => {
    password.addEventListener('input', e => {
        let value = e.target.value
        let pattern = /((?=.*\d).(?=.*[\W]).{6,20})/
        var valid = pattern.test(value)
        if(valid) {
            passwordWarn.style.display = 'none'
            password.style.border = '1px solid green'
            flag = true
        } else {
            passwordWarn.style.display = 'block'
            password.style.border = '1px solid rgba(0, 0, 0, 0.034)'
            flag = false
        }
    })
}
const handlePhoneNumber = () => {
    phoneNumber.addEventListener('input', e => {
        let value = e.target.value
        let pattern = /^(?:\d{2}-\d{3}-\d{3}-\d{3}|\d{11})$/
        var valid = pattern.test(value)
        if(valid) {
            phoneWarn.style.display = 'none'
            phoneNumber.style.border = '1px solid green'
            flag = true
        } else {
            phoneWarn.style.display = 'block'
            phoneNumber.style.border = '1px solid rgba(0, 0, 0, 0.034)'
            flag = false
        }
    })
}
const handleUserBio = () => {
    userBio.addEventListener('input', e => {
        let value = e.target.value
        let pattern = /^[a-z]+(-[a-z]+)*$/
        var valid = pattern.test(value)
        if(valid) {
            bioWarn.style.display = 'none'
            userBio.style.border = '1px solid green'
            flag = true
        } else {
            bioWarn.style.display = 'block'
            userBio.style.border = '1px solid rgba(0, 0, 0, 0.034)'
            flag = false
        }
    })
}

