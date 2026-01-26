// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function Average () {
    let g1=parseFloat(document.getElementById("grade1").value);
    let g2=parseFloat(document.getElementById("grade2").value);
    let g3=parseFloat(document.getElementById("grade3").value);
    let avg=(g1+g2+g3)/3;
    alert("The average is "+avg);
}

// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function Slope () {
    let x1=parseFloat(document.getElementById("x1").value);
    let y1=parseFloat(document.getElementById("y1").value);
    let x2=parseFloat(document.getElementById("x2").value);
    let y2=parseFloat(document.getElementById("y2").value);
    let slope=(y2-y1)/(x2-x1);
    alert("The slope is "+slope);
}

// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.
function BMI () {
    let height=parseFloat(document.getElementById("height").value);
    let weight=parseFloat(document.getElementById("weight").value);
    let bmi=(weight/(height*height))*703;
    alert("The BMI is "+bmi);
}