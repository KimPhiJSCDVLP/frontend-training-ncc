
function sidebarToggle() {
    var element = document.getElementById("btn-toggle-sidebarleft");
    if(element.classList.contains("collapsed")) element.classList.remove("collapsed");
    else element.classList.add("collapsed");
}

$(window).bind('resize',function(){
    if ($(window).innerWidth() > 576) {
        var element = document.getElementById("sidebarleft-collapse");
        if(!element.classList.contains("show")) element.classList.add("show");
    }
});