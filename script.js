const API_URL = "https://majazocom.github.io/Data/candyshop.json";

async function getCandiesFromAPI() {
    // hämta godislistan från LS
    let candyProducts = JSON.parse(localStorage.getItem('candyProducts'));
    if (candyProducts) {
        // då har vi redan hämtat från API
        renderCandiesToUI(candyProducts);
    } else {
        // då har vi inte hämtat data från API
        const result = await fetch(API_URL);
        const data = await result.json();
        console.log(data);
        // spara det vi fick från API:et till vår LS
        const dataAsString = JSON.stringify(data);
        localStorage.setItem('candyProducts', dataAsString);
        renderCandiesToUI(data);
    }
}

getCandiesFromAPI();

function renderCandiesToUI(candies) {
    const containerEl = document.querySelector('.candy-products-container');
    candies.forEach(candy => {
        console.log(candy);
        let articleEl = document.createElement('article');
        articleEl.className = "candy-product";
        let figureEl = document.createElement('figure');
        figureEl.innerHTML = candy.svg;
        articleEl.appendChild(figureEl);
        containerEl.appendChild(articleEl);
        let infoAreaEl = document.createElement('section');
        let nameEl = document.createElement('h4');
        nameEl.innerText = candy.name;
        infoAreaEl.appendChild(nameEl);
        let editBtnEl = document.createElement('button');
        editBtnEl.innerText = 'EDIT';
        // här lägger vi till funktionalitet på knappen
        editBtnEl.addEventListener('click', () => {
            let candyAsString = JSON.stringify(candy);
            // skicka in godiset till LS
            localStorage.setItem("candyToEdit", candyAsString);
            document.location = 'editCandy.html';
        });

        infoAreaEl.appendChild(editBtnEl);
        articleEl.appendChild(infoAreaEl);
    });
};

document.querySelector('.goToAdd').addEventListener('click', () => {
    document.location = 'addCandy.html';
});