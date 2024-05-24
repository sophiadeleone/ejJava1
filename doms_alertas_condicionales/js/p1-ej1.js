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
            document.querySelector("#background-img").innerHTML = `<img src="./img/programmer.jpeg" alt="imggato"></img>`;
        } else {
            document.querySelector("#background-img").innerHTML = `<img src="./img/gatito.jpeg" alt="imggato"></img>`;
        }
    let rutaImagen = prompt("Proporciona la URL de una imagen tuya:");
    let imgAvatar = document.querySelector("img.avatar");
    if (imgAvatar) {
        imgAvatar.src = rutaImagen; /*esta bien esto? lo tuve q preguntar no estaba segura*/
    }

    let pelicula = {
        nombre: "",
        director: "",
        duracion: 0,
        actor: ""
    };

    pelicula.nombre = prompt("Ingresa el nombre de tu película favorita:");
    pelicula.director = prompt("Ingresa el nombre del director:");
    pelicula.duracion = prompt("Ingresa la duración de la película:");
    pelicula.actor = prompt("Ingresa el nombre de un actor destacado en la película:");
    
    let listaPelicula = document.querySelector("#pelicula ul");
    listaPelicula.innerHTML = `
        <li>Nombre: ${pelicula.nombre}</li>
        <li>Director: ${pelicula.director}</li>
        <li>Duración: ${pelicula.duracion} </li>
        <li>Actor: ${pelicula.actor}</li>
    `;

    document.querySelector("#pelicula").style.display = "block";

    } else {
        document.querySelector(".container-general").style.display = "none"; 
        document.querySelector("#accesoDenegado").style.display = "block";
    }
} else {
    document.querySelector(".saludo").innerText = "Lamentamos que no quieras continuar tu visita";
}


