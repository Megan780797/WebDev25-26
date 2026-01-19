/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/

function recArea(){
      let len=parseFloat(document.getElementById("l").value);
      let wid=parseFloat(document.getElementById("w").value);
      let op=document.getElementById("output");
      let a=len *wid;   
      op.innerHTML="AREA = "+a;
}

function recPerimeter(){
      let 

}


/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea(){
      const radius = parseFloat(document.getElementById('radius').value);
      const area = pi * radius * radius;
      document.getElementById("output2").innerHTML = "AREA = " + area;
}

function cirPerimeter(){
      const radius = parseFloat(document.getElementById('radius').value);
      const perimeter = 2 * pi * radius;
      document.getElementById("output3").innerHTML = "PERIMETER = " + perimeter;
}

/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){
      const base = parseFloat(document.getElementById('base').value);
      const height = parseFloat(document.getElementById('height').value);
      const area = 0.5 * base * height;
      document.getElementById("output4").innerHTML = "AREA = " + area;
}

function triPerimeter(){
      const side1 = parseFloat(document.getElementById('side1').value);
      const side2 = parseFloat(document.getElementById('side2').value);
      const side3 = parseFloat(document.getElementById('side3').value);
      const perimeter = side1 + side2 + side3;
      document.getElementById("output5").innerHTML = "PERIMETER = " + perimeter;
}