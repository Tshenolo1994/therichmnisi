//OPEN MENU ON SMALL SCREEN ******
//this function works

function myFunction() {
  const links = document.querySelectorAll(".topnav a");
  var x = document.getElementById("myTopnav");
  const icon = document.querySelector(".topnav .icon");
  const brand = document.querySelector("  .topnav .brand-small");
  if (x.className === "topnav") {
    x.className += " responsive";
    icon.classList.add("open");

  } else {
    x.className = "topnav";
    icon.classList.remove("open");
  }

}

//PRELOADER*****
//this function works
function counter() {
  var count = setInterval(function() {


    var c = parseInt($(".percentage").text());
    $(".percentage").text((++c).toString());
    if (c == 100) {
      clearInterval(count);
      $(".percentage").addClass("hide");
      $(".preloader").addClass("active ");
    }
  }, 20) //interval
}


window.addEventListener("load", counter)



//EMAIL VERIFICATION!!!!
//gives me an error even when email format is correcr
const emailInput = document.querySelector("#email-input");
const errorText = document.createElement("span");
errorText.classList.add( "errorText");
emailInput.parentNode.insertBefore(errorText, emailInput.nextElementSibling);




/*function emailValidation(event){
  event.stopImmediatePropagation();

if(input.match(pattern)){
  console.log("hey");
form.classList.add("valid");
errorText.innerHTML = "Your subscription is confirmed";
submitBtn.style.visibility = "visible";


   }
   else{
    errorText.innerHTML = "please enter valid email address";
    errorText.classList.add("errorText")
    submitBtn.style.visibility = "hidden";
   }
   input.addEventListener("onkeydown", emailValidation);
   submitBtn.addEventListener("submit", emailValidation);
}
*/








const form = document.querySelector(".email");
  const input = document.querySelector("#email-input").value;
   //const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   const submitBtn = document.querySelector(".emailBtn");

   /*form.addEventListener("submit", emailValidation);
   submitBtn.addEventListener("click", emailValidation);
   console.log(input);

   function emailValidation(e){
     e.preventDefault();

     if(input.match(pattern)){
      errorText.innerHTML = "Your subscription is confirmed";
      console.log("confirmed");
     }
  else{
    errorText.innerHTML = "Please enter valid email";
    console.log(" not confirmed");
  }
   }
*/

subscriptionModal = document.querySelector(".subscription-welcome");
subscriptionClose = document.querySelector(".subscription-welcome .closeBtn");



$(document).ready(function validation(){
  $(".email").on('submit', function(e){
    e.preventDefault();
      var email = $('#email-input').val();
      var pat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (email.match(pat)){
        

        errorText.innerHTML = "Your subscription is confirmed";
        errorText.style.color = "#949ba0";
    subscriptionModal.classList.add("slideUp")
        return false;
      } else {
        errorText.innerHTML = "Please enter valid email";
        errorText.style.color = "#FF0000";
        return false;
      }
     
  });
  $(form).submit(function(){
    setTimeout(function(){
      form.reset();
      submitBtn.style.visibility = "hidden";
      errorText.innerHTML ="";
    }, 3000);
});
  emailInput.addEventListener("focus", function(){
    submitBtn.style.visibility = "visible";
  });
  submitBtn.addEventListener("submit", validation);
subscriptionClose.addEventListener("click", function(){
  subscriptionModal.classList.remove("slideUp");
})
});






//ACCORDION FUNCTION
//this function workd

const navBtns = document.querySelectorAll(".topnav a");
const container = document.querySelector(".filter-btn-container");
navBtns.forEach(function(navBtn) {
  navBtn.addEventListener("click", function() {
    if (navBtn.classList.contains("women") || navBtn.classList.contains("men")) {
      if (container.style.maxHeight) {
        container.style.maxHeight = null;
      } else {
        container.style.maxHeight = container.scrollHeight + "px";

      }
    }
  })

});



//PRODUCTS FUNCTION
//array for products
const items = [{
    id: 1,
    img: "https://cdn.shopify.com/s/files/1/0340/7590/2087/products/RMDROP4-07_c396d0af-d376-4c74-8826-ea14cb40a722_1296x.jpg?v=1596740361",
    productName: "This Ain't PT shorts",
    productPrice: 1299.00,
    colour: {
      colourOne: "black",
      colourTwo: "white",
      colourThree: "",
      colourFour: "",
      colourFive: "",

    },
    categoryFemale: "female",
    categoryMale: "men",



    category: "bottoms",
    category: "shop all",
  },




  {

    id: 2,
    img: "https://cdn.shopify.com/s/files/1/0340/7590/2087/products/5_900x.jpg?v=1591552323",
    productName: "forces trousers",
    productPrice: 1799.00,
    colour: {
      colourOne: "black",
      colourTwo: "blue",
      colourThree: "orange",
      colourFour: "purple",
      colourFive: "pink",

    },
    categoryMale: "men",


    category: "trousers",


  },

  {
    id: 3,
    img: "https://cdn.shopify.com/s/files/1/0340/7590/2087/products/20_db92fa3d-d60d-4983-bb5d-26f53eaa44ce_1296x.jpg?v=1591554053",
    productName: "dlamini skirt",
    productPrice: 1799.00,
    colour: {
      colourOne: "black",
      colourTwo: "blue",
      colourThree: "orange",
      colourFour: "purple",
      colourFive: "pink",

    },
    categoryFemale: "women",

    category: "skirts",


  },
  {
    id: 4,
    img: "https://cdn.shopify.com/s/files/1/0340/7590/2087/products/7_1296x.jpg?v=1591553232",
    productName: "on the highway scarf",
    productPrice: 999.00,
    colour: {
      colourOne: "black",
      colourTwo: "blue",
      colourThree: "orange",
      colourFour: "purple",
      colourFive: "pink",

    },

    categoryFemale: "women",
    categoryMale: "men",

    category: "accessories",
  },
  {
    id: 5,
    img: "https://cdn.shopify.com/s/files/1/0340/7590/2087/products/24_8c7c4196-1751-4169-ab31-d71b7099c2f8_1296x.jpg?v=1593198028",
    productName: "Dlamini skirt",
    productPrice: 1299.00,
    colour: {
      colourOne: "black",
      colourTwo: "blue",
      colourThree: "orange",
      colourFour: "purple",
      colourFive: "pink",

    },
    categoryFemale: "women",

    category: "skirts",
  },
  {
    id: 6,
    img: "https://cdn.shopify.com/s/files/1/0340/7590/2087/products/RMDROP4-28_b3d6ded8-6f73-4e7e-b30e-dc37e9b798cd_900x.jpg?v=1595199503",
    productName: "Veins of my City Trousers",
    productPrice: 3799.00,
    colour: {
      colourOne: "blue",
      colourTwo: "",
      colourThree: "",
      colourFour: "",
      colourFive: "",

    },

    categoryMale: "men",

    category: "trousers",
  },
  {
    id: 7,
    img: "https://cdn.shopify.com/s/files/1/0340/7590/2087/products/RMDROP4-44_900x.jpg?v=1595199789",
    productName: "compass skirt",
    productPrice: 2999.00,
    colour: {
      colourOne: "blue",
      colourTwo: "",
      colourThree: "",
      colourFour: "",
      colourFive: "",

    },

    categoryMale: "female",
    category: "skirts",

  },
  {
    id: 8,
    img: "https://cdn.shopify.com/s/files/1/0340/7590/2087/products/RMDROP4-35_900x.jpg?v=1595197419",
    productName: "Catty Bucket",
    productPrice: 1299.00,
    colour: {
      colourOne: "black",
      colourTwo: "",
      colourThree: "",
      colourFour: "",
      colourFive: "",

    },
    categoryMale: "men",
    categoryMale: "female",

    category: "accesories",
  },
  {
    id: 9,
    img: "https://cdn.shopify.com/s/files/1/0340/7590/2087/products/RMDROP4-19_ca2b4fc4-8e03-4897-b6a4-8201ccdedb90_1296x.jpg?v=1595199361",
    productName: "Veins of my City Tube",
    productPrice: 1299.00,
    colour: {
      colourOne: "blue",
      colourTwo: "",
      colourThree: "",
      colourFour: "",
      colourFive: "",

    },
    categoryMale: "men",
    categoryMale: "female",

    category: "tops",
  },
  {
    id: 10,
    img: "https://cdn.shopify.com/s/files/1/0340/7590/2087/products/RMDROP4-4_da345a55-8ce7-412d-aa6b-83489a7f45c5_1296x.jpg?v=1595203165",
    productName: "Compass sweater",
    productPrice: 2099.00,
    colour: {
      colourOne: "white",
      colourTwo: "",
      colourThree: "",
      colourFour: "",
      colourFive: "",

    },
    categoryMale: "men",

    category: "tops",
  },
  {
    id: 11,
    img: "https://cdn.shopify.com/s/files/1/0340/7590/2087/products/20_02_28_RM_BAgs3438copy_1296x.jpg?v=1590426941",
    productName: "Azania CSS.03",
    productPrice: 2099.00,
    colour: {
      colourOne: "black",
      colourTwo: "",
      colourThree: "",
      colourFour: "",
      colourFive: "",

    },
    categoryMale: "female",

    category: "accesories",
  },
  {
    id: 12,
    img: "https://cdn.shopify.com/s/files/1/0340/7590/2087/products/RMDROP4-05_b511dd8e-c41e-41d3-b3b5-205243308924_900x.jpg?v=1595196439",
    productName: "Frequency trousers",
    productPrice: 1899.00,
    colour: "black",
    categoryMale: "male",
    categoryFemale: "female",

    category: "trousers",
  },
  {
    id: 13,
    img: "https://cdn.shopify.com/s/files/1/0340/7590/2087/products/RMDROP4-42_900x.jpg?v=1595203686",
    productName: "mother turtleneck",
    productPrice: 2899.00,
    colour: {
      colourOne: "white",
      colourTwo: "",
      colourThree: "",
      colourFour: "",
      colourFive: "",

    },
    categoryMale: "female",

    category: "tops",
  },
  {
    id: 14,
    img: "https://cdn.shopify.com/s/files/1/0340/7590/2087/products/20_02_28_RM_BAgs3356_1296x.jpg?v=1590426775",
    productName: "Azania CSS.02",
    productPrice: 19999.00,
    colour: {
      colourOne: "brown",
      colourTwo: "",
      colourThree: "",
      colourFour: "",
      colourFive: "",

    },
    categoryMale: "female",

    category: "bags",
  },
  {
    id: 15,
    img: "https://cdn.shopify.com/s/files/1/0340/7590/2087/products/RMDROP4-14_165eead5-9116-4ada-bc01-eeb28876824b_900x.jpg?v=1595195426",
    productName: "The Antenna sweartshirt",
    productPrice: 2399.00,
    colour: {
      colourOne: "black",
      colourTwo: "",
      colourThree: "",
      colourFour: "",
      colourFive: "",

    },
    categoryMale: "male",
    categoryFemale: "female",

    category: "coats & jackets",
  },
  {
    id: 16,
    img: "https://cdn.shopify.com/s/files/1/0340/7590/2087/products/RMDROP4-02_0957dbfd-2496-49ab-84a3-3abafb02eaae_900x.jpg?v=1595196791",
    productName: "Venomous Wallet",
    productPrice: 999.00,
    colour: {
      colourOne: "black",
      colourTwo: "",
      colourThree: "",
      colourFour: "",
      colourFive: "",

    },
    categoryMale: "male",
    categoryFemale: "female",

    category: "accesories",
  },
  {
    id: 17,
    img: "https://cdn.shopify.com/s/files/1/0340/7590/2087/products/RMDROP4-38_1296x.jpg?v=1595197743",
    productName: "A Bloody Bucket Hat",
    productPrice: 1299.00,
    colour: {
      colourOne: "red",
      colourTwo: "",
      colourThree: "",
      colourFour: "",
      colourFive: "",

    },
    categoryMale: "male",
    categoryFemale: "female",

    category: "accessories",
  },
  {
    id: 18,
    img: "https://cdn.shopify.com/s/files/1/0340/7590/2087/products/20_02_28_RM_BAgs3622copy_1296x.jpg?v=1590426898",
    productName: "Azania CSS.01",
    productPrice: 31999.00,
    colour: {
      colourOne: "black",
      colourTwo: "",
      colourThree: "",
      colourFour: "",
      colourFive: "",

    },
    categoryFemale: "female",

    category: "bags",
  },
  {
    id: 19,
    img: "https://cdn.shopify.com/s/files/1/0340/7590/2087/products/RMDROP4-09_90163746-e252-4b14-872b-442491f9a447_1296x.jpg?v=1595195957",
    productName: "My First Tattoo t shirt",
    productPrice: 999.00,
    colour: {
      colourOne: "white",
      colourTwo: "",
      colourThree: "",
      colourFour: "",
      colourFive: "",

    },
    categoryMale: "male",
    categoryFemale: "female",

    category: "shirts",
  },
  {
    id: 20,
    img: "https://cdn.shopify.com/s/files/1/0340/7590/2087/products/RMDROP4-11_900x.jpg?v=1593116545",
    productName: "ewALLET BAG",
    productPrice: 999.00,
    colour: {
      colourOne: "black",
      colourTwo: "",
      colourThree: "",
      colourFour: "",
      colourFive: "",

    },
    categoryMale: "male",
    categoryFemale: "female",

    category: "bags",
  },
  {
    id: 21,
    img: "https://storage.googleapis.com/website-zkhiphani/uploads/2020/06/7fbdbbeb-a-mask-rich-mnisi-2.png",
    productName: "Alkebulan face mask",
    productPrice: 999.00,
    colour: {
      colourOne: "black",
      colourTwo: "",
      colourThree: "",
      colourFour: "",
      colourFive: "",

    },
    categoryMale: "male",
    categoryFemale: "female",

    category: "accessories",

  },
  {
    id: 22,
    img: "https://cdn.shopify.com/s/files/1/0340/7590/2087/products/20_05_23_RM_Mask1268_1024x1024@2x.jpg?v=1590407611",
    productName: "Swaroski Crystals leopard face mask",
    productPrice: 999.00,
    colour: {
      colourOne: "red",
      colourTwo: "",
      colourThree: "",
      colourFour: "",
      colourFive: "",

    },
    categoryMale: "male",
    categoryFemale: "female",

    category: "accessories",
  },
  {
    id: 23,
    img: "https://cdn.shopify.com/s/files/1/0340/7590/2087/products/DSC433n3_1296x.jpg?v=1591661930",
    productName: "the pride tote",
    productPrice: 5999.00,
    colour: {
      colourOne: "blue",
      colourTwo: "",
      colourThree: "",
      colourFour: "",
      colourFive: "",

    },
    categoryMale: "male",
    categoryFemale: "female",

    category: "bags",
  },

];

//FILTER ITEMS
const filterbtns = document.querySelectorAll(".filter-btn");
const itemContainer = document.querySelector(".grid-product");


window.addEventListener("DOMContentLoaded", function() {

  displayProductItems(items);
});

//FILTER ITEMS

/*filterbtns.forEach(function(btn){
  btn.addEventListener("click", function (e) {
    // console.log(e.currentTarget.dataset);
    const category = e.currentTarget.dataset.id;
    const menuCategory = items.filter(function (item) {
      // console.log(menuItem.category);
      if (item.dataset.category === category) {

        return item;
      }

    });

  });
});
*/
/*
filterbtns.forEach(function(btn){
  btn.addEventListener("click", function (e) {


    const filter = e.currentTarget.dataset.id;
   items.filter(function (item) {

      if (item.category === filter) {
        console.log("hey");
        console.log(item);
     return item;
      }

    });
  });
});
*/
//The main issue
//THE SHOPPING CART
let cart = [];
let buttonsDOM = [];

/*
getting the products
class Products{
getProducts(){

}
}
display products
class UI {

}
local Storage

class Storage {

}
*/

document.addEventListener("DOMContentLoaded", () => {
  /*const ui = new  UI();
  const products = new Products();*/
  //set up app


})

//DISPLAY PRODUCTS
//adding products dynamically
function displayProductItems() {
  let displayItems = items.map(function(item) {
    const colours = document.querySelectorAll(".fa-circle")

    return `<article class="product" data-category="${item.category}">
      <img src=${item.img}>
      <div class=product-details>
          <button class="bag-btn btn marquee" data-id=${item.id}><p>ADD to cart</p></button>
        <h5 class="product-name">${item.productName}</h5>
        <h5 class="product-size">R${item.productPrice}</h5>
      </div>

      <div class="colours">
                  <span class=colourOne"><i class="fas fa-circle"></i></span>
                  <span cclass=colourTwo"><i class="fas fa-circle"></i></span>
                  <span class=colourThree"><i class="fas fa-circle"></i></span>
                  <span class=colourFour"><i class="fas fa-circle"></i></span>
                  <span class=colourFive"><i class="fas fa-circle"></i></span>
                </div>
    </article>`

  })
  displayItems = displayItems.join("");
  itemContainer.innerHTML = displayItems;

  console.log(displayItems)
  const buttons = [...document.querySelectorAll(".bag-btn")];
  buttonsDOM = buttons;

  //ADD TO CART BUTTONS
  
  filterbtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
  

      const filter = e.currentTarget.dataset.id;
      items.filter(function(item) {

        if (item.category === filter) {
          
          // return item.category;
          let items = document.querySelectorAll(`[data-category="${item.category}"]`);
     
          for(i = 0; i < items.length; i++){
            items[i].classList.remove('hide')
          }
        }
        if(item.category !== filter) {
          //reveal message if button has no items
         
          let items = document.querySelectorAll(`[data-category="${item.category}"]`);
      
          for(i = 0; i < items.length; i++){
            items[i].classList.add('hide')
           
          }
        }//end
        if (filter === "all") {
          displayProductItems(items);
        } 
     
       
      });
    });
  });





  buttons.forEach(function(button) {
    let id = button.dataset.id;
    let inCart = cart.find(item => item.id === id);
    if (inCart) {
      button.innerText = "In Cart";
    }
    //else
    else {
      button.addEventListener("click", function(e) {
        e.target.innerHTML = "In Cart";
        e.target.disabled = true;
        button.style.visibility = "visible";
        button.style.backgroundColor = "rgba(236,235,228,.5)";
        button.disabled = true;
        //get products from items
        let cartItem = {
          ...Storage.getProducts(id),
          amount: 1
        };

        //add product to cart
        cart = [...cart, cartItem];
        //save cart to local storage
        Storage.saveCart(cart)

        //set cart values
        setCartValues(cart);
        //display cart item
        addCartItem(cartItem);
        //show the cart
        showCart();
        cartLogic();

      }); //function end


    }


    //end
  });

  function setCartValues(cart) { //this function works **add total to cart
    const grandTotal = document.querySelector(".grand-total")
    let tempTotal = 0;
    let ItemsTotal = 0;
    cart.map(item => {
      tempTotal += item.productPrice * item.amount;
      ItemsTotal += item.amount;

    })
    grandTotal.innerHTML = parseFloat(tempTotal.toFixed(2));
    cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
    cartItems.innerText = ItemsTotal;
    numOfitems.innerHTML = ItemsTotal;
    console.log(cartTotal, cartItems);

  }
  //adding the selected item to cart
  function addCartItem(item) {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = ` <img src=${item.img}>
  <div class="count">
     <i class="fas fa-chevron-up " data-id=${item.id}></i>
  <span class="item-amount">${item.amount} Qty</span>&nbsp;
  <i class="fas fa-chevron-down" data-id=${item.id}></i>

  </div>
  <div class="details">
      <h5>${item.productName}</h5>
      <h5 clas="price">R${item.productPrice}</h5>

         <h5 class="remove-item" data-id=${item.id}>remove</h5>

  </div>

  `;
    cartContent.appendChild(div);
    console.log(cartContent)
  }

  function showCart() {
    cartOverlay.classList.add("transparentBcg");
    cartDOM.classList.add("showCart");

  }
  /*function setupAPP(){
 cart = Storage.getCart();
 setCartValues(cart);
  populate(cart);
 cartBtn.addEventListener("click",showCart);
 closeCartBtn.addEventListener("click",hideCart)
   }
*/

  setCartValues(cart);
  populate(cart);
  cartBtn.addEventListener("click", showCart);
  closeCartBtn.addEventListener("click", hideCart)

  function populate(cart) {
    cart.forEach(item => this.addCartItem(item))
  }

  function hideCart() {
    cartOverlay.classList.remove("transparentBcg");
    cartDOM.classList.remove("showCart");
  }
  //function cartLogic(){
  //cart functionality
  //cartItems.forEach(id=> removeItem(id))

  //remove item
  //not wokring
  //price does not deduct
  function cartLogic() {
    clearCartBtn.addEventListener("click", function() {
      clearCart();
    });

    cartContent.addEventListener("click", e => {
      if (e.target.classList.contains("remove-item")) {
        let removeItem = e.target;
        let id = removeItem.dataset.id;
        cartContent.removeChild(removeItem.parentElement.parentElement);
        cart = cart.filter(item => item.id !== Number(id));
        console.warn("This is my cart ====>", cart)
        setCartValues(cart);
        Storage.saveCart(cart);
        let button = getSingleButton(id);
        button.disabled = false;
        button.style.backgroundColor = "rgba(236,235,228,1)";
        button.innerHTML = "ADD TO CART";
        button.style.visibility = "visible";

      }
    })
  }


  //remove item
  //not wokring
  //price does not deduct
  function clearCart() {
    let cartItems = cart.map(item => item.id);
    cartItems.forEach(id => removeItem(id))
    while (cartContent.children.length > 0) {
      cartContent.removeChild(cartContent.children[0])
    }
    hideCart();
  }


  /*function removeItem(id) {
    console.log("aaaaaaaaa")
  cart = cart.filter(item => item.id !==id);
  setCartValues(cart);
  Storage.saveCart(cart);
  let button = getSingleButton(id);
  button.disabled = false;
  button.firstChild.innerText = "ADD TO CART";



   //end forEach


  }

  */

  function getSingleButton(id) {
    // return buttonsDOM.find(button.dataset.id === id)
    var button = document.body.querySelector(`[data-id="${id}"]`)

    return button
  }


}
/*
function removeItem(id){
  cart = cart.filter(item => item.id !== id);
  setCartValues(id);
  Storage.saveCart(cart);
  let button=getSingleButton(id);
  button.disabled = false;
  button.innerHTML = "ADD TO CART"
}

function getSingleButton(id){
return buttonsDOM.find(button => button.dataset.id === id);


} */
//function end


//shopping cart
//select items
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-icon");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");

const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".grid-product");
const numOfitems = document.querySelector(".cart-number");

//cart


// local Storage
//adding items to local storge
//not working
class Storage {

  static saveProducts(items) {
    localStorage.setItem("items", JSON.stringify(items));
  }
  static getProducts(id) {
    let products = JSON.parse(localStorage.getItem("items"));
    return products.find(product => product.id == id)
  }
  static saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  static getCart() {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  }
}


document.addEventListener("DOMContentLoaded", () => {
  localStorage.setItem("items", JSON.stringify(items));
  Storage.saveProducts(items);

})

/*VIDEO PLAY/MUTE */

const video = document.querySelector(".video-container-about");
const pauseBtn = document.querySelector(".pause");
const unmuteBtn = document.querySelector(".unmute");
const videoMuted = true;

pauseBtn.addEventListener("click", function() {
  if (!video.paused) {
    video.pause()
    pauseBtn.textContent = "play";
  } else {
    video.play();
    setDefault();
  }
})

unmuteBtn.addEventListener("click", function() {
  if (video.muted) {
    video.muted = false;
    unmuteBtn.textContent = "mute";
  } else {
    video.muted = true;
    unmuteBtn.textContent === "unmute";
    setDefaultMute();
  }

});

function setDefault() {
  if (pauseBtn.textContent === "play") {
    pauseBtn.textContent = "pause";
  }
}

function setDefaultMute() {
  if (unmuteBtn.textContent === "mute") {
    unmuteBtn.textContent = "unmute";
  }
}

//GSAP!!!!//////////

//reveal text on scroll
gsap.registerPlugin(ScrollTrigger);



gsap.from(".word", {
  scrollTrigger: {

    trigger: ".quote",
    toggleActions:"play reverse resume complete",
          start:"center center",
 
    scrub: 2,
    pin: ".quote-container",
    pinSpacing: true,
    opacity: 1,


  },
  x:-400,

  duration: 8,
  stagger:.2,
  opacity: .1,
  ease: "sine"
});


