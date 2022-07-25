const sections = document.querySelectorAll("h4[id]");
const scrollContent = document.querySelector('.scrollspy-example');
scrollContent.addEventListener("scroll", scrollSection);
function scrollSection() {
    let scrollY = scrollContent.scrollTop;
    sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop;
    sectionId = current.getAttribute("id");

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
       
      document.querySelector(".list-group-item[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".list-group-item[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}
 