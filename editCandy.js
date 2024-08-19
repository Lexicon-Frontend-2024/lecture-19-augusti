let candyToEdit = {};
let candyProducts = [];
let nameInputEl = document.getElementById('name');
let priceInputEl = document.getElementById('price');
let descInputEl = document.getElementById('description');
onPageLoad();

function onPageLoad() {
    candyToEdit = JSON.parse(localStorage.getItem('candyToEdit'));
    // hämtar listan
    candyProducts = JSON.parse(localStorage.getItem('candyProducts'));
    renderDataToUI();
};

function renderDataToUI() {
    nameInputEl.value = candyToEdit.name;
    priceInputEl.value = candyToEdit.price;
    descInputEl.value = candyToEdit.name;
};

document.querySelector('.updateBtn').addEventListener('click', (e) => {
    // ta värdena från våra input-fält
    let newName = nameInputEl.value;
    let newPrice = priceInputEl.value;
    let newDescription = descInputEl.value;
    console.log(newName, newPrice, newDescription);
    // uppdaterade vår lokala godis-objekt
    candyToEdit.name = newName;
    candyToEdit.price = newPrice;
    candyToEdit.description = newDescription;
    // uppdaterade godiset i LS
    localStorage.setItem('candyToEdit', JSON.stringify(candyToEdit));
    // Uppdatera godiset i listan över godis i LS
    // hitta vart i godislistan befinner sig vårt godis
    let index = candyProducts.findIndex((candyProduct) => candyProduct.id === candyToEdit.id);
    candyProducts.splice(index, 1, candyToEdit);
    localStorage.setItem('candyProducts', JSON.stringify(candyProducts));
    e.preventDefault();
});

document.querySelector('.deleteBtn').addEventListener('click', (e) => {
    // hitta vart i godislistan befinner sig vårt godis
    let index = candyProducts.findIndex((candyProduct) => candyProduct.id === candyToEdit.id);
    // ta bort godiset från lokala listan
    candyProducts.splice(index, 1);
    // uppdatera LS med vår nya lista där godiset är borta ifrån
    localStorage.setItem('candyProducts', JSON.stringify(candyProducts));
    e.preventDefault();
    
});