const menuData = [
    { id:0 , quantity:0,  img: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000', name: 'Caesar Salad', category: 'salads', price: 9.99 },
    { id:1 , quantity:0,  img: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000', name: 'Teriyaki Bento', category: 'bento', price: 12.99 },
    { id:2 , quantity:0,  img: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000', name: 'Spaghetti Carbonara', category: 'main-dishes', price: 30 },
    { id:3 , quantity:0,  img: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000', name: 'Cheesecake', category: 'desserts', price: 6.99 },
    { id:4 , quantity:0,  img: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000', name: 'Cheesecake', category: 'desserts', price: 6.99 },
    { id:5 , quantity:0,  img: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000', name: 'Cheesecake', category: 'desserts', price: 6.99 },
    { id:6 , quantity:0,  img: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000', name: 'Cheesecake', category: 'desserts', price: 6.99 },
    { id:7 , quantity:0,  img: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000', name: 'Cheesecake', category: 'desserts', price: 6.99 },
    { id:8 , quantity:0,  img: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000', name: 'Cheesecake', category: 'desserts', price: 6.99 },
    { id:9 , quantity:0,  img: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000', name: 'Cheesecake', category: 'desserts', price: 6.99 },
    { id:10, quantity:0,  img: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000', name: 'Cheesecake', category: 'desserts', price: 6.99 },
    { id:11, quantity:0,  img: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000', name: 'Cheesecake', category: 'desserts', price: 6.99 },
    { id:12, quantity:0,  img: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000', name: 'Cheesecake', category: 'desserts', price: 6.99 },
    { id:13, quantity:0,  img: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000', name: 'Cheesecake', category: 'desserts', price: 6.99 },
    { id:14, quantity:0,  img: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000', name: 'Cheesecake', category: 'desserts', price: 6.99 },
    { id:15, quantity:0,  img: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000', name: 'Cheesecake', category: 'desserts', price: 6.99 },
    { id:16, quantity:0,  img: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000', name: 'Cheesecake', category: 'desserts', price: 6.99 },
    // Add more menu items here
];



















// 000000000000000000000000000000000000000000000000000










let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');

let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');



function updateLocalStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(listCards));
}

window.addEventListener('load', () => {
    // Retrieve shopping cart data from local storage
    const savedShoppingCart = localStorage.getItem('shoppingCart');
    
    if (savedShoppingCart) {
        listCards = JSON.parse(savedShoppingCart);
        reloadCard();
    }
});



let listCards  = [];

function addToCard(id){
    if(listCards[id] == null){
        // copy product form list to list card
        listCards[id] = JSON.parse(JSON.stringify(menuData[id]));
        listCards[id].quantity = 1;

        reloadCard();
        updateLocalStorage();
    }
   
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value) => {
        if (value !== null) {
            totalPrice = totalPrice + value.price;
            count = count + value.quantity;

            let newDiv = document.createElement('li');
            newDiv.className = 'mt-4';

            newDiv.innerHTML = `
                <div><img src="${value.img}"/></div>
                <div>${value.name}</div>
                <div>
                <button onclick="changeQuantity(${value.id}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${value.id}, ${value.quantity + 1})">+</button>
            </div>
                <div>$${value.price.toFixed(2)}</div>
             `;

            listCard.appendChild(newDiv);
        }
    });
    // total.innerText = totalPrice.toLocaleString();
    total.innerHTML = ` <div> <a class="text-dark d-flex justify-content-end" href="devis.html">Order(<span class="text-light">$${totalPrice.toFixed(2)}</span>)</a></div>`;

    quantity.innerText = count;
}




function changeQuantity(id, quantit) {
    if (quantit === 0) {
        delete listCards[id];
    } else if (quantit > 0) {
        listCards[id].quantity = quantit;
        listCards[id].price = quantit * menuData[id].price; 
    }
    reloadCard();
    updateLocalStorage();
}


// localStorage.setItem('myArray', JSON.stringify(menuData));
// window.location.href = 'Personnalisation.html';