//Data Source: https://data.cityofnewyork.us/City-Government/Open-Parking-and-Camera-Violations/nc67-uf89

let data, info, output, result; // global variables

async function init(){  
  let link = "data.js"; //let link = "https://data.cityofnewyork.us/resource/nc67-uf89.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();

  output = get("output");
  //result = get("result");
  let build = "";
  let ct = 0;

  //Challenge 2: Test the function card() developed in Challenge 1 by displaying only the first violation to the webpage.
  //let fristTicket=data[0];
  //build+=card(fristTicket);

  //Challenge 3: Display all the violations to the web page using the function card().
    for(let i = 0; i < data.length; i++){
    let Ticket = data[i];
    build += card(Ticket); // calls the "card" function to build each card
    ct++;
  }

 
  //result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;  
}

// Challenge 4: Create a function to filter the information and display only the cards that satisfy specfic condition(s).
  for(let i = 0; i < data.length; i+=1){
    let Ticket = data[i];
    if(Ticket.issue_datee ==issue_date || Ticket.violation== violation){
      build += card(complaint); // calls the "card" function to build each card
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;  
