/* VOS BUSCAS ALGO EN EL FORM Y TE DA TODOS LOS ELEMENTOS QUE CONTENGAN ESO QEU BUSCASTE*/

let qsResults = location.search;
console.log(qsResults);
let qstoResults = new URLSearchParams(qsResults);
let nameResults = qstoResults.get("q");

let url= `https://rickandmortyapi.com/api/character/?name=${nameResults}`

fetch(url)
	//recibe la respuesta y la convierte en formato json
	.then(function(response){
        return response.json();
    })
    //aca es donde vamos a poder trabajar cn los datos
	.then(function(data){
       
        let section = document.querySelector(".search-results");
        
        for (let i=0; i<data.results.length; i++ ) {
            let infoR =data.results[i];
            console.log("la data.results es:", infoR);
            section.innerHTML += `<article>
                                        <img src="${infoR.image}" alt='imagen de ${infoR.name}' />
                                        <p>Name: ${infoR.name}</p>
                                        <p>Status:${infoR.status} </p>
                                    </article>`
        };
        
    })
    //en caso de errores
	.catch(function(error){
        console.log('El error es: ' + error);
})
