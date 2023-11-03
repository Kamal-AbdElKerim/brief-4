const menuData = [
  { id:0 , myArrayProperty: [] , quantity:0,  img: 'https://lh3.googleusercontent.com/dX6KdmbQtw3u1xObEEe0utLeVxqJxiM-EYnF8tLtT0rT07DF7gYa77ne7TQzbCsR0WiKZ2nCV37GXaKfiG-x2cne9lfth4h2I24=w3247-h3247-c-rw-v1-e365', name: 'Spring Rolls', category: 'Appetizers', price: 21.87},

  { id:1 , myArrayProperty: [] , quantity:0,  img: 'https://www.wokandskillet.com/wp-content/uploads/2015/06/shrimp-tempura.jpg', name: 'Shrimp Tempura', category: 'Appetizers', price: 24.75 },

  { id:2 , myArrayProperty: [] , quantity:0,  img: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/AB343849-D77F-4931-AD14-852B537B09E8/Derivates/ACEB01EA-0393-4FEE-87A0-F1C974B3BCD1.jpg', name: 'Green Papaya Salad', category: 'Appetizers', price: 30.00 },

  { id:3 , myArrayProperty: [] , quantity:0,  img: 'https://images.services.kitchenstories.io/gwBULxPG7Q4QmFzkK_SoUCNJYKA=/3840x0/filters:quality(85)/images.kitchenstories.io/wagtailOriginalImages/R2958-final-photo-.jpg', name: 'Edamame', category: 'Appetizers', price: 16.99 },

  { id:4 , myArrayProperty: [] , quantity:0,  img: 'https://www.cookomix.com/wp-content/uploads/2021/01/gyoza-poulet-chou-thermomix-800x600.jpg', name: 'Gyoza', category: 'Appetizers', price: 26.99 },

  { id:5 , myArrayProperty: [] , quantity:0,  img: 'https://www.allrecipes.com/thmb/c1OA37of-oOYn-AF77bfUZ3L0ZU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/IMG_1043_Proper-British-Fish-Cakes-4x3-1-50ae9028b0d74c229fef53ebd09e577a.jpg', name: 'Thai Fish Cakes', category: 'Appetizers', price: 46.99 },

  { id:6 , myArrayProperty: [] , quantity:0,  img: 'https://usercontent.one/wp/veggieanh.com/wp-content/uploads/2023/07/Bulgogi-Kimbap-with-Tempeh-featured-image.jpg', name: 'Kimbap', category: 'Appetizers', price: 61.89 },

  { id:7 , myArrayProperty: [] , quantity:0,  img: 'https://thebigmansworld.com/wp-content/uploads/2023/03/crab-rangoon-recipe.jpg', name: 'Crab Rangoon', category: 'Appetizers', price: 62.00 },

  { id:8 , myArrayProperty: [] , quantity:0,  img: 'https://cupfulofkale.com/wp-content/uploads/2019/05/Thai-Tofu-Skewers-Peanut-Sauce-735x1103.jpeg', name: 'Tofu Satay', category: 'Appetizers', price: 36.99 },



  { id:9 , myArrayProperty: [] , quantity:0,  img: 'https://kailisbrosleederville.com.au/cdn/shop/products/KailisNov22-0244_1000x.jpg?v=1672273624', name: 'Assorted Nigiri Sushi', category: 'Sushi and Sashimi', price: 6.99 },

{ id:10 , myArrayProperty: [] , quantity:0,  img: 'https://mangoshomekitchen.com/wp-content/uploads/2020/06/salmon-zoomy.jpg', name: 'Salmon Sashimi', category: 'Sushi and Sashimi', price: 55.00 },

  { id:11, myArrayProperty: [] , quantity:0,  img: 'https://foreignfork.com/wp-content/uploads/2023/05/DragonRoll-FEATURE.jpg', name: 'Dragon Roll', category: 'Sushi and Sashimi', price: 71.99 },

  { id:12, myArrayProperty: [] , quantity:0,  img: 'https://img1.wsimg.com/isteam/ip/462982ad-5e11-463a-bd12-2b9eba39a31a/hero-uber.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:1000,cg:true', name: 'Assorted Vegetarian Sushi', category: 'Sushi and Sashimi', price: 68.99 },

  { id:13, myArrayProperty: [] , quantity:0,  img: 'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/recipes_1200_800_fallback/public/Original_18210_tuna-sashimi-sesame.jpg?itok=zE8ecxiB', name: 'Tuna Sashimi', category: 'Sushi and Sashimi', price: 59.99 },

  { id:14, myArrayProperty: [] , quantity:0,  img: 'https://easyweeknightrecipes.com/wp-content/uploads/2022/06/rainbow-sushi-roll-5.jpg', name: 'Rainbow Roll', category: 'Sushi and Sashimi', price: 76.99 },

  { id:15, myArrayProperty: [] , quantity:0,  img: 'https://img.freepik.com/premium-photo/plate-yellowtail-nigiri-highlighting-buttery-mild-flavor-yellowtail-fish_922038-1524.jpg', name: 'Yellowtail Nigiri', category: 'Sushi and Sashimi', price: 99.99 },

  { id:16, myArrayProperty: [] , quantity:0,  img: 'https://norecipes.com/wp-content/uploads/2020/12/spicy-tuna-roll-005.jpg', name: 'Spicy Tuna Roll', category: 'Sushi and Sashimi', price: 62.99 },

  { id:17, myArrayProperty: [] , quantity:0,  img: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000', name: 'Eel Nigiri', category: 'Sushi and Sashimi', price: 80.99 },

{ id:18, myArrayProperty: [] , quantity:0,  img: 'https://www.justonecookbook.com/wp-content/uploads/2022/12/California-Roll-6126-I-2.jpg', name: 'California Roll', category: 'Sushi and Sashimi', price: 66.99 },

   { id:19, myArrayProperty: [] , quantity:0,  img: 'https://veggiekinsblog.com/wp-content/uploads/2020/09/Eggplant-Eel-Unagi-Veggiekins-Blog-12-scaled.jpg', name: 'Eel Nigiri', category: 'Sushi and Sashimi', price: 67.99 }, 



{ id:20 , myArrayProperty: [] , quantity:0,  img: 'https://www.gimmesomeoven.com/wp-content/uploads/2016/01/Miso-Soup-Recipe-9.jpg', name: 'Miso Soup', category: 'Soups', price: 6.99 },

{ id:21 , myArrayProperty: [] , quantity:0,  img: 'https://thewoksoflife.com/wp-content/uploads/2021/10/Tom-Yum-Soup-11.jpg', name: 'Shrimp Tom Yum', category: 'Soups', price: 55.00 },

  { id:22, myArrayProperty: [] , quantity:0,  img: 'https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg', name: 'Chicken Ramen', category: 'Soups', price: 71.99 },

  { id:23, myArrayProperty: [] , quantity:0,  img: 'https://www.gimmesomeoven.com/wp-content/uploads/2016/01/Miso-Soup-Recipe-9.jpg', name: 'Beef Pho', category: 'Soups', price: 68.99 },

  { id:24, myArrayProperty: [] , quantity:0,  img: 'https://www.sainsburysmagazine.co.uk/uploads/media/1800x1800/02/5222-Vietnamese-beef-pho-1120.jpg?v=1-0', name: 'Hot and Sour Soup', category: 'Soups', price: 59.99 },

  { id:25, myArrayProperty: [] , quantity:0,  img: 'https://redhousespice.com/wp-content/uploads/2021/08/Chinese-hot-and-sour-soup-1-scaled.jpg', name: 'Wonton Soupi', category: 'Soups', price: 76.99 },

  { id:26, myArrayProperty: [] , quantity:0,  img: 'https://takestwoeggs.com/wp-content/uploads/2021/05/Easy-Homemade-Wonton-soup-takestwoeggs-sq.jpg', name: 'Seafood Laksa', category: 'Soups', price: 99.99 },

  { id:27, myArrayProperty: [] , quantity:0,  img: 'https://norecipes.com/wp-content/uploads/2020/12/spicy-tuna-roll-005.jpg', name: 'Tom Kha Gai', category: 'Soups', price: 62.99 },

  { id:28, myArrayProperty: [] , quantity:0,  img: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000', name: 'Kimchi Jjigae', category: 'Soups', price: 80.99 },

{ id:29, myArrayProperty: [] , quantity:0,  img: 'https://www.justonecookbook.com/wp-content/uploads/2022/12/California-Roll-6126-I-2.jpg', name: 'Egg Drop Soup', category: 'Soups', price: 66.99 },


{ id:20 , myArrayProperty: [] , quantity:0,  img: 'https://www.sandravalvassori.com/wp-content/uploads/2022/03/Thai-yellow-curry-chicken-10925-2.jpg', name: 'Yellow Curry Chicken', category: 'Main Dishes', price: 6.99 },

{ id:21 , myArrayProperty: [] , quantity:0,  img: 'https://www.aheadofthyme.com/wp-content/uploads/2022/01/cashew-chicken-6.jpg', name: 'Cashew Chicken', category: 'Main Dishes', price: 55.00 },

  { id:22, myArrayProperty: [] , quantity:0,  img: 'https://tiffycooks.com/wp-content/uploads/2021/08/Screen-Shot-2021-09-01-at-12.25.23-AM.png', name: 'General Tsos Chicken', category: 'Main Dishes', price: 71.99 },

  { id:23, myArrayProperty: [] , quantity:0,  img: 'https://s23209.pcdn.co/wp-content/uploads/2023/05/230125_DD_Grilled-Teriyaki-Chicken_478.jpg', name: 'Teriyaki Chicken', category: 'Main Dishes', price: 68.99 },

  { id:24, myArrayProperty: [] , quantity:0,  img: 'https://www.recipetineats.com/wp-content/uploads/2020/08/Sweet-and-Sour-Pork_6.jpg', name: 'Sweet and Sour Pork', category: 'Main Dishes', price: 59.99 },

  { id:25, myArrayProperty: [] , quantity:0,  img: 'https://assets.bonappetit.com/photos/597f6557a2d4466309949378/4:3/w_5011,h_3758,c_limit/0817-murray-mancini-grilled-chinese-beef-broccoli.jpg', name: 'Beef and Broccoli', category: 'Main Dishes', price: 76.99 },

  { id:26, myArrayProperty: [] , quantity:0,  img: 'https://dishingouthealth.com/wp-content/uploads/2022/08/CoconutShrimpSkillet_Square.jpg', name: 'Red Curry Shrimp', category: 'Main Dishes', price: 99.99 },

  { id:27, myArrayProperty: [] , quantity:0,  img: 'https://www.wellplated.com/wp-content/uploads/2019/03/How-to-Make-Tofu-Stir-Fry.jpg', name: 'Tofu Stir-Fry with Mixed Vegetables', category: 'Main Dishes', price: 62.99 },

  { id:28, myArrayProperty: [] , quantity:0,  img: 'https://s23209.pcdn.co/wp-content/uploads/2019/04/Korean-Beef-BulgogiIMG_9246.jpg', name: 'Korean Bulgogi', category: 'Main Dishes', price: 80.99 },

{ id:29, myArrayProperty: [] , quantity:0,  img: 'https://tastesbetterfromscratch.com/wp-content/uploads/2023/06/Thai-Basil-Beef-1', name: 'Thai Basil Beef', category: 'Main Dishes', price: 66.99 },


];

console.log(menuData[2].myArrayProperty);


window.addEventListener('load', () => {
  // Retrieve shopping cart data from local storage
  const savedShoppingCart = localStorage.getItem('shoppingCart');
  
  if (savedShoppingCart) {
      listCards = JSON.parse(savedShoppingCart);
      console.log(listCards);
      reloadCard();
     
  }
 
});



let listCards  = [];
let listCard = document.querySelector(".listCard") ; 
let total = document.querySelector(".total") ; 
let addOption = document.querySelector(".addOption") ; 





function reloadCard() {


      listCard.innerHTML = '';
      let count = 0;
      let totalPrice = 0;
  
      listCards.forEach((value) => {
          if (value !== null) {
         
          
              totalPrice = totalPrice + value.price;

         
              count = count + value.quantity;
  
              let newDiv = document.createElement('div');
              newDiv.className = ' karim main align-items-center';
  
              newDiv.innerHTML = `
              <div class="row align-items-center">
              <div class="col-2"><img style="border-radius: 15px; width: 100px; height: 100px; " class="img-fluid" src="${value.img}"></div>
              <div class="col">
                  <div class="row text-muted">${value.name}</div>
                
               
              </div>
              <div class="col  ">
                  <button  onclick="changeQuantity(${value.id}, ${value.quantity - 1})">-</button>
                  <div class=" count">${value.quantity}</div>
                  <button  onclick="changeQuantity(${value.id}, ${value.quantity + 1})">+</button>						</div>
              <div class="col">&dollar; ${value.price.toFixed(2)} </div>

              </div>
            <div class="per">
              <div class="row mt-3">
              <select style="width: 200px; height: 41px;"  class=" form-select" id="mySelect-${value.id}" onchange="onchangee(${value.id})">
              <option disabled selected>choss..</option>
              <option value="Sweet Chili Sauce">Sweet Chili Sauce</option>
              <option value="Tabasco Sauce">Tabasco Sauce</option>
              <option value="Tabasco Sauce">Tabasco Sauce</option>
              
              </select> 

              <button style="width: 200px; height: 41px;"   class="btn btn-primary" onclick="Rmoveit(${value.id})" type="button"  >
             Rmove
            </button>
              </div>
              <div class="col-6">
             
                ${value.myArrayProperty} 
              
             
              
              
              </div>

              </div>
            
                  `;
              listCard.appendChild(newDiv);

              addOption.innerHTML = `
          

              <div><h5><b>Summary</b></h5></div>
              <hr>
          
              <form>

                  <p>GIVE CODE</p>
                  <input id="code" placeholder="Enter your code">
              </form>
              <div class="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
                  <div class="col">TOTAL PRICE</div>
                  <div class="col text-right">&dollar; ${totalPrice.toFixed(2)}</div>
              </div>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Launch demo modal
                </button>
                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            ...
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <a class="btn btn-primary" href="h.html">Save changes</a>
                          </div>
                        </div>
                      </div>
                    </div>
          
              
              `
          }
          
      });

     
   

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

            // onchangee
                      
            function onchangee(id) {
              const selectedOption = document.querySelector(`#mySelect-${id}`);
              listCards[id].myArrayProperty.push(selectedOption.value);
              listCards[id].price += 1 ;
              reloadCard();
              localStorage.setItem('shoppingCart', JSON.stringify(listCards));
          }

          function Rmoveit(id) {
              if (listCards[id].myArrayProperty.pop()) {
                  listCards[id].price -= 1 ;
              }
          
              reloadCard();
              localStorage.setItem('shoppingCart', JSON.stringify(listCards));
          }
       
          
          

       