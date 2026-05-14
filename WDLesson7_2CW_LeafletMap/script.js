let data, mapObj;

function displayMap(){
  //Retrieve the latitude & longitude from the user via text inputs and pass it to the showMap() function to generate the map and display it.
  let lat = get("lat").value;
  let lon = get("lon").value;

  showMap(lat,lon);
  
}
