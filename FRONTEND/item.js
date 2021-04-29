
  let urlSearch = new URLSearchParams(window.location.search);
  //console.log(urlSearch);
  let selectedCam = urlSearch.get('id');
  //console.log(selectedCam);

  
let mainBlock = document.getElementById("main_block");

const get = (url)=> 
{
  return new Promise((resolve,reject)=>
  {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function(){
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) 
      {
        resolve(JSON.parse(this.responseText));
      }
    }
    request.open("GET",url);
    request.send();
  });
};

get("http://localhost:3000/api/furniture").then((response)=>{
  //console.log(response);
  displayChoosen(response);
})

const displayChoosen = (furnitures)=>
{
  furnitures.forEach(furniture => 
  {
    if (furniture._id == selectedCam )
    {
      // card main div for each item
      let card_wrapper = document.createElement("div");
      card_wrapper.classList.add("container","col-4");
      main_block.appendChild(card_wrapper);

      // card second div for each item
      let card_wrapper_child = document.createElement("div");
      card_wrapper_child.classList.add("card", "mb-4", "mb-lg-0", "border-light", "shadow-sm");
      card_wrapper.appendChild(card_wrapper_child);

      //appending the card image
      let imageCamera = document.createElement("img");
      imageCamera.classList.add("card-img-top");
      card_wrapper_child.appendChild(imageCamera);
      imageCamera.src = furniture.imageUrl;
      
      // creating description wrapper
      let description_wrapper = document.createElement("div"); 
      description_wrapper.classList.add("card-body");
      card_wrapper_child.appendChild(description_wrapper);

      //appending the card title
      let itemName = document.createElement("h5");
      itemName.classList.add("card-title");
      card_wrapper_child.appendChild(itemName);
      itemName.innerHTML += furniture.name;

      //appending the card title
      let itemPrice = document.createElement("p");
      itemPrice.classList.add("card-text");
      card_wrapper_child.appendChild(itemPrice);
      itemPrice.innerHTML += furniture.price;

      //appending the card id
      let itemId = document.createElement("p");
      itemId.classList.add("card-text");
      card_wrapper_child.appendChild(itemId);
      itemId.innerHTML += furniture._id;

      //appending the card title
      let itemDescription = document.createElement("p");
      itemDescription.classList.add("card-text");
      card_wrapper_child.appendChild(itemDescription);
      itemDescription.innerHTML += furniture.description;

      //choosing one option
      let formContainer = document.createElement("div");
      card_wrapper_child.appendChild(formContainer);
      let formulaire = document.createElement("form");
      formContainer.appendChild(formulaire);
      formulaire.innerHTML = "choisissez votre vernis";
      let selectElement = document.createElement("select");
      selectElement.id = "mySelect";
      formulaire.appendChild(selectElement);
      furniture.varnish.forEach(eachVarnish => {
          console.log(eachVarnish);
          let optionElement = document.createElement("option")
          selectElement.appendChild(optionElement);
          optionElement.value += eachVarnish;
          optionElement.innerHTML += eachVarnish;
        });

      //creating the button
      let itemButton = document.createElement("a");
      itemButton.classList.add("btn","btn-primary");
      card_wrapper_child.appendChild(itemButton);
      itemButton.innerHTML += "Ajouter au panier";
      itemButton.href = "item.html?id="+furniture._id;
      itemButton.role = "button";
    }
  });

}




  