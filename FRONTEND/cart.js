
//loading the cart from local storage
let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
console.log(shoppingCart);

//Loop to display items from the cart
const displayItem = (furnitures)=>
{
  furnitures.forEach(furniture => 
  {
    // card main div for each item
    let card_wrapper = document.createElement("div");
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
    removeButton.addEventListener('click', function() 
    {   
      let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
      removeChoosen (shoppingCart,furniture._id);
      localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
      location.reload();
    });
    /*END: remove button section */
  });
  /*END: loop to display items in the cart */
}

//calling the function to display items in the cart
displayItem(shoppingCart);


//appending the clear button
let clearButton = document.createElement("a");
clearButton.classList.add("btn","btn-primary");
main_block.appendChild(clearButton);
clearButton.innerHTML = "supprimer le panier";
clearButton.role = "button";
//calling the function to clear the cart on click
clearButton.addEventListener('click', function() 
{   
  let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
  clearCart (shoppingCart);
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  location.reload();
});
/*END: clear button section */


//function to remove item on click
const removeChoosen = (removingArray,itemToRemove)=>
{
 //console.log("removed function called");
  let cptRemove = 0;
  removingArray.forEach(index => 
  {
    //console.log("I'm in the loop to find the item to remove");
    if (index._id == itemToRemove )
    {
      //console.log("ID de l'index");
      console.log(index._id);
      //let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
      if (removingArray === null) 
      {
          removingArray = [];
      }
      removingArray.splice(cptRemove, 1); 
      //removingArray.pop(); 
      //localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
      //location.reload();
    }
    cptRemove++;
    console.log(cptRemove);
    setTimeout(() => {  console.log("PAUSE"); }, 200000);
  });
}
/*end of the function to remove item on click*/

//function to clear the cart
const clearCart = (cartToClear)=>{
  while (cartToClear.length > 0)
  {
    //let cartToClear = JSON.parse(localStorage.getItem("shoppingCart"));
    if (cartToClear === null) 
    {
        cartToClear = [];
    }
    cartToClear.pop();
    //localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    location.reload();
  }
}
/*END: function to clear the cart */



