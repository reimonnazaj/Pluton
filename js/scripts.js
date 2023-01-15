/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
const cart = {
  s22: 0,
  iphone: 0,
  huawei: 0,
  ipad: 0,
  nokia: 0,
  zflip: 0,
  xiaomi: 0,
  oneplus: 0
}


function increaseCartItemQuantity(id) {
  const quantityElement = document.getElementById("cartElement");
  const quantity = parseInt(quantityElement.innerHTML) || 0;
  cart[id] += 1;
  quantityElement.innerHTML = quantity + 1;
}

function emptyCart(){
  const quantityElement = document.getElementById("cartElement");
  quantityElement.innerHTML = 0;
  Object.keys(cart).forEach(function(key){ cart[key] = 0 });

}


function customConfirm() {
  alertify.confirm("Are you sure you want to delete this file?",
    function(){
   alert(`You have selected: \n S22 Ultra: ${cart['s22']} \n Iphone 14: ${cart['iphone']} \n Huawei P40: ${cart['huawei']} \n Ipad Pro: ${cart['ipad']} \n Nokia 3310: ${cart['nokia']} \n Samsung Z Flip: ${cart['zflip']} \n Xiaomi Mi 11: ${cart['xiaomi']} \n Oneplus 9 Pro: ${cart['oneplus']}`);
   window.location.href = "../checkout.html";
    },
    function(){
      emptyCart()
    }).set('labels', {ok:'Checkout', cancel:'Empty Cart'});
}