/*
Challenge 1: Add the appropriate images to each array below from the list of images provided.
 "beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg", "clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg","tuna.jpg", "flan.jpg", "passionberry.jpeg", "oreocup.jpg"
*/ 

//Challenge 2: Add appropriate prices for each food in their corresponding array. (Any reasonable price works) 
//Challenge 3: Add appropriate titles for each food in their corresponding array. Use the image names as a hint for the food title.

let meat_images = ["beeftips.jpg","brisket.jpg","ribeye.jpg", "steak.jpg"];
let meat_prices = [10.99,15.45,23.45,29.67];
let meat_titles = [ Beeftips,Brisket,Ribeye,Steak];

let seafood_images = ["clams.jpg","crabs.jpg","lobster.png","scallops.jpg","shrimp.jpg","tuna.jpg",];
let seafood_prices = [5.55,10.00,45.00,34.56,23.00,10.00];
let seafood_titles = [Clams,Crabs,Lobster,Scallops,Shrimp,Tuna];

let dessert_images = ["flan.jpg","passionberry.jpeg","oreocup.jpg"];
let dessert_prices = [15.00,27.00,56.00];
let dessert_titles = [Flan,Passionberry,Oreocup];

function init(){
  //Each food has its own output container
  let m = document.getElementById("meats");
  let s = document.getElementById("seafoods");
  let d = document.getElementById("desserts");
  let build = ``;

  /* Notes for Challenges 4 through 6 below:
      1) Each challenge requires its own for loop to build the output.
      2) You can reuse the build variable as long as you set it back to `` before each loop.
      3) Create a basic card with a title, image and price.
  */

  //Challenge 4:  Build cards for the meats. Place the build in the meat container. 
    for(let index=0; meat_images.length; i++){
      bulid+=`<div class="card">
      <h3>${meat_titles[index]}</h3>
      <img class="food" src="images/${meat_images[index]}">
      <h4>${meat_prices[index]}</h4>
      </div> 
    }
      
    output.innerHTML=bulid;
  //Challenge 5:  Build cards for the seafoods. Place the build in the seafood container.

  //Challenge 6:  Build cards for the desserts. Place the build in the dessert container.
}
