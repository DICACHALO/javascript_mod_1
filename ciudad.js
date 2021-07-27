// Ingresar un pueblo o una ciudad y debe responder la app con el departamento

// variable - ifelse 
// 4 ciudades o pueblos  - 4 departamentos


let ciudad = prompt("Ingresa una ciudad");
ciudad = ciudad.toLowerCase();

if (ciudad ==="bucaramanga" || ciudad === "giron" || ciudad==="piedecuesta" || ciudad ==="floridablanca") {
    alert("Esa ciudad corresponde al departamento de Santander")}
    else if (ciudad ==="ocaña" || ciudad === "cucuta" || ciudad==="pamplona" || ciudad ==="abrego") {
        alert("Esa ciudad corresponde al departamento de Norte de Santander")}
    else if (ciudad ==="medellin" || ciudad === "envigado" || ciudad==="bello" || ciudad ==="rionegro") {
        alert("Esa ciudad corresponde al departamento de Antioquia")}
    else if (ciudad ==="quibdo" || ciudad === "nuqui" || ciudad==="jurado" || ciudad ==="novita") {
        alert("Esa ciudad corresponde al departamento de Chocó"); }  
else {
    alert("Escribe una ciudad que esté incluida en las opciones");
}