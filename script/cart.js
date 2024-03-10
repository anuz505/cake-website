export const cart = [];

// Function to update cart quantity in the UI
export function updateCartQuantity() {
    const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.js-cart-quantity').innerHTML = `<div>Cart: </div>  ${cartQuantity}`;
}
