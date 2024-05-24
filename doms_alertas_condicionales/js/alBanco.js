let dia = prompt("Ingresa un día de la semana:");

let hora = prompt("Ingresa la hora actual :");

let respuesta = document.querySelector(".respuesta");

if (
    (dia === "lunes" || dia === "martes" || dia === "miércoles" || dia === "jueves" || dia === "viernes") &&
    (hora >= 10 && hora < 15)
) {
    respuesta.innerText = "¡Bien! Todavía estamos a tiempo de llegar.";
} else {
    respuesta.innerText = "Uf… No llegamos.";
}

