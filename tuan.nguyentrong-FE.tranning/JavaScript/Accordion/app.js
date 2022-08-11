var accTitle = document.getElementsByClassName("content-title");
for (var i = 0; i < accTitle.length; i++) {
    accTitle[i].addEventListener('click', function(){  
        if(this.classList.contains("active")) this.classList.remove("active");
        else this.classList.add("active");

        var acc = this.nextElementSibling;
        if(acc.style.maxHeight === acc.scrollHeight + 'px') acc.style.maxHeight = '0px';
        else acc.style.maxHeight = acc.scrollHeight + 'px';
    })
}