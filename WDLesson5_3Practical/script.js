/* Challenge: Complete the Compound Interest Calculator
        1) Retrieve and store all the information in appropriate values. 
           Note: Typically user enter rates as percentages.  Divide the value retrieved by 100.
                 Remember principals and rates have decimals.
        2) Create a build variable to start the table
        3) Establish the for loop to iterate over the number of months in the investment
        4) Calculate the balance using compound interest for each year. Hint: Loop variable
        5) Build each row for the balance after each year
           Note: When interpolating the balance, use a.toFixed(2) to adjust the amounts to two decimal places.  
        6) After the for loop complete building the table and display it
*/

function balance(){
        let output= document.getElementById("output");
        let p=parseFloat(document.getElementById("p").value);
        let r= parseFloat(document.getElementById("r").value);
        let n=parseInt(document.getElementById("n").value);
        let time=parseInt(document.getElementById("t").value);
        let bulid="<table><tr><th>Year</th><th>Balance</th></tr>"
        for(let i=1; i<=10; i+=1){
                let a=1000*(1+0.05)**i;
                bulid+=`<tr><td>${i}</td><td>${a.toFixed(2)}</td></tr>`;
        }
        bulid+=`</table>`;
        output.innerHTML=bulid;
}


/* Challenge Bonus: Allow the user to enter n.  This will require you to modify,
        1) Retrieve the value of n from the user.
        2) Modify the formula to incorporate the value of n
        3) Adjust the heading reflect the compound length.  Below are some typical lengths
              a. n = 1 then the interest is compounded yearly
              b. n = 12 then the interest is compounded monthly
              c. n = 3 then the interest is compounded quarterly
              d. n = 2 then the interest is compounded bi-yearly
*/  
        