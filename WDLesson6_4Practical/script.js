let data, info; //global variables

async function init(){
  // Challenge 1: Retrieve the FBI data from https://raw.githubusercontent.com/rcastro2/WebDevelopment/refs/heads/main/data/fbi.json
  let link = "https://raw.githubusercontent.com/rcastro2/WebDevelopment/refs/heads/main/data/fbi.json";
  info = await fetch(link);
  data = await info.json();
  let output = document.getElementById("output");
  let build = "";
  for(let i=0; i<data.length; i++){
    let criminal= data[i];
    build+=`<div class="card">
      <h3>${criminal.title}</h3>
      <img src="${criminal.image}">
      <h4>${criminal.sex}</h4>
     <h5>${criminal.details}</h5>
      <a href= "${criminal.pdf}" target="_blank">Info</a> 
   </div>`;
}

  /* Challenge 2: 
          1) Traverse the data using a 'for' loop.  
          2) Create a variable to extract each criminal's information from the dataset.
          3) Using the variable created, generate HTML to display the information for each criminal.

     Note: To view the PDF of the criminal poster include the following code before the string interpolated url
     into a hyperlink in order to actually display the PDF in a new tab.
     https://mozilla.github.io/pdf.js/web/viewer.html?file=${...}
  */


  
  output.innerHTML = build;
}

