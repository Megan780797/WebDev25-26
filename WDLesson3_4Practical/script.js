function createStory(){
  //Following are variables for each of the <span>s that located throughout the story
  let boy1span1 = document.getElementById("boyspan1");
  let boy1span2 = document.getElementById("boyspan2");
  let boy1span3 = document.getElementById("boyspan3");
  let boy1span4 = document.getElementById("boyspan4");
  let veg1 = document.getElementById("veg1");
  let veg2 = document.getElementById("veg2");
  let girlspan = document.getElementById("girlspan");

  /* Task 3: Create variables and retrieve the information from the text inputs for the following, 
      1) A boy's name
      2) A vegetable
      3) A girl's name
      4) Another vegetable

    

  Choose your variable names wisely.  This is a lot of practice of creating variables and using document.getElementById(..)
  */
 let boy = document.getElementById("boy").value;
 let girl = document.getElementById("girl").value;
  let vegetable1 = document.getElementById("vegetable1").value;
  let vegetable2 = document.getElementById("vegetable2").value;
 

  /* Task 4: Set the innerHTML for each of the spans on lines 3 to 9 with the appropriate values from the variables you create in Task 3. */
boy1span1.innerHTML = boy;
boy1span2.innerHTML = boy;
boy1span3.innerHTML =boy;
boy1span4.innerHTML = boy;
veg1.innerHTML = vegetable1;
veg2.innerHTML = vegetable2;
girlspan.innerHTML = girl;
  /* Task 5: Set the display property of the element with an id of "story" to 'block' */


}