var acc = document.getElementsByClassName("accordion-header");
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
    content.classList.toggle("show");
  });
}
