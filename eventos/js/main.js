// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = document.querySelector("#titulo") ;

    titulo.addEventListener("mouseover", function() {
        let nombre = prompt( "¿CÓMO TE LLAMÁS?");
    });
    let saludo = document.querySelector("#saludo");
    
    let span = document.querySelector(".bienvenida span");
    if (nombre) {
        saludo.innerText+=("BIENVENID@" + nombre);
        saludo.style.textTrasform = "uppercase";
        titulo.style.display = "none";
        span.style.display = "block";
    } else {
        saludo.innerText+=("BIENVENID@");
    }
    let secbienvenida = document.querySelector(".bienvenida");
    let secpersonajes = document.querySelector(".personajes");
    span.addEventListener("click", function() {
        secbienvenida.style.display = "none";
        secpersonajes.style.display = "flex";
    });

    let bart = document.querySelector("#bart");
    let lisa = document.querySelector("#lisa");
    let marge = document.querySelector("#marge");
    let maggie = document.querySelector("#maggie");
    let milhouse = document.querySelector("#milhouse");
    let burns = document.querySelector("#burns");
    let bobPatinio = document.querySelector("#bobPatinio");
    let flanders = document.querySelector("#flanders");
    let duffman = document.querySelector("#duffman");
    let gregory = document.querySelector("#gregory");
    let nelson = document.querySelector("#nelson");

    let sbart = document.querySelector("#bart span");
    let slisa = document.querySelector("#lisa span");
    let smarge = document.querySelector("#marge span");
    let smaggie = document.querySelector("#maggie span");
    let smilhouse = document.querySelector("#milhouse span");
    let sburns = document.querySelector("#burns span");
    let sbobPatinio = document.querySelector("#bobPatinio span");
    let sflanders = document.querySelector("#flanders span");
    let sduffman = document.querySelector("#duffman span");
    let sgregory = document.querySelector("#gregory span");
    let snelson = document.querySelector("#nelson span");
    
    let verpers =document.querySelector()
    
    sbart.addEventListener("click", function() {
        bart.classList.add("personaje-seleccionado");
        bart.classList.remove("personaje-seleccionado");
        bart.classList.contains("personaje-seleccionado");
    });

    slisa.addEventListener("dblckick", function() {
        lisa.classList.add("personaje-seleccionado");
        lisa.classList.remove("personaje-seleccionado");
    });

    smarge.addEventListener("mouseover", function() {
        marge.classList.add("personaje-seleccionado");
        marge.classList.remove("personaje-seleccionado");
    });

    smaggie.addEventListener("mouseout", function() {
        maggie.classList.add("personaje-seleccionado");
        maggie.classList.remove("personaje-seleccionado");
    });

    smilhouse.addEventListener("click", function() {
        milhouse.classList.add("personaje-seleccionado");
        milhouse.classList.remove("personaje-seleccionado");
    });

    sburns.addEventListener("dblckick", function() {
        burns.classList.add("personaje-seleccionado");
        burns.classList.remove("personaje-seleccionado");
    });

    sbobPatinio.addEventListener("click", function() {
        bobPatinio.classList.add("personaje-seleccionado");
        bobPatinio.classList.remove("personaje-seleccionado");
    });

    sflanders.addEventListener("click", function() {
        flanders.classList.add("personaje-seleccionado");
        flanders.classList.remove("personaje-seleccionado");
    });

    sduffman.addEventListener("click", function() {
        duffman.classList.add("personaje-seleccionado");
        duffman.classList.remove("personaje-seleccionado");
    });

    sgregory.addEventListener("click", function() {
        gregory.classList.add("personaje-seleccionado");
        gregory.classList.remove("personaje-seleccionado");
    });
    
    snelson.addEventListener("click", function() {
        nelson.classList.add("personaje-seleccionado");
        nelson.classList.remove("personaje-seleccionado");
    });
 
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    

    /* Asignarle evento a la variable boton */
    let boton = ;
 
 
 }) 