const addItemButtons = document.querySelectorAll('#container > .box > .add');
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
cartTotalPrice.dataset.count = 0;
function addItemToCart() {
    cartCount.innerText++;
    cartTotalPrice.innerText = parseInt(cartTotalPrice.dataset.count) + parseInt(this.dataset.price);
    cartTotalPrice.dataset.count = cartTotalPrice.innerText;
    cartTotalPrice.innerText = getPriceFormatted(cartTotalPrice.innerText);
}
for (let i of addItemButtons){
    i.addEventListener('click', addItemToCart);
}
