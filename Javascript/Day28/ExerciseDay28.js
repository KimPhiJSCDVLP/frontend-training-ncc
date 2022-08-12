const firstNameInput = document.getElementById('first-name')
const lastNameInput = document.getElementById('last-name')
const countryInput = document.getElementById('country')
const scoreInput = document.getElementById('player-score')
const ul = document.querySelector('.list-items')
const btnAdd = document.querySelector('.last')
const btnDel = document.querySelector('.delete')
const form = document.querySelector('form')
let temp
let lists = []

function renderData() {
    ul.innerHTML = ''
    lists.forEach((item, index) => {
        temp = `
                <div class="left-content">
                    <div class="name-with-date">
                        <div class="name">${item.fullName}</div>
                        <div class="date">20/11/2022</div>
                    </div>
                    <div class="country">${item.country}</div>
                    <div class="score">${item.score}</div>
                </div>
                <div class="group-control">
                    <div class="delete">
                        <p onclick="deleteButton(${index})" class="btn-del"><i class="bi bi-trash"></i></p>
                    </div>
                    <div onclick="addScore(${index})">
                        <p>+5</p>
                    </div>
                    <div onclick="minScore(${index})">
                        <p>-5</p>
                    </div>
                </div>
        `
        // render item
        let li = document.createElement('li')
        li.setAttribute('class', 'list-item')
        li.innerHTML = temp
        ul.appendChild(li)
    })
}
renderData()

function deleteButton(index) {
    console.log(index, 'id');
    lists.splice(index, 1)
    console.log('abc');
    renderData()
}

const addScore = (index) => {
    lists.filter((item, id) => {
        if(id == index) {
            item.score = parseInt(item.score)
            item.score = item.score + 5
        }
    })
    renderData()
}

const minScore = (index) => {
    lists.filter((item, id) => {
        if(id == index) {
            item.score = parseInt(item.score)
            item.score = item.score - 5
        }
    })
    renderData()
}

form.addEventListener('submit', event => {
    event.preventDefault()
    let fullName = firstNameInput.value + ' ' + lastNameInput.value
    let country = countryInput.value
    let score = scoreInput.value
    let list = {
        fullName: fullName,
        country: country,
        score: score
    }
    lists.push(list)
    renderData()
})
