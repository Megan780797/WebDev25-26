let data, info;

async function init(){   
  let link = "311.json"; //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    build += `<div class="fitted card">
                 <h3>${complaint.complaint_type}</h3>
                 <hr>
                 <p>${complaint.borough}</p>
                 <p>${complaint.incident_zip}</p>
                 <p>${complaint.descriptor}</p>
                 <hr>
                 <p>${complaint.created_date}</p>
                 <hr>
                 <p>${complaint.agency}</p>
              </div>`    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.borough == borough){
      build += `<div class="fitted card">
                    <h3>${complaint.complaint_type}</h3>
                    <hr>
                    <p>${complaint.borough}</p>
                    <p>${complaint.incident_zip}</p>
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

// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.

function filterByzip(){
   for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.zip == zip){
      build += `<div class=" card">
                  <h3>${complaint.complaint_type}</h3>
                  <hr>
                  <p>${complaint.zip}</p>
                  <p>${complaint.zip}</p>
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

// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type. 
function filterByComplaintType(){
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