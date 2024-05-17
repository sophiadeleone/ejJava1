let preguntaNom = "cual es tu nombre?";
let nombre = prompt(preguntaNom);
console.log(nombre);

let preguntaEdad = "cual es tu edad?";
let edad = prompt(preguntaEdad);
console.log(edad);

alert("Muchas gracias " + nombre + " por responder nuestras preguntas");

let usuario = {
    deportistaProfesional: function () {
        let mensaje= "sos fan de los deportes?";
        let fan = confirm(mensaje);
        if (fan) {
            console.log("Si, soy fan de los deportes")
        } else {
            console.log("No soy tan fan aún de los deportes")
        }
    }
}