import { privateKey, publicKey } from "./auteticaciones";
import { generateHash } from "./operaciones";

//paso 3
export const getMarvelData = (offset) => {
    const timestamp = new Date().getTime().toString();
    const hash = generateHash(timestamp, privateKey, publicKey);
    const limit = 20; // limite de geroees por solicitud
    const apiURL = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

    fetch(apiURL)
    .then((response) => {
        if (!response.ok) {
            throw new Error ('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        renderHeroes(data.data.results);
    })
    .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
    })
}