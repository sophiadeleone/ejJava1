let section = document.querySelector(".search-results");

let qsResults = location.search;
console.log(qsResults);
let qstoResults = new URLSearchParams(qsResults);
let nameResults = qstoResults.get("q");

let url= `https://rickandmortyapi.com/api/character/?q=${nameResults}`

fetch(url)
	//recibe la respuesta y la convierte en formato json
	.then(function(response){
        return response.json();
    })
    //aca es donde vamos a poder trabajar cn los datos
	.then(function(data){
        console.log(data);
        let infoR =data.results;
        let imgR = document.querySelector(".imgResults");
        let nameR = document.querySelector(".pNameResults");
        let statusR = docuemnt.querySelector(".statusResults");

        imgR.src = infoR.image;
        nameR.innerText += infoR.name;
        statusR.innerText += infoR.status;


    })
    //en caso de errores
	.catch(function(error){
        console.log('El error es: ' + error);
})
