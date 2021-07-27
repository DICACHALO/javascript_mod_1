//Condicional switch
// Son pocos los casos donde se usa switch
// Para este ejemplo no es útil

let nombre = prompt("Ingresa tu nombre");
let edad = prompt("Ingresa tu edad");

switch (edad) {
    case "18":
        alert("Bienvenida " + nombre + " Tienes acceso al catálogo de películas con contenido violento.");
        break;

    default: 
        alert("Hola " + nombre + " No tienes acceso al catálogo de películas con contenido violento.");
        break;
}