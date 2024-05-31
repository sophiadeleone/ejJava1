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
        };
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
        if (bart.classList.contains("personaje-seleccionado")){
            bart.classList.remove("personaje-seleccionado");
        } else {
            bart.classList.add("personaje-seleccionado");
        }
    });

    

    slisa.addEventListener("dblclick", function() {
        if (lisa.classList.contains("personaje-seleccionado")) {
            lisa.classList.remove("personaje-seleccionado");
        } else {
            lisa.classList.add("personaje-seleccionado");
        }
    });

    smarge.addEventListener("mouseover", function() {
        if (marge.classList.contains("personaje-seleccionado")) {
            marge.classList.remove("personaje-seleccionado");
        } else {
            marge.classList.add("personaje-seleccionado");
        }
    });

    smaggie.addEventListener("mouseout", function() {
        if (maggie.classList.contains("personaje-seleccionado")) {
            maggie.classList.remove("personaje-seleccionado");
        } else {
            maggie.classList.add("personaje-seleccionado");
        }
    });

    smilhouse.addEventListener("click", function() {
        if (milhouse.classList.contains("personaje-seleccionado")) {
            milhouse.classList.remove("personaje-seleccionado");
        } else {
            milhouse.classList.add("personaje-seleccionado");
        }
    });

    sburns.addEventListener("dblclick", function() {
        if (burns.classList.contains("personaje-seleccionado")) {
            burns.classList.remove("personaje-seleccionado");
        } else {
            burns.classList.add("personaje-seleccionado");
        }
    });

    sbobPatinio.addEventListener("dblclick", function() {
        if (bobPatinio.classList.contains("personaje-seleccionado")) {
            bobPatinio.classList.remove("personaje-seleccionado");
        } else {
            bobPatinio.classList.add("personaje-seleccionado");
        }
    });

    sflanders.addEventListener("mouseover", function() {
        if (flanders.classList.contains("personaje-seleccionado")) {
            flanders.classList.remove("personaje-seleccionado");
        } else {
            flanders.classList.add("personaje-seleccionado");
        }
    });

    sduffman.addEventListener("dblclick", function() {
        if (duffman.classList.contains("personaje-seleccionado")) {
            duffman.classList.remove("personaje-seleccionado");
        } else {
            duffman.classList.add("personaje-seleccionado");
        }
    });

    sgorgory.addEventListener("mouseover", function() {
        if (gorgory.classList.contains("personaje-seleccionado")) {
            gorgory.classList.remove("personaje-seleccionado");
        } else {
            gorgory.classList.add("personaje-seleccionado");
        }
    });
    
    snelson.addEventListener("click", function() {
        if (nelson.classList.contains("personaje-seleccionado")) {
            nelson.classList.remove("personaje-seleccionado");
        } else {
            nelson.classList.add("personaje-seleccionado");
        }
    });
 
    let boton = document.querySelector(".boton");

    boton.addEventListener("click", function() {
   
        if (bart.classList.contains("personaje-seleccionado")) {
            console.log(bart.querySelector("p").innerText);
        }

        if (lisa.classList.contains("personaje-seleccionado")) {
            console.log(lisa.querySelector("p").innerText);
        }

        if (homero.classList.contains("personaje-seleccionado")) {
            console.log(homero.querySelector("p").innerText);
        }

        if (marge.classList.contains("personaje-seleccionado")) {
            console.log(marge.querySelector("p").innerText);
        }

        if (maggie.classList.contains("personaje-seleccionado")) {
            console.log(maggie.querySelector("p").innerText);
        }

        if (milhouse.classList.contains("personaje-seleccionado")) {
            console.log(milhouse.querySelector("p").innerText);
        }

        if (burns.classList.contains("personaje-seleccionado")) {
            console.log(burns.querySelector("p").innerText);
        }

        if (bobPatinio.classList.contains("personaje-seleccionado")) {
            console.log(bobPatinio.querySelector("p").innerText);
        }

        if (flanders.classList.contains("personaje-seleccionado")) {
            console.log(flanders.querySelector("p").innerText);
        }

       
        if (duffman.classList.contains("personaje-seleccionado")) {
            console.log(duffman.querySelector("p").innerText);
        }

        
        if (gorgory.classList.contains("personaje-seleccionado")) {
            console.log(gorgory.querySelector("p").innerText);
        }

       
        if (nelson.classList.contains("personaje-seleccionado")) {
            console.log(nelson.querySelector("p").innerText);
        }
    });
 
 });