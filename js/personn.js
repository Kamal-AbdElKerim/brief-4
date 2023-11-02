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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    const serializedArray = localStorage.getItem('myArray');
    const myArray = JSON.parse(serializedArray);

    // Get the id from the URL query parameter.
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');



   let Personn = myArray[id] ;

  

  

 
 
    
   let button_addon2 = document.getElementById("button-addon2");
 
   let add_prix = parseFloat(Personn.price) ;





   function text_in() {
     let text_in = document.getElementById("text_in");
     let value = text_in.value;
    
     add_prix += 1; // Update the add_prix price
     Personn.price = add_prix; // Update the Personn price
     // Assuming you have the 'id' of the 'Personn' object
const idd = Personn.id;

// Find the index of the 'Personn' object with the given 'id' in the 'menuData' array
const index = menuData.findIndex(item => item.id === idd);

// If the index is found, update the 'price' property
if (index !== -1) {
  menuData[index].price = add_prix;
  console.log(menuData[index].price);
 
}

// 'menuData' now contains the updated 'Personn' object

   
     let newDPerr = document.createElement('div');
     let valuee = document.querySelector('.value');
     console.log(value);
     newDPerr.innerHTML = `
       <h1 style="font-size: 20px;">${value}</h1>
       <h1 style="font-size: 20px;">+1$</h1>
     `;
     valuee.appendChild(newDPerr);
     namee()
    
   }
   


   let listPers = document.querySelector('.listPers');
   
   function namee() {
    
    
    listPers.innerHTML = '';
  
   


    let newDPer = document.createElement('div');
    newDPer.className = 'con';

    newDPer.innerHTML = `
    
  

    <div  class="itm1 ">
    <div class="   mb-4 d-flex justify-content-around align-items-center mt-5  ">

    <img  src="${Personn.img}"  style="width: 100px;" />
        <div>${Personn.name}</div>
        <div>$${Personn.price.toFixed(2)}</div>
  </div>
  <div class="value d-flex justify-content-around " >  
  
  
  </div>
  </div>
  <div class="itm2">
    <div class="co1 d-flex align-items-center">
    <div class="input-group mb-3">
    <input id="text_in" type="text" class="form-control" placeholder="options supplémentaires pour les produits" aria-label="Recipient's username" aria-describedby="button-addon2">
 
  <a  href="#ii" onclick="text_in()" class="btn btn-primary ">add</a>       

  
</div>

</div>
    <div class="co2 "> 
    <a  href="#mySection1" onclick="addToCard(${Personn.id})" class="btn btn-primary ">add panier</a>       
    </div>
  </div>
      `;

        listPers.appendChild(newDPer);

      
   }
  
   namee()




   //0000000000000000000000000000000000000000000000000000000000000000000





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



  