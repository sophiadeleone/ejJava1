let numero = prompt("Ingresa un número:");
let respuesta = document.querySelector(".respuesta");

if (numero > 0) {
    respuesta.innerText = `El número ${numero} es positivo.`;
} else if (numero === 0) {
    respuesta.innerText = `El número ${numero} es cero.`;
} else {
    respuesta.innerText = `El número ${numero} es negativo.`;
}