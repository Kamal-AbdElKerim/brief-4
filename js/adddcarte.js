



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
        localStorage.setItem('shoppingCart', JSON.stringify(listCards));

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
                <div><img style="border-radius: 15px;  " src="${value.img}"/></div>
                <div class="name">${value.name}</div>
                <div class="price">$${value.price.toFixed(2)}</div>
                <div>
                    <button onclick="changeQuantity(${value.id}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${value.id}, ${value.quantity + 1})">+</button>
                </div>`;

            listCard.appendChild(newDiv);
        }
    });
    // total.innerText = totalPrice.toLocaleString();
    total.innerHTML = ` <div> <a class="text-dark" href="Personnalisation.html">Order(<span class="text-danger">$${totalPrice.toFixed(2)}</span>)</a></div>`;

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
    localStorage.setItem('shoppingCart', JSON.stringify(listCards));

}


// localStorage.setItem('myArray', JSON.stringify(menuData));
// window.location.href = 'Personnalisation.html';