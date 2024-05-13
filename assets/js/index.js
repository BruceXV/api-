import { publicKeykash, privateKey} from "./auteticaciones.js"

import {generateHash, renderHeores} from "./operaciones.js"

// paso 2 Función para generar el hash necesario para la autenticación
function generateHash(timestamp, privateKey, publicKey) {
    const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();
    return hash;
}

//paso 4 renderizar funcion los heores en la pagina
export const renderHeores = (heroes) => {
    const heroesRow = document.getElementById("heroesRow");

    heroes.forEach(hero => {
        //esto es la descricion del catalogo
        const { id, name, description, thumbnail } = hero;
        const { extension, path } = thumbnail;
        // esto es la iamgen 
        const divCol = document.createElement("div");
        divCol.classList.add("col-xl-3", "col-lg-3", "col-md-3", "col-sm-12", "col-xs-12", "mt-2", "mb-2");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = `${path}.${extension}`;
        img.alt = `Image of ${name}`;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = name;

        const desc = document.createElement("p");
        desc.classList.add("card-text");
        desc.textContent = description || "No description available";

        const detailsBtn = document.createElement("button");
        detailsBtn.classList.add("details-btn");
        detailsBtn.textContent = "View Details";
        detailsBtn.addEventListener("click", () => showHeroDetails(hero));

        cardBody.appendChild(title);
        cardBody.appendChild(desc);
        cardBody.appendChild(detailsBtn);

        card.appendChild(img);
        card.appendChild(cardBody);

        divCol.appendChild(card);

        heroesRow.appendChild(divCol);
    });
}


