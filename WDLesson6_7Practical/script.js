let data, info;

async function init(){   
  let link = "mvc.json"; //let link = "https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95/about_data";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
      build+=`<div class="card">
        <h3> The collision id-${crash.collision_id}</h3>
        <hr>
        <p> The crash time-${crash.crash_time}</p>
        <p> The number of pepole injured-${crash.number_of_persons_injured}</h2>
        <p>  The street name${crash.on_street_name}</p>
        <p>${crash.contributing_factor_vehicle_1}</p>
        <p> The street name-${crash.on_street_name}</p>
        </div>`   
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterByStreetName(){
  let output = document.getElementById("output");
  let street  = document.getElementById("street").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
       build+=`<div class="card">
        <h3> The collision id-${crash.collision_id}</h3>
        <hr>
        <p> The crash time-${crash.crash_time}</p>
        <p> The number of pepole injured-${crash.number_of_persons_injured}</h2>
        <p>  The street name${crash.on_street_name}</p>
        <p>${crash.contributing_factor_vehicle_1}</p>
        <p> The street name-${crash.on_street_name}</p>
        </div>`
    
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;



// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type. 
function filterByPepopleInjured(){
   let output = document.getElementById("output");
  let injured  = document.getElementById("injured").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

   for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
     build+=`<div class="card">
        <h3> The collision id-${crash.collision_id}</h3>
        <hr>
        <p> The crash time-${crash.crash_time}</p>
        <p> The number of pepole injured-${crash.number_of_persons_injured}</h2>
        <p>  The street name${crash.on_street_name}</p>
        <p>${crash.contributing_factor_vehicle_1}</p>
        <p> The street name-${crash.on_street_name}</p>
        </div>`
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
