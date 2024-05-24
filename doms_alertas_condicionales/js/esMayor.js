let num1 = prompt("Ingresa el primer número:");
let num2 = prompt("Ingresa el segundo número:");

let respuesta = document.querySelector(".respuesta");

if (num1 > num2) {
    respuesta.innerText = num1 + " es el número mayor.";
} else if (num2 > num1) {
    respuesta.innerText = num2 + " es el número mayor.";
} else {
    respuesta.innerText = "Los números son iguales.";
}
