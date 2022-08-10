const list = document.getElementById("list")
const form = document.querySelector('.addForm')
const ipFirstName = document.getElementById("ipFirstName")
const ipLastName = document.getElementById("ipLastName")
const ipCountry = document.getElementById("ipCountry")
const ipScore = document.getElementById("ipScore")

let todos = [
    {
        firstName : 'Thuan',
        lastName :'Anh',
        score : 90,
        country : 'Quy Nhơn'
    },
    {
        firstName : 'Mido',
        lastName :'Le',
        score : 20,
        country : 'Quy Nhơn'
    },
    {
        firstName : 'Nam',
        lastName :'Nguyen',
        score : 40,
        country : 'Quy Nhơn'
    }
]

//delete

const loadTodo = () => {
    list.innerHTML = "";
    todos.forEach((todo) => {

        const item = document.createElement('div')
        item.classList.add('item','mt-2')

        const itemName = document.createElement('div')
        itemName.classList.add('item-name')
        const firstName = document.createElement('div')
        firstName.classList.add('item-firstName')
        firstName.innerHTML = `<p>${todo.firstName}</p>`
        const lastName = document.createElement('div')
        lastName.classList.add('item-lastName')
        lastName.innerHTML = `<p>${todo.lastName}</p>`
        itemName.appendChild(firstName)
        itemName.appendChild(lastName)
    
        //country
        const country = document.createElement('div')
        country.classList.add('item-country')
        country.innerHTML = `<p>${todo.country}</p>`
    
        //score
        const score = document.createElement('div')
        score.classList.add('item-score')
        score.innerHTML = `<p>${todo.score}</p>`
        
        //handle
        const handle = document.createElement('div')
        handle.classList.add('handle')
        const buttonX = document.createElement('button')
        buttonX.classList.add('btn','btn-danger')
        buttonX.innerHTML = 'x'
        const index = todos.indexOf(todo)
        buttonX.onclick =  deleteHandle = (index) =>{
            todos.splice(index,1);
            loadTodo()
        }
        const buttonSum = document.createElement('button')
        buttonSum.classList.add('btn','btn-success')
        buttonSum.innerHTML = '+'
        buttonSum.onclick = sumScore = () => {
            todo.score = todo.score + 5
            loadTodo()
        }

        const buttonSub = document.createElement('button')
        buttonSub.classList.add('btn','btn-info')
        buttonSub.innerHTML = '-'
        buttonSub.onclick = subScore = () => {
            todo.score = todo.score - 5
            loadTodo()
        }

        handle.appendChild(buttonX)
        handle.appendChild(buttonSum)
        handle.appendChild(buttonSub)
        //
        item.appendChild(itemName)
        item.appendChild(country)
        item.appendChild(score)
        item.appendChild(handle)
        list.appendChild(item)
   
    })
}
loadTodo()
// add item

form.addEventListener('submit', event => {
  event.preventDefault();
   textFirstName = ipFirstName.value.trim();
   textLastName = ipLastName.value.trim();
   textCountry = ipCountry.value.trim();
   textScore = parseInt(ipScore.value.trim());
    itemTodo =  {
    firstName : textFirstName,
    lastName :textLastName,
    score : textScore,
    country : textCountry
}
console.log(itemTodo);
    todos.push(itemTodo)
    loadTodo()
});



