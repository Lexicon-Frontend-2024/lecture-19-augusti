// när man trycker på 'add'-knappen ska datan från inputsen hämtas och läggas i ett objekt

document.querySelector('.addBtn').addEventListener('click', (e) => {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let description = document.getElementById('description').value;
    // spara de nya värdena i ett godis-objekt
    let newCandy = {
        name: name,
        price: price,
        description: description
    };
    // hämta godislistan från LS
    let candyProducts = JSON.parse(localStorage.getItem('candyProducts'));
    candyProducts.push(newCandy);
    localStorage.setItem('candyProducts', JSON.stringify(candyProducts));
    
    e.preventDefault();
});