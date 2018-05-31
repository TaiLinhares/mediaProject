var WIDTH_IN_PERCENT_OF_PARENT = 100,
    HEIGHT_IN_PERCENT_OF_PARENT = 100;

// Function to build first Graph - Gesamtbewertung
function buildGraph1(divNumber) {
//async - getting the json file
$.getJSON("./../json/18-05-22-evaluation_mittelwerte_js.json", (json) => {

  var arrays = buildArrayForPie(json, 'gurt', 6);
  var plotValues = BuildValueForGraphs2(arrays , divNumber);

  Plotly.newPlot(plotValues.gd, plotValues.data, plotValues.layout);
  });
}

// Function to build second Graph - Zeit Zeitaufwand
function buildGraph2(divNumber) {
//async - getting the json file
$.getJSON("./../json/18-05-22-evaluation_mittelwerte_js.json", (json) => {

  var arrays = buildArrayForPie(json, 'auf', 6);

  var plotValues = BuildValueForGraphs2(arrays , divNumber);

  Plotly.newPlot(plotValues.gd, plotValues.data, plotValues.layout);
  });
}

// Function to build third Graph - Verständnis
function buildGraph3(divNumber) {

$.getJSON("./../json/18-05-22-evaluation_mittelwerte_js.json", (json) => {
  //Note - here I still need to find the right value for schwierigkeit! 

  var arrays = buildArrayForPie(json, 'stoff', 6);

  var plotValues = BuildValueForGraphs2(arrays , divNumber);

  Plotly.newPlot(plotValues.gd, plotValues.data, plotValues.layout);
  });
}


// Builds the data from the plotting

function BuildValueForGraphs2 (arrays , divNumber) {
  var d3 = Plotly.d3;

  var gd3 = d3.select(divNumber)
      .style({
          width: WIDTH_IN_PERCENT_OF_PARENT + '%',
          'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',

          height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
          'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
      });

  var gd = gd3.node();
  var text = ' ${aaa}<br> ${3}'
  

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
    
    title: 'Die am besten bewerteten Module!',
    annotations: [
      {
        font: {
          size: 14
        },
        showarrow: false,
        text: 'Ss2017',
        x: 0.19,
        y: 0.5
      },
      {
        font: {
          size: 14
        },
        showarrow: false,
        text: 'Ws2017',
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
function buildArrayForPie (json , category, jsonIndex) {

  var categoryValue = json[6][category];
  
  var bewertung;
  // gurt/5 = x/100 --> gurt*100 / 5 = x
  if (category == 'gurt')
    bewertung = categoryValue * 100 / 5 ;
  else
    bewertung = categoryValue * 100 / 4 ;

  var missingBewertung = 100 - bewertung;
  var x1 = [missingBewertung,bewertung];
  
  // x2 should be the values for the other semester
  var x2 = [4,6];
  
  var name = json[jsonIndex].vlid;
   return {x1, x2, name};

}
