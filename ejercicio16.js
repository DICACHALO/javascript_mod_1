// Variables globales
let datos = document.getElementById("datos");

const nombreUsuario = ()=>{
    let nombre = prompt("Ingresa tu nombre");
    alert(nombre);
    console.log(nombre);
};

// Eventos

datos.onclick = function () {
    nombreUsuario();
}