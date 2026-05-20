// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}

//Function to generate Chart (accepts data, id of div for chart, and chart type)
function displayChart( data, chart_id, chart_type ){
  let chart = c3.generate({
    bindto: `#${chart_id}`,
    data: {
      columns: data,
      type:chart_type
    }
  });
}