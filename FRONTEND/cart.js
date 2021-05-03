
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
    //removeButton.href = "item.html?id="+furniture._id;
    removeButton.role = "button";

    //calling the function to remove an item on click
    removeButton.addEventListener('click', function() 
    {   
      removeChoosen (shoppingCart,furniture._id);
    });
  });

}
//calling the function to display items in the cart
displayItem(shoppingCart);

//function to remove item on click
const removeChoosen = (shoppingCart,itemToRemove)=>
{
 console.log("removed function called");
  let cptRemove = 0;
  shoppingCart.forEach(index => 
  {
    console.log("I'm in the loop to find the item to remove");
    if (index._id == itemToRemove )
    {
      console.log("ID de l'index");
      console.log(index._id);
      let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
      if (shoppingCart === null) 
      {
          shoppingCart = [];
      }
      shoppingCart.splice(cptRemove, 1); 
      localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
      location.reload();
    }
    cptRemove++;
  });
}
/*end of the function to remove item on click*/



