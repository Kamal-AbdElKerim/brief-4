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



const categoryFilter = document.getElementById('category-filter');
const menuItems = document.getElementById('menu-items');
const pagination = document.getElementById('pagination');

categoryFilter.addEventListener('change', filterMenu);
pagination.addEventListener('click', handlePaginationClick);

let currentPage = 1;
const pageSize = 10;
let currentCategory = 'all';

function filterMenu() {
    currentCategory = categoryFilter.value;
    currentPage = 1;
    renderMenu();
}

function handlePaginationClick(event) {
    if (event.target.dataset.page) {
        currentPage = parseInt(event.target.dataset.page);
        renderMenu();
    }
}

function renderMenu() {
    menuItems.innerHTML = '';

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, menuData.length);

    let filteredData;
    if (currentCategory === 'all') {
        filteredData = menuData;
    } else {
        filteredData = menuData.filter(item => item.category === currentCategory);
    }

    for (let i = startIndex; i < endIndex; i++) {
        const item = filteredData[i];

        if (item && item.img) { // Check if item and item.img exist
            const menuItem = document.createElement('div');
            menuItem.className = 'card menu-item col-4 my_card';
            menuItem.innerHTML = `
                <div id="mySection1" class="card-body">
                <img src="${item.img}" class="card-img-top" alt="...">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.category}</p>
                <p class="card-text">${item.price}</p>
                <a  href="#mySection1" onclick="addToCard(${item.id})" class="btn btn-primary">add panier</a>
                <a href="Personnalisation.html?id=${item.id}"  class="btn btn-primary">Go to Personnalisation</a>
                </div>`;


            menuItems.appendChild(menuItem);
        }
    }

    renderPagination();
}




function renderPagination() {
    pagination.innerHTML = '';
    const totalPages = Math.ceil((currentCategory === 'all' ? menuData.length : menuData.filter(item => item.category === currentCategory).length) / pageSize);

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('li');
        pageLink.className = 'page-item ';
        pageLink.innerHTML = `<a  class="page-link" data-page="${i}" href="#mySection">${i}</a>`;
        pagination.appendChild(pageLink);
    }
}

// Initial render
renderMenu();








// 000000000000000000000000000000000000000000000000000










let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');

let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

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
                <div>$${value.price.toFixed(2)}</div>
                <div>
                    <button onclick="changeQuantity(${value.id}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${value.id}, ${value.quantity + 1})">+</button>
                </div>`;

            listCard.appendChild(newDiv);
        }
    });
    // total.innerText = totalPrice.toLocaleString();
    total.innerHTML = ` <div> <a class="text-dark" href="devis.html">Order(<span class="text-danger">$${totalPrice.toFixed(2)}</span>)</a></div>`;

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