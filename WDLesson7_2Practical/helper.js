// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}

// Challenge 3: Create the function showMap() that displays the map for a location [lat, lon]
function showMap(lat,lon){
  let location = [lat, lon];
  //Line below needed to create the map object once.
  if(!mapObj){
      mapObj = L.map("map");
  } 
  let map = mapObj.setView(location, 14);// [lat, lon], zoom

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  let marker = L.marker(location).addTo(map);// places marker on map
}

// Challenge 4: Create the function card() to generate an appropriate info card with the button to view map
function card( info ){ 
     let build = `<div class="card fitted">
                  <h3>${info.collision_id}</h3>
                  <hr>
                  <p>#Injured: ${info.number_of_persons_injured}</p>
                  <h5>${info.borough}</h5>`;
                  if(info.latitude && info.longitude){
                    build += `<input type="button" value="Map" onclick="showMap( ${info.latitude}, ${info.longitude} )">`;
                  }
    build +=    `</div>`;
  return build;
                }
