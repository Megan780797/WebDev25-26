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
function Area(){
  let length =parseFloat(document.getElementById("length").value);
   let width=parseFloat(document.getElementById("length").value);
  let output=document.getElementById("output")
  let message=""


if( rectangle >= 0 ) {
  message="Inappropriate measurement"
} else{
  message="Display the Area"
}
output.innerHTML= `Area is ${length * width} ${message}`;
}

/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet(){

}