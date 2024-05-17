let nacionalidad = prompt("cual es tu nacionalidad?");
let profesion = prompt("cual es tu profesion?");
let km = prompt("cuantos kilometros caminas por dia?");

let filosofoHipster = function (nacionalidad, profesion, kmsRecorridos) {
    if (nacionalidad== "Argentino" && profesion == "Musico" && kmsRecorridos>2) {
        console.log("Soy un filósofo hipster");
    } else {
        console.log("Aún no soy filósofo hipster")
    }
}