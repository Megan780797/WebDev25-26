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
        <h1>${crash.collision_id}</h1>
        <hr>
        <p>${crash.crash_time}</p>
        <p>${crash.number_of_persons_injured}</h2>
        <p>${crash.on_street_name}</p>
        <p>${crash.contributing_factor_vehicle_1}</p>
        <p>${crash.on_street_name}</p>
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
    if(  crash == crash){
      build+=`<div class="card">
        <h4>${crash.crash_date}</h4>
        <hr>
        <p>${crash.crash_time}</p>
        <h2>${crash.number_of_persons_injured}</h2>
        <p>${crash.on_street_name}</p>
        <p>${crash.contributing_factor_vehicle_1}</p>
        <h3>${crash.collision_id}</h3>
        </div>`
    
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}


// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type. 
function filterByPepopleInjured(){
   let output = document.getElementById("output");
  let injured  = document.getElementById("injured").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

   for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.zip == zip){
      build += `<div class=" card">
                  <h3>${complaint.complaint_type}</h3>
                  <hr>
                  <p>${complaint.zip}</p>
                  <p>${complaint.incident_ComplaintType}</p>
                  <p>${complaint.descriptor}</p>
                  <hr>
                  <p>${complaint.created_date}</p>
                  <hr>
                  <p>${complaint.agency}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}