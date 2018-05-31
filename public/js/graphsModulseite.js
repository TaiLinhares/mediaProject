var WIDTH_IN_PERCENT_OF_PARENT = 100,
    HEIGHT_IN_PERCENT_OF_PARENT = 100;

// Function to build first Graph - Gesamtbewertung
function buildGraph1(divNumber) {
//async - getting the json file
$.getJSON("./../json/18-05-22-evaluation_mittelwerte_js.json", (json) => {

  var x1 = [3,7];
  var x2 = [4,6];
  var name = json[0].vlid;
  var arrays = {x1, x2, name};

  var plotValues = BuildValueForGraphs2(arrays , divNumber);

  Plotly.newPlot(plotValues.gd, plotValues.data, plotValues.layout);
  });
}

// Function to build second Graph - Zeit Zeitaufwand
function buildGraph2(divNumber) {
//async - getting the json file
$.getJSON("./../json/18-05-22-evaluation_mittelwerte_js.json", (json) => {

  var x1 = [2,8];
  var x2 = [1,9];
  var name = json[0].vlid;
  var arrays = {x1, x2, name};

  var plotValues = BuildValueForGraphs2(arrays , divNumber);

  Plotly.newPlot(plotValues.gd, plotValues.data, plotValues.layout);
  });
}

// Function to build third Graph - Verständnis
function buildGraph3(divNumber) {

$.getJSON("./../json/18-05-22-evaluation_mittelwerte_js.json", (json) => {
  //Note - here I still need to find the right value for schwierigkeit! 
  var x1 = [2.5,7.5];
  var x2 = [3,7];
  var name = json[0].vlid;
  var arrays = {x1, x2, name};

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

