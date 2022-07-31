const mass = document.querySelector('#kilo')
let massKilo
let weight
const changeMass = () => {
    massKilo = mass.value
}
function selected() {
     weight = document.getElementById("inputState").value;
  }
 const total = () => {
    const totalWeight = massKilo * weight
    const description = document.getElementById("weight")
    description.style.display = "block"
    description.innerHTML = "You selected: " + totalWeight +"N";
   switch (weight) {
    case "10":
       document.getElementById("imageSolar").src="./images/earth.png"
        break;
    case "20" :
        document.getElementById("imageSolar").src="./images/pluto.png"
        break;
    case "30" :
        document.getElementById("imageSolar").src="./images/jupiter.png"
        break;
    case "40" :
        document.getElementById("imageSolar").src="./images/moon.png"
        break;
    case "60" :
        document.getElementById("imageSolar").src="./images/venus.png"
        break;
    default:
        console.log('huhu');
        break;
   }
 }