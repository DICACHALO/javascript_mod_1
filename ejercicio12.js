//Ejemplo switch

let nombre = prompt("Ingresa tu nombre");
let color = prompt("Ingresa tu color favorito");

switch (color) {
  case "amarillo":
    alert("Eres una persona alegre");
    break;
  case "verde":
    alert("Eres una persona saludable");
    break;
  default:
    alert("Favor ingresa un color");
    break;
}
