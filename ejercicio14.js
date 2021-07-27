// Validar tipo de variable y valor


let nombre = prompt("Ingresa tu nombre");
let edad = prompt("Ingresa tu edad");

if (edad>=18) {
    alert("Bienvenida " + nombre + " Tienes acceso al catálogo de películas con contenido violento.");
} else {
    alert("Hola " + nombre + " No tienes acceso al catálogo de películas con contenido violento.");
}

// === Tres iguales se usa para que se compare el tipo de dato y el valor interno
// != Diferente valor
// !== Diferente valor y tipo de dato