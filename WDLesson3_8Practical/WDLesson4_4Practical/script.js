/* Challenge 2: Complete the function generateProblem by ,
       1) Create a variable for the <span> with id of problem
       2) Generate two random numbers between 0 and 20
       3) Store the correct answer in the variable correct.  This will be used in checkProblem( )
       4) Using string interpolation, display an addition problem like "2 + 2 =" except using the random numbers generated. 
*/

let correct;
function generateProblem(){
    let problem = document.getElementById("problem");
    let num1 = Math.floor(Math.random() * 21+0);
    let num2 = Math.floor(Math.random() * 21 +0);
    correct = num1 + num2;
    problem.innerHTML = `${num1} + ${num2} = `;
}

/* Challenge 3: Complete the function checkResposne by ,
       1) Create a variable for the users response
       2) Create a variable for the <div> with id of output
       3) Create a variable msg for the output
       4) Using an if / else statement check to see if the user response is correct. 
           a) if the reponse is correct, set msg to "Correct!" along with the correct image
           b) otherwise set msg to "Incorrect. The answer is " followed by the correct answer.  Also include incorrect image
       4) Display msg in the output
*/
function checkResposne(){
    let user=parseInt(document.getElementById("response").value);
    let op=document.getElememtById("output");
    let filename="";
    let msg="";
    if(user==correct){
        filename="correct.webp";
        msg=`Correct! <br><img src="${filename}">`;
    }else{
        filename="incorrect.webp";
        msg=`Incorrect. The correct answer is ${correct}. <br><img src="${filename}">`;
    }
    op.innerHTML=msg;
    }




}


