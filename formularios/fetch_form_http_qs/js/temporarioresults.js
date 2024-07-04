let imgR = document.querySelector(".imgResults");
        let nameR = document.querySelector(".pNameResults");
        let statusR = document.querySelector(".statusResults");

        imgR.src = infoR.image;
        nameR.innerText += infoR.name;
        console.log(infoR.name)
        statusR.innerText += infoR.status;

        
        <article>
        <img class="imgResults" src="" alt='' />
        <p class="pNameResults">Name: </p>
        <p class="statusResults">Status: </p>
    </article>