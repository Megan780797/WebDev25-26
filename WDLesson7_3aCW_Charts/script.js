//global variables
let data;

// Arrays of information
let math = ["Math",79.0,80.0,79.9,78.8,73.4,77.2,74.5,78.7,76.8 ];
let english = ["English",79.7,78.8,81.6,80.6,82.3,77.4,79.5,78.6,77.9];
let science = ["Science",78.0,81.5,81.6,81.6,82.2,82.4,81.3,80.1,78.2];
let social = ["Social Studies",95.0,80.6,80.8,81.5,81.8,80.6,81.1,80.9,80.6];


function chart(type){
  //Task 3: Combine the math, english, science and social data into one array and store in a variable 'data'
  data = [   math, english, science , social   ];
  
  //Task 4: Using the "type" of chart passed, call the function below to create an appropriate chart of that type in the "chart" container using the data from Task 3
  displayChart(  data,"chart",type);   
}

//Task 5: Create a array "budget" with at least 6 items. Recall that budget must be structured as an array of arrays.
let budget =[
  ["Rent",1500],
  ["Food",600],
  ["Car",500],
  ["Entertainment",600],
  ["Gas",200],
  ["Cell",100]
];

function budgetChart(){
  //Task 6: Display the budget as a pie chart
  displayChart(  budget,"chart","pie");  
}


//Function that accepts the data, an id to the div to display the chart, and the type of chart
function displayChart( data, chart_id, chart_type ){
  c3.generate({
    bindto: `#${chart_id}`, // id of the div to display chart
    data: {
      columns: data, // data must be an array of arrays
      type: chart_type // type of chart (pie/line/bar)
    }
  });
}