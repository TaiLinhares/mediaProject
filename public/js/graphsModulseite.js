var WIDTH_IN_PERCENT_OF_PARENT = 100,
    HEIGHT_IN_PERCENT_OF_PARENT = 100;

// Function to build first Graph - Gesamtbewertung
function buildGraph1(divNumber) {
// Two async calls. Json is commig back as an array of objects. My Data is in the fisrt cell
  $.when( $.getJSON('./../json/ws1718_mittelwert.json'), $.getJSON('./../json/ws1617_mittelwert.json') ).then(function( json, json2 ){
    
    var arrays = buildArrayForPie(json, 'gurt', 3, json2);
    var plotValues = BuildValueForGraphs2(arrays , divNumber);
  
    Plotly.newPlot(plotValues.gd, plotValues.data, plotValues.layout);
});
}

// Function to build second Graph - Zeit Zeitaufwand
function buildGraph2(divNumber) {
//async - getting the json file
$.when( $.getJSON('./../json/ws1718_mittelwert.json'), $.getJSON('./../json/ws1617_mittelwert.json') ).then(function( json, json2 ){
    
  var arrays = buildArrayForPie(json, 'auf', 3, json2);
  var plotValues = BuildValueForGraphs2(arrays , divNumber);

  Plotly.newPlot(plotValues.gd, plotValues.data, plotValues.layout);
});
}

// Function to build third Graph - Verständnis
function buildGraph3(divNumber) {
  $.when( $.getJSON('./../json/ws1718_mittelwert.json'), $.getJSON('./../json/ws1617_mittelwert.json') ).then(function( json, json2 ){
    
    var arrays = buildArrayForPie(json, 'stoff', 3, json2);
    var plotValues = BuildValueForGraphs2(arrays , divNumber);
  
    Plotly.newPlot(plotValues.gd, plotValues.data, plotValues.layout);
});
}


// Builds the data from the plotting

function BuildValueForGraphs2 (arrays , divNumber) {
  var titlePieGraph = BuildTitle(divNumber);
  var d3 = Plotly.d3;

  var gd3 = d3.select(divNumber)
      .style({
          width: WIDTH_IN_PERCENT_OF_PARENT + '%',
          'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',

          height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
          'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
      });

  var gd = gd3.node();

  var data = [{ // left pie
    // showlegend: false, 
    // legendgroup: '', // Desides how many times the groups on the right side will show
    // opacity: 0.5,
    // ids: ['a' , 'b'],
    // slicetext: '3',
    textposition: 'none',
    rotation: 90,
    pull: [0.1, 0],
    values: arrays.x1,
    labels: ['Missing points', 'Bewertung' ],
    domain: {
      x: [0, .46]
    },    
    marker:{
      colors: ['black' , '#CDDC39'],
      line: {
        color: 'black',
        width: 2
      }
    },
    name: arrays.name,
    hoverinfo: 'label+percent+name',
    hole: .3,
    type: 'pie'
  },{ // right pie
    rotation: 90,
    pull: [0.1, 0],
    values: arrays.x2,
    labels: ['Missing points', 'Bewertung'],
    text: arrays.name,
    textposition: 'none',
    domain: {
      x: [.55, 1]
    },
    marker:{
      colors: ['black' , '#CDDC39'],
      line: {
        color: 'black',
        width: 2
      }
    },
    name: arrays.name,
    hoverinfo: `label+percent+name`,
    hole: .3,
    type: 'pie'
  }];
  
  var layout = {
    
    title: titlePieGraph,
    annotations: [
      {
        font: {
          size: 14
        },
        showarrow: false,
        text: 'WS2017',
        x: 0.19,
        y: 0.5
      },
      {
        font: {
          size: 14
        },
        showarrow: false,
        text: 'Ws2016',
        x: 0.82,
        y: 0.5
      }
    ],
    hovermode: 'closest',
    autosize: true
  };

  return {gd, data, layout};

}
// Gets the json file, the key and the place of the course in the json array
function buildArrayForPie (json , category, jsonIndex, json2) {

  var categoryValue = json[0][jsonIndex][category];
  var categoryValue2 = json2[0][jsonIndex][category];

  var bewertung, bewertung2;
  // gurt/5 = x/100 --> gurt*100 / 5 = x
  if (category == 'gurt'){
    bewertung = categoryValue * 100 / 5 ;
    bewertung2 = categoryValue2 * 100 / 4; 
  }
  else {
    bewertung = categoryValue * 100 / 4 ;
    bewertung2 = categoryValue2 * 100 / 4; 
  }
  var missingBewertung = 100 - bewertung;
  var missingBewertung2 = 100 - bewertung2;

  var x1 = [missingBewertung,bewertung];
  var x2 = [missingBewertung2,bewertung2];
  
  var name = json[0][jsonIndex].vlid;
   return {x1, x2, name};

}

function BuildTitle(divNumber) {
  if (divNumber == '#myDiv5')
      return 'Gesamtbewertung'
    else if (divNumber == '#myDiv6')
      return 'Zeitaufwand'
    else if (divNumber == '#myDiv7')
      return 'Schwierigkeit'
    else
      return 'We have a problem'
}
