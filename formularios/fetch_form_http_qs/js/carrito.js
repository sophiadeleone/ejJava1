//recupero localStorrage
let recuperoStorage = localStorage.getItem("cartItems")

//selecciono la section con clase lista
let lista = document.querySelector(".lista")

//creo un str vacio que lo voy a llenar con los articles con la info delos personajes mas adelante
let elementosCarrito = "";

//pregunto si hay algo en el storage. si no hay nada en el local storage signfica que el usuario nunca clickeo en agregar carrito 
if (recuperoStorage == null) {
    let mensaje = "tu carrito esta vacio"
    //selecciono la etiqueta p con clase empty
    let empty = document.querySelector(".empty")
    empty.innerText = mensaje
} else { //aka si el usuario agrego elelmentos al carrito (osea si hay algo en el local storage)
    carrito = [];
    //convierto en su estado original (de str a array) con parse y lo igualo/agrego al array vacio, carrito. aclaracion, en la primera linea hice recupero storage
    carrito = JSON.parse(recuperoStorage);
    for (let i = 0; i < carrito.length; i++) {
        const id = carrito[i];
        const url = `https://rickandmortyapi.com/api/character/${id}`
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data); //Mostrame por consola.
                elementosCarrito += `<article>
                                        <img src=${data.image}>
                                        <p>Nombre: ${data.name}</p>
                                        <p>Status: ${data.status}</p>
                                        <a href="detalle.html?id=${data.id}">Ver más</a>
                                    </article>`
                lista.innerHTML = elementosCarrito;
            })
            
            .catch(function (error) {
                console.log(error);
            })


    }
}