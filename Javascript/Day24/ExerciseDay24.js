let massIsRequired = document.querySelector('.massIsRequired p')
let mainImg = document.getElementById('mainImg')
let img = document.getElementById('img')
let select = document.querySelector('select')
let option = document.querySelector('option')
let input = document.getElementById('inputKilo')
let result = document.getElementById('result')
let contentTitle = document.querySelector('.content-title')
let getVal
let mass
let weight


const inputValue = () => {
    mass = parseInt(input.value)
}

const selected = () => {
    getVal = parseInt(select.value)
    mainImg.classList.add('active')
    contentTitle.classList.add('active')
    switch (getVal) {
        case 5:
            img.src = "https://github.com/nccasia/ncc-javascript/blob/main/30-Days-Of-JavaScript/24_Day_Project_solar_system/24_day_starter/images/mercury.png?raw=true"
            break;
        case 10:
            img.src = "https://github.com/nccasia/ncc-javascript/blob/main/30-Days-Of-JavaScript/24_Day_Project_solar_system/24_day_starter/images/venus.png?raw=true"
            break;
        case 20:
            img.src = "https://github.com/nccasia/ncc-javascript/blob/main/30-Days-Of-JavaScript/24_Day_Project_solar_system/24_day_starter/images/earth.png?raw=true"
            break;
        case 30:
            img.src = "https://github.com/nccasia/ncc-javascript/blob/main/30-Days-Of-JavaScript/24_Day_Project_solar_system/24_day_starter/images/moon.png?raw=true"
            break;
        case 40:
            img.src = "https://github.com/nccasia/ncc-javascript/blob/main/30-Days-Of-JavaScript/24_Day_Project_solar_system/24_day_starter/images/mars.png?raw=true"
            break;
        case 50:
            img.src = "https://github.com/nccasia/ncc-javascript/blob/main/30-Days-Of-JavaScript/24_Day_Project_solar_system/24_day_starter/images/jupiter.png?raw=true"
            break;
        case 60:
            img.src = "https://github.com/nccasia/ncc-javascript/blob/main/30-Days-Of-JavaScript/24_Day_Project_solar_system/24_day_starter/images/saturn.png?raw=true"
            break;
        case 70:
            img.src = "https://github.com/nccasia/ncc-javascript/blob/main/30-Days-Of-JavaScript/24_Day_Project_solar_system/24_day_starter/images/uranus.png?raw=true"
            break;
        case 80:
            img.src = "https://github.com/nccasia/ncc-javascript/blob/main/30-Days-Of-JavaScript/24_Day_Project_solar_system/24_day_starter/images/neptune.png?raw=true"
            break;
        case 90:
            img.src = "https://github.com/nccasia/ncc-javascript/blob/main/30-Days-Of-JavaScript/24_Day_Project_solar_system/24_day_starter/images/pluto.png?raw=true"
            break;
    }
}



const calculateWeight = () => {
    let p = mass * getVal
    console.log(p);
    return result.innerHTML = `${p}N`
}
