let endpointURL =  "https://rickandmortyapi.com/api/character";
let chLSecVar = document.querySelector(".characterList");
let characters = "";        

fetch(endpointURL)
	.then(function(response){
	    return response.json();
})
	.then(function(data){
	    console.log(data.results);
        let charactersInfo = data.results
        for(let i =0; i < charactersInfo.length ; i++ ){
            //console.log(charactersInfo[i]);
            chLSecVar.innerHTML += `
                <article>
                    <img src=${charactersInfo[i].image} alt='foto del personaje ${charactersInfo[i].name}' />
                    <a href="detalle.html?id=${charactersInfo[i].id}">
                    <p>Name: ${charactersInfo[i].name} </p>
                    </a>
                    <p>Status: ${charactersInfo[i].status} </p>
                </article>
            `
        }; 
        
})
	.catch(function(error){
	    console.log('El error es: ' + error);
})

