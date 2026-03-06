/* Challenge 2: Create the function that will calculate the balance in an account using compound 
interest after t number of years.

Notes:
1) Don't let the formula scare you.  Simply translate it into JS
2) Create a for loop where the loop variable is t and the condition ends at the number of years 
the user specifies in the text input.
3) Use a build variable to create an output that looks like this
Year 1: $xxxxxx
Year 2: $xxxxxx
Year 3: $xxxxxx
...
Year N: $xxxxxx
*/
function calculateCompoundInterest(){
    let p= parseFloat(document.getElementById("p").value);
    let r= parseFloat(document.getElementById("r").value);
    let n= parseInt(document.getElementById("n").value); 
    let yrs=parseInt(document.getElementById("t").value);
    let build="";
    for(let t=0; t<=yrs; t+=1){
        let a= p*(1+r/n)**(n*t);
        build += `Year ${t}: $${a.toFixed(2)}<br>`;
    }
    document.getElementById("output").innerHTML=build;
     
}