/* Challenge 2: Create a function to serve as the event handler for the distance UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function calcDist (){
      let x1= parseFloat(document.GetElementById("x1").value);
      let y1= parseFloat(document.GetElementById("y1").value);
      let x2= parseFloat(document.GetElementById("x2").value);
      let y2= parseFloat(document.GetElementById("x1").value);
      let d= Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
      let op= document.GetElementById("output")
      op.innerHTML= 'Dist.between (${x1},${y1}) and  ({x2},{y2}) is({d})';
}

/* Challenge 4: Create a function to serve as the event handler for the compound interest UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
      
function calcCompInt (){
      let p= parseFloat(document.GetElementById("p").value);
      let r= parseFloat(document.GetElementById("r").value)/100;
      let n= parseFloat(document.GetElementById("n").value);
      let t= parseFloat(document.GetElementById("t").value);
      let a= p*Math.pow((1+r/n),(n*t));
      let op2= document.GetElementById("output2")
      op2.innerHTML= 'The amount after (${t}) years is (${a.toFixed(2)})';
}


