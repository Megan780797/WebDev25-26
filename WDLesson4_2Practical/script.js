// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element
  
  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/

/* Challenge 2:  Create the function for Challenge 1 scenario */
function area(){
  let length = document.getElementById("length").value;
  let width = document.getElementById("width").value;
  let result = document.getElementById("result");
  if (l <= 0 || w <= 0) {
    result.innerHTML = "Inappropriate measurement";
  } else {
    result.innerHTML = "Area: " + (length * width);
  }
}

/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet(){
  let a=document.getElementById("animal").value;
  let e=document.getElementById("emotion").value;
  let output=document.getElementById("output");
  if (a=="dog" && e=="happy"){
    output.innerHTML=`<img src="dog_happy.png">`;
  } else if (a=="dog" && e=="sad"){
    output.innerHTML=`<img src="dog_sad.png">`;
  } else if (a=="cat" && e=="happy"){
    output.innerHTML=`<img src="cat_happy.png">`;
  } else if (a=="cat" && e=="sad"){
    output.innerHTML=`<img src="cat_sad.png">`;
  }
}