const cartItems = [];
let isTotalHidden = true;
 
const burgers = [
   {
    name: "Burger Dreams",
    price: 9.20
  },

  {
    name: "Burger Waldo",
    price: 10.00
  },

   {
    name: "Burger Cali",
    price: 8.00
  },

  {
    name: "Burger Bacon Buddy",
    price: 9.99
  },

  {
    name: "Burger Spicy",
    price: 9.20
  },

  {
    name: "Burger Classic",
    price: 8.00
  }

];

function addToCart(item) {
  cartItems.push(item);
  document.getElementById("itemCounter").innerHTML = cartItems.length;
  showTotal();
}

function clickCart() {
  isTotalHidden = !isTotalHidden;
  showTotal();
}

function showTotal() {
  const orderTotal = document.getElementById("orderTotal");
  orderTotal.innerHTML = "";
  if (isTotalHidden == false) {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++){
      total += cartItems[i].price;
    }
    orderTotal.innerHTML += "Total: $" + total;
  }
}

