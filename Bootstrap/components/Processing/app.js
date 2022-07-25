const btn = document.querySelector('.btn');
const progress = document.querySelector('.progress-animated');


console.log(btn);
console.log(progress)
btn.addEventListener('click',()=>{
    progress.classList.toggle('progress-bar-animated');
})