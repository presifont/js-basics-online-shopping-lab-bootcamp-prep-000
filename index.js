var cart = [];

function getCart() { //fuctions retruns array items in cart
 return cart;
}

function setCart(c) { //function
  cart = c;
  return cart;
}

function addToCart(item) {
var price =  Math.floor(Math.random() * 100) + 1;
 var itemObject = {};
 itemObject[item] = price;
 cart.push(itemObject)
 console.log(item + " has been added to your cart.")
 return cart
}

function viewCart() {
 if(cart.length === 0) {
   console.log("Your shopping cart is empty.");
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
