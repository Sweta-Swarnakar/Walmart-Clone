function clickimg(smallImg){
    var fullImg = document.getElementById("image-box") ;  //change small image path to main image
    fullImg.src = smallImg.src
}






let parent = document.getElementById("products")


let cart = JSON.parse(localStorage.getItem("cart"));

let size = document.getElementById("cartSize");
size.textContent =cart.length;
let cost = document.getElementById("cartAmount");
let amount = 0;
for(let i = 0; i < cart.length; i++){
amount+=Number(cart[i].price);
}
cost.textContent =amount

