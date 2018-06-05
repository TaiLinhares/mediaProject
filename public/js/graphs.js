
// Function to build first Graph - Gesamtbewertung
function buildGraph1(divNumber) {
//async - getting the json file
$.getJSON("./../json/ws1718_mittelwert.json", (json) => {
    var myPlot = document.getElementById('myDiv1');

    var arrays = BuildArrays(json, 'gurt');
    var plotValues = BuildValueForGraphs(arrays , divNumber);

    Plotly.newPlot(plotValues.gd, plotValues.data, plotValues.layout);

    myPlot.on('plotly_click', function(data){
      // data.points[0].y , has the bars courses name
      redirectCoursePage(data.points[0].y);

    });
  });
}

// Function to build second Graph - Zeit Zeitaufwand
function buildGraph2(divNumber) {
//async - getting the json file
  $.getJSON("./../json/ws1718_mittelwert.json", (json) => {
    var myPlot = document.getElementById('myDiv2');

    var arrays = BuildArrays(json, 'auf');
    var plotValues = BuildValueForGraphs(arrays , divNumber);

    Plotly.newPlot(plotValues.gd, plotValues.data, plotValues.layout);

    myPlot.on('plotly_click', function(data){
      
      redirectCoursePage(data.points[0].y);

    });
  });
}

// Function to build third Graph - Verständnis
function buildGraph3(divNumber) {

$.getJSON("./../json/ws1718_mittelwert.json", (json) => {
  var myPlot = document.getElementById('myDiv3');

  var arrays = BuildArrays(json, 'verst');
  var plotValues = BuildValueForGraphs(arrays , divNumber);

  Plotly.newPlot(plotValues.gd, plotValues.data, plotValues.layout);
  
  myPlot.on('plotly_click', function(data){
      
    redirectCoursePage(data.points[0].y);

    });
  });
}

// Function to build third Graph - Vorlesungsstil
function buildGraph4(divNumber) {

  $.getJSON("./../json/ws1718_mittelwert.json", (json) => {

    var myPlot = document.getElementById('myDiv4');

    var arrays = BuildArrays(json, 'stil');
    var plotValues = BuildValueForGraphs(arrays , divNumber);

    Plotly.newPlot(plotValues.gd, plotValues.data, plotValues.layout);
  
    myPlot.on('plotly_click', function(data){
      
      redirectCoursePage(data.points[0].y);
  
      });
  });
};


