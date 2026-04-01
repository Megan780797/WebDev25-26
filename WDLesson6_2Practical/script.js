function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361"
  };
  let output = document.getElementById("output");

  //Challenge 1: Create and display a card of the information contained in the JSON variable school
   let build="";
  build+=`<div class="card">
      <h3>${school.name}</h3>
      <img src="${school.image}">
      <p>${school.address}</p>
     <div>`;
  output.innerHTML=build;
}

function artist(){
  //Challenge 2: Fill the JSON below with the specified information for your favorite artist
  let artist = {
    "name":"Benson Boone",
    "image":"Benson Boone.jpg",
    "album":"American Heart",
    "url":"https://en.wikipedia.org/wiki/American_Heart_(Benson_Boone_album)"
  };
  let output = document.getElementById("output");

  //Challenge 3: Build a card for the information in the JSON. Make the image a hyperlink to the url provided.
 build+=`<div class="card">
    <h3>${artist.name}</h3>
    <img src="${artist.image}">
    <a>${artist.url}</a>
  <div>`;
  output.innerHTML=build;
}





