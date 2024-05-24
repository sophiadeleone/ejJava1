let aplicarDarkMode = confirm("¿Querés aplicar dark mode en el sitio?");

let respuesta = document.querySelector(".respuesta");

if (aplicarDarkMode) {

}else {
    respuesta.innerText = "Ok. Lo activo en otro momento.";
}