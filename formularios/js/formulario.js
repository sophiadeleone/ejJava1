let formulario = document.querySelector("form");			//Capturamos el formulario.

//let campoBuscar = document.querySelector(".campoBuscar");	//Capturamos el campo a chequear.

formulario.addEventListener('submit', function(event) {
	event.preventDefault();  		//Detenemos el comportamiento default del formulario que es enviarse.
	
    
if ( campoBuscar.value == "" ) {	//si hay este error ej si el contenido esta vacio
//Informamos al usuario en el html.    	
} else if (){ //si hay este otro error

} else if () {

} else {
this.submit()		//Si no hay errores entonces enviamos el formulario con el método submit()
}

})//todas las condiciones dentro del event listner