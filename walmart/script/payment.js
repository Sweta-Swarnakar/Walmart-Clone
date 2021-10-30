// Get the modal
var modal = document.getElementById("myModal");
	
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function success(){
  alert("Congratulations, Your Order is Placed Thank You !")
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
cost.textContent = "$" + amount



function   seeprod(){
parent.innerHTML = null;
cart.forEach(product =>{
let div = document.createElement("div");

let img = document.createElement("img");

img.src = product.img;
let prod_price = document.createElement("p");
prod_price.textContent = product.price;

let prod_name = document.createElement("p");
prod_name.textContent = product.name;

 let add = document.createElement("button")
 add.innerText = "Add to Cart";
 div.append(img)
 add.onclick = function(){
     addtocart(product)
 }



parent.append(div)
});
}



seeprod()

let pro = document.getElementById("products")
let aw = pro.getElementsByTagName("p")
var totalcart = Number(aw[1].textContent)
var dic = 30
function discount(totalcart,dic){
var dic = totalcart * dic/100
var total = totalcart - dic
return total
}
