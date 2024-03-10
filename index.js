import { cart, updateCartQuantity } from "./script/cart.js";
import { products } from "./script/products.js";

// Function to generate HTML for product items
function generateProductHTML(product) {
    return `
        <div class="swiper-slide box">
            <div class="img">
                <img src="${product.image}" alt="">
            </div>
            <div class="product-content">
                <h3>${product.name}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci reiciendis assumenda.</p>
                <div class="orderNow">
                    <button class="js-add-to-cart" data-productid="${product.id}" data-productname="${product.name}">
                        Order Now
                    </button>
                </div>
            </div>
        </div>`;
}

// Display products in the product section
const productGrid = document.querySelector('.js-product-grid');
products.forEach((product) => {
    productGrid.innerHTML += generateProductHTML(product);
});

// Add event listeners for "Order Now" buttons
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      
        const productId = button.dataset.productid;
        const productName = button.dataset.productname;
        let matchingItem = cart.find((cartItem) => cartItem.id === productId);

        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            cart.push({
                id: productId,
                name: productName,
                quantity: 1
            });
        }

        updateCartQuantity();
    });
});
function openCheckout() {
  // You can use window.location.href to navigate to the checkout.html page
  window.location.href = "checkout.html";
}

// Add event listener for "Cart" icon or quantity display
document.querySelector('.js-cart-quantity').addEventListener('click', openCheckout);



 //the frontend part 
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}



let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}


var swiper = new Swiper(".product-row", {
  spaceBetween: 10,
  loop:true,
  centeredSlides:true,
  autoplay:{
      delay:9500,
      disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextE1 :".swiper-button-next",
        prevE1 :".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });

  var swiper = new Swiper(".review-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });