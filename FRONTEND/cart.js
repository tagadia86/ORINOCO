
let mainBlock = document.getElementById("main_block");
let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
let totalPrice = 0;

const get = (url)=> {
  return new Promise((resolve,reject)=>{
    const request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) 
      {
        resolve(JSON.parse(this.responseText));
      }
    }
    request.open("GET",url);
    request.send();
  });
};

get("http://localhost:3000/api/furniture").then((response)=>
{
  console.log(response);
  displayShoppingcart(response,shoppingCart);
})

const displayShoppingcart = (furnitures,shoppingCart)=>
{
  shoppingCart.forEach(element => 
  {
    furnitures.forEach(furniture => 
      {
        if (element.id == furniture._id) 
        {
          // card main div for each item
          let card_wrapper = document.createElement("div");
          //card_wrapper.classList.add("card card_img_size");
          card_wrapper.classList.add("card_img_size","mb-3","card");
          main_block.appendChild(card_wrapper); 
          // card second div for each item
          let card_wrapper_child = document.createElement("div");
          card_wrapper_child.classList.add("row","g-0");
          card_wrapper.appendChild(card_wrapper_child);
          // creating image wrapper
          let image_wrapper = document.createElement("div"); 
          image_wrapper.classList.add("col-md-6");
          card_wrapper_child.appendChild(image_wrapper);
          //image_wrapper.innerHTML += furniture.name + "<br>";
          // creating description wrapper
          let description_wrapper = document.createElement("div"); 
          description_wrapper.classList.add("col-6");
          card_wrapper_child.appendChild(description_wrapper);
          //image_wrapper.innerHTML += furniture.name + "<br>";
          //appending the card image
          let imageCamera = document.createElement("img");
          imageCamera.classList.add("img_size");
          image_wrapper.appendChild(imageCamera);
          imageCamera.src = furniture.imageUrl; 
          //appending the card image
          let cardBody = document.createElement("div");
          cardBody.classList.add("card-body");
          description_wrapper.appendChild(cardBody);
      
          let itemName = document.createElement("p");
          cardBody.appendChild(itemName);
          itemName.innerHTML += furniture.name;
      
          let itemPrice = document.createElement("p");
          cardBody.appendChild(itemPrice);
          itemPrice.innerHTML += furniture.price;
      
          let itemID = document.createElement("p");
          cardBody.appendChild(itemID);
          itemID.innerHTML += furniture._id;
      
          let itemDescription = document.createElement("p");
          cardBody.appendChild(itemDescription);
          itemDescription.innerHTML += furniture.description + "<br>";
          //appending the remove button
          let removeButton = document.createElement("a");
          removeButton.classList.add("btn","btn-primary");
          cardBody.appendChild(removeButton);
          removeButton.innerHTML += "supprimer cet article";
          removeButton.role = "button";
          //calling the function to remove an item on click
          removeButton.addEventListener('click', function() {   
          removeChoosen (shoppingCart,furniture._id);
          localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
          location.reload();
          });
          /*END: remove button section */



          //item quantity
          let itemQuantity = document.createElement("p");
          cardBody.appendChild(itemQuantity);
          itemQuantity.classList.add("quantity");
          itemQuantity.innerHTML += "quantité = " + element.quantity + "<br>";
          //appending the price
          let displayPrice = document.createElement("p");
          cardBody.appendChild(displayPrice);
          displayPrice.classList.add("price");
          displayPrice.innerHTML += "prix = " + (element.quantity *element.price ) + "<br>";


          //appending the minus button
          let minusButton = document.createElement("a");
          minusButton.classList.add("btn","btn-primary");
          cardBody.appendChild(minusButton);
          minusButton.innerHTML += "diminuer";
          minusButton.role = "button";
          minusButton.addEventListener('click', function() {   
            element.quantity -=1;
            if (element.quantity == 0){
              removeChoosen (shoppingCart,furniture._id);
            }
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
            location.reload();
          });  
        }
      });
  });


}

//function to build the array to stock all prices
const stockPrice = (shoppingArray)=>
{
  let total = 0;
  shoppingArray.forEach(element => 
  {
    total+= element.price * element.quantity;
    
  });
  return total;
}
/*end of the function to remove item on click*/

//calculate the price
totalPrice = stockPrice(shoppingCart);
console.log(totalPrice);


  //card main div for each item
  let price_wrapper = document.createElement("div");
  //card_wrapper.classList.add("card card_img_size");
  price_wrapper.classList.add("mb-12","card");
  main_block.appendChild(price_wrapper); 
  
  //appending the price button
  let totalPriceButton = document.createElement("a");
  totalPriceButton.classList.add("btn","btn-primary");
  price_wrapper.appendChild(totalPriceButton);
  totalPriceButton.innerHTML += "TOTAL = " + (totalPrice ) + "<br>";
  totalPriceButton.role = "button";


//function to remove item on click
const removeChoosen = (removingArray,itemToRemove)=>{
  let cptRemove = 0;
  removingArray.forEach(index => {
    if (index.id == itemToRemove ){
      console.log(index._id);
      if (removingArray === null) {
          removingArray = [];
      }
      removingArray.splice(cptRemove, 1); 
    }
    cptRemove++;
  });
}
/*end of the function to remove item on click*/

//appending the clear button
let clearButton = document.createElement("a");
clearButton.classList.add("btn","btn-primary");
main_block.appendChild(clearButton);
clearButton.innerHTML = "vider le panier";
clearButton.role = "button";

//calling the function to clear the cart on click
clearButton.addEventListener('click', function() {   
  clearCart (shoppingCart);
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  location.reload();
});
/*END: clear button section */

//function to clear the cart
const clearCart = (cartToClear)=>{
  while (cartToClear.length > 0){
    if (cartToClear === null) {
        cartToClear = [];
    }
    cartToClear.pop();
    location.reload();
  }
}

/*END: function to clear the cart */


