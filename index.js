var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName;
  var itemPrice
  price = Math.floor(Math.random() * 100 + 1);
  item = {};
  cart = [];
  item[itemName] = value;
  item[itemPrice]= price;
  cart.push(item);
  return `${item.key} has been added to your cart`
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
