alert("Bienvenidos a mi sitio.");
let pregAvan = confirm("¿Está seguro de querer avanzar?");

if (pregAvan) {
    document.querySelector(".saludo").innerText = "Qué alegría que quieras continuar tu visita";
    let nombre = prompt("ingresa tu nombre");
    document.querySelector("h1").innerText = "bienvenido" + nombre;
    let edad = prompt("cuantos anios tenes?");
    if (edad>17) {
        let pregProg = confirm("te gusta la programacion?");
        if (pregProg) {

        } else {
            
        }
    } else {
        document.querySelector(".container-general").style.display = "none"; 
        document.querySelector("#accesoDenegado").style.display = "block";
    }
} else {
    document.querySelector(".saludo").innerText = "Lamentamos que no quieras continuar tu visita";
}


