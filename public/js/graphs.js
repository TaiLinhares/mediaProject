var WIDTH_IN_PERCENT_OF_PARENT = 100,
    HEIGHT_IN_PERCENT_OF_PARENT = 100;

// Function to build first Graph - Gesamtbewertung
function buildGraph1(divNumber) {
//async - getting the json file
$.getJSON("./../json/18-05-22-evaluation_mittelwerte_js.json", (json) => {

  var arrays = BuildArrays(json, 'gurt');
  var plotValues = BuildValueForGraphs(arrays , divNumber);

  Plotly.newPlot(plotValues.gd, plotValues.data, plotValues.layout);
  });
}

// Function to build second Graph - Zeit Zeitaufwand
function buildGraph2(divNumber) {
//async - getting the json file
$.getJSON("./../json/18-05-22-evaluation_mittelwerte_js.json", (json) => {

  var arrays = BuildArrays(json, 'auf');
  var plotValues = BuildValueForGraphs(arrays , divNumber);

  Plotly.newPlot(plotValues.gd, plotValues.data, plotValues.layout);
  });
}

// Function to build third Graph - Verständnis
function buildGraph3(divNumber) {

$.getJSON("./../json/18-05-22-evaluation_mittelwerte_js.json", (json) => {

  var arrays = BuildArrays(json, 'verst');
  var plotValues = BuildValueForGraphs(arrays , divNumber);

  Plotly.newPlot(plotValues.gd, plotValues.data, plotValues.layout);
  });
}

// Function to build third Graph - Vorlesungsstil
function buildGraph4(divNumber) {

$.getJSON("./../json/18-05-22-evaluation_mittelwerte_js.json", (json) => {

  var arrays = BuildArrays(json, 'stil');
  var plotValues = BuildValueForGraphs(arrays , divNumber);

  Plotly.newPlot(plotValues.gd, plotValues.data, plotValues.layout);
  });
};

// Build the array with the values for the plotting
function BuildArrays (json , category) {
  json.sort(function(a, b){return a[category] - b[category]});

  var colors =[];
  var x1 = [];
  var y1 = [];

  json.forEach(function (course) {
    x1.push(course[category]);
    y1.push(course.vlid);
    if (course.category < 2) {
        colors.push('rgb(255,0,0)');
    } else if (course[category] < 2.5) {
            colors.push('rgb(255,128,0)');
        } else if (course[category] < 3) {
            colors.push('rgb(255,255,0)');
        } else if (course[category] < 3.5) {
            colors.push('rgb(153,255,51)');
        } else
            colors.push('rgb(0,255,0)');
      });

    return {colors, x1, y1};

}

// Builds the data from the plotting

function BuildValueForGraphs (arrays , divNumber) {
  var d3 = Plotly.d3;

  var gd3 = d3.select(divNumber)
      .style({
          width: WIDTH_IN_PERCENT_OF_PARENT + '%',
          'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',

          height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
          'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
      });

  var gd = gd3.node();

  var data = [{
    type: 'bar',
    x: arrays.x1,
    y: arrays.y1,
    orientation: 'h',
    marker:{
      color: arrays.colors
    }
  }];

  var layout = {
    autosize: true,
    margin: {
      l: 150,
      r: 100,
      b: 100,
      t: 150,
      pad: 4
    },
    xaxis: {
      title: 'Ranking',
      titlefont: {
        family: 'Arial, sans-serif',
        size: 18,
        color: 'lightgrey'
      },
      showticklabels: true,
      tickangle: 45,
      tickfont: {
        family: 'Old Standard TT, serif',
        size: 14,
        color: 'black'
      },
      exponentformat: 'e',
      showexponent: 'All'
    },
    yaxis: {
      title: 'Courses',
      titlefont: {
        family: 'Arial, sans-serif',
        size: 8,
        color: 'lightgrey'
      },
      showticklabels: true,
      tickangle: 45,
      tickfont: {
        family: 'Old Standard TT, serif',
        size: 8,
        color: 'black'
      },
      exponentformat: 'e',
      showexponent: 'All'
    }
  };

  return {gd, data, layout};

}
