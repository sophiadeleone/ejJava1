let preguntaNum = "dame un numero";
let numero = prompt(preguntaNum);
let preguntaOtroNum = "dame otro numero";
let numeroDos = prompt(preguntaOtroNum);

let multiplicar = function (num1, num2) {
    let multiplicacion = num1 * num2;
    console.log("El resultado de multiplicar num1 y num2 es: " + multiplicacion)
}

multiplicar(numero, numeroDos)