//Pasos para QS
let qs = location.search; //Obtener la qs de la url aka "?clave=valor" en formato de cadena de texto
let qsto = new URLSearchParams(qs); //Transformar la qs en un Objeto Literal
let id = qsto.get('id'); //Obtener el dato de id del objeto literal aclaracion:metodo get es particular para query strings

//Armar un nuevo fetch
let url = `https://rickandmortyapi.com/api/character/${id}`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(data);

        //Paso 1: capturar DOM.
        let title = document.querySelector('h1');
        let image = document.querySelector('img');
        let status = document.querySelector('.status');
        let especie = document.querySelector('.especie');

        //Paso 2 y 3: actualizar datos y actualizar DOM;
        title.innerText = data.name;
        image.src=data.image;
        status.innerText += data.status;
        especie.innerText += data.species;      

    })
    .catch(function(error){
        console.log(error);
    })


// PARA CARRITO

//creo un array vacio para ir completando con los datos
let carrito = [];

//recupero datos del storage (cartItems es una propiedad qeu definimos en esta pagina mas adelante. si llega a no haber nada en el storage, te va a recuperar algo vacio)
let recuperoStorage = localStorage.getItem("cartItems");

//pregunto si hay algo en el storage (pro q si no hay nada y parseo, me va a dar error)
if (recuperoStorage != null) {
    //parseo y ya lo igualo al array carito
    carrito = JSON.parse(recuperoStorage)
}

//selecciono el enlace agregar a carrito
let fav= document.querySelector(".fav")

fav.addEventListener("click", function(e){
    e.preventDefault(); //NO ENTENDI EXACTAMENTE PARA QUE ES ESTE PREVENT DEFAULT. PARA Q NO TE LLEVE AL HREF (UBI DE OTRA PAG) VERDAD? OSEA EL HREF DEL ENLACE AGREGAR A CARRITO(EL Q TIENE CLASE FAV) EN HTML LO DEJE VACIO IGAUL
    //agrego este nuevo id del cual hice click para agregar a carrito en el array carrito (q ya tiene lso ids previos)
    carrito.push(id)
    //convierto al array carrito en str para guardarlo en storage
    let carStr= JSON.stringify(carrito)
    //guardo en el localstorage la propiedad "cartItems"(q es un str)(q lo acabo de crear), y el valor (que es el array carrito q contiene todos los ids, convertido a str)
    localStorage.setItem("cartItems",carStr)

    //cosas no necesarias
    console.log("carrito:", carrito);
    console.log("localStorage:", localStorage)
});

