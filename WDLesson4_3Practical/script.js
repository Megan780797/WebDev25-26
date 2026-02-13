/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
       function BMI(){
              let w = ParseFloat(document.getElementById("W").value);
              let h = ParseFloat(document.getElementById("H").value);
              let bmi= 703(w/h**2)
              if(bmi < 18.5){
                     msg="Underweight";
              } else if (bmi >= 18.5 && bmi < 24.9){
                     msg="Healthy Weight";
              } else if (bmi >= 25 && bmi < 29.9){
                     msg="Overweight";
              } else {
                     msg="Obesity";
              }
              document.getElementById("output").innerHTML = "Your BMI is " + bmi.toFixed(2) + " and your status is " + msg;
       }
/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/
