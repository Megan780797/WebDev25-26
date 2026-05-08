//The function get() below accepts an id of an element and returns the actual element with that id.
//This function serves to shorten the code previously used to get an element with getElementByID().
function get(id){
  return document.getElementById(id);
}

//Challenge 1: Create a function card() that accepts the JSON data for each violation, then generates and returns an appropriate card for the violation.
function card(ticket){
 let bulid="";
     bulid+=`<div class="fitted card">
                 <h3>${ticket.plate}</h3>
                  <p>${ticket.state}</p>
                 <p>${ticket.issue_date}</p>
                 <p>${ticket.violation}</p>
          </div>`;
      return bulid;

}
 





