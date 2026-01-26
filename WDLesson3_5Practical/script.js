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
      let l= parseFloat(document.getElementById("len").value);
      let w=parseFloat(document.getElementById("wid").value);
      let op=document.getElementById("output");
      op.innerHTML="Perimeter of rectangle is : " + P;

}


/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea(){
      let r=parseFloat(document.getElementById("rad").value);
      let op=document.getElementById("output");
      let C=2*pi*r;
      op.innerHTML="Circumference of circle is : "+ C;
}

function cirPerimeter(){


}

/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){
      

}

function triPerimeter(){





}
      