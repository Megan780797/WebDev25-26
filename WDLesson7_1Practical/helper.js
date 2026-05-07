// Review the 4 example functions below:

// The randint( ) function accepts the lower and upper bounds for a random number, and then returns a random number between the lower and upper bounds provided as arguments.
function randint(lower, upper){
  let range = upper - lower + 1;
  return Math.floor(Math.random()*range + lower);
}

// The display() function accepts information and displays it to the console and the output container.
function display(info){
  document.getElementById("output").innerHTML += `<div class="card">${info}</div>`;
  console.log(info);
}

// The area( ) function accepts the length and width of a rectangle and returns the area of that rectangle.
function area( length, width){
  return length * width;
}

// The celsius( ) function accepts a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
function celsius( temp ){
  return (temp - 32) * 5 / 9;
}

/* ==========================================================*/

//Challenge 3: Create a function bmi() that accepts a person's height (in inches) and weight (in pounds) and then returns the person's BMI. 
// (Hint: Look up the formula. You have done this in past activities).
  function BMI(height,weight){
    let result = (weight / (height * height)) * 703;
     return result.toFixed(1);
  }

//Challenge 5: Create a function bmiCategory() that accepts a person's BMI and returns their category as either "underweight", "normal weight", "overweight" or "obese".
// (Hint: This requires decisions. See past activities).
function bmiCategory(bmi) {
  if (bmi < 18.5) {
    return "underweight";
  } else if (bmi < 25) {
    return "normal weight";
  } else if (bmi < 30) {
    return "overweight";
  } else {
    return "obese";
  }
}


//Challenge 7: Create a function lottery() that accepts how many random numbers to produce and returns a string of that many random numbers.
// Random numbers range from 1 to 48. (Hint: Solution requires a for loop and a build variable. Use randint( ) provided at the top to produce the random numbers.  
function lottery(count) {
  let result = "";
   for (let i = 0; i < count; i++) {
     let num = randint(1, 48);
     result += num + " ";
}
}

//Challenge 9: Create a function results() that accepts an array of "Y" or "N" responses and returns the number of "Y" responses.
function results(responses) {
  let countY = 0;
  for (let i = 0; i < responses.length; i++) {
    if (responses[i] === "Y") {
      countY++;
    }
  }
  return countY;
}
let surveyData = ["Y", "N", "Y", "Y", "N"];
display(results(surveyData));


