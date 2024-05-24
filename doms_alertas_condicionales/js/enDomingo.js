let dia = prompt("¿Qué día es hoy?");

let respuesta = document.querySelector(".respuesta");

if (dia === "domingo") {
    respuesta.innerText = "¡Pongamos la olla, hoy se comen pastas!";
} else {
    respuesta.innerText = "Mejor lo dejamos para el domingo";
}