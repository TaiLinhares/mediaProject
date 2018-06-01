var WIDTH_IN_PERCENT_OF_PARENT = 100,
    HEIGHT_IN_PERCENT_OF_PARENT = 100;

// Function to build first Graph - Gesamtbewertung
function buildGraph1(divNumber) {
//async - getting the json file
$.getJSON("./../json/ws1718_mittelwert.json", (json) => {
    var myPlot = document.getElementById('myDiv1');

    var arrays = BuildArrays(json, 'gurt');
    var plotValues = BuildValueForGraphs(arrays , divNumber);

    Plotly.newPlot(plotValues.gd, plotValues.data, plotValues.layout);

    myPlot.on('plotly_click', function(data){
      
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
    hovermode: 'closest',
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
        size: 18,
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


function redirectCoursePage (courseName) {
  if (courseName == 'Energiespeichertechnologien für mobile Anwendungen')
    console.log('Energiespeichertechnologien für mobile Anwendungen');
 
  else if (courseName == 'Elektrische Energiesysteme')
    console.log('Elektrische Energiesysteme');
 
  else if (courseName == 'Technische Grundlagen der Informatik')
    console.log('Technische Grundlagen der Informatik');
  
  else if (courseName == 'Formale Sprachen und Automaten')
    console.log('Formale Sprachen und Automaten');

  else if (courseName == 'Grundlagen der Elektrotechnik')
    console.log('Grundlagen der Elektrotechnik');
  
  else if (courseName == 'Wissenschaftliches Rechnen')
    console.log('Wissenschaftliches Rechnen');
  
  else if (courseName == 'Rechnerorganisation')
    console.log('Rechnerorganisation');
  
  else if (courseName == 'Signale und Systeme')
    console.log('Signale und Systeme');
  
  else if (courseName == 'Theoretische Grundlagen der Informatik')
    console.log('Theoretische Grundlagen der Informatik');    
  
  else if (courseName == 'Einführung in die Programmierung mit Java')
    console.log('Einführung in die Programmierung mit Java');
  
  else if (courseName == 'Webtechnologien')
    console.log('Webtechnologien');
  
  else if (courseName == 'Grundlagen der elektronischen Messtechnik')
    console.log('Grundlagen der elektronischen Messtechnik');
  
  else if (courseName == 'Softwaretechnik und Programmierparadigmen')
    console.log('Softwaretechnik und Programmierparadigmen');
  
  else if (courseName == 'Einführung in die Medieninformatik')
    console.log('Einführung in die Medieninformatik');
  
  else if (courseName == 'Grundlagen der E-Technik (Service)')
    console.log('Grundlagen der E-Technik (Service)');
  
  else if (courseName == 'Rechnernetze und verteilte Systeme')
    console.log('Rechnernetze und verteilte Systeme');
  
  else if (courseName == 'Information Governance')
    console.log('Information Governance');        
    
  else if (courseName == 'Einführung in die Programmierung')
    console.log('Einführung in die Programmierung');
  
  else if (courseName == 'Praktisches Programmieren und Rechneraufbau')
    console.log('Praktisches Programmieren und Rechneraufbau');
  
  else if (courseName == 'Einführung in die Programmierung (Service)')
    console.log('Einführung in die Programmierung (Service)');
  
  else if (courseName == 'Informatik Propädeutikum')
    console.log('Informatik Propädeutikum');
  
  else if (courseName == 'Logik')
    console.log('Logik');    

  else if (courseName == 'Halbleiterbauelemente')
    console.log('Halbleiterbauelemente');   
    
  else if (courseName == 'Diskrete Strukturen')
    console.log('Diskrete Strukturen');   
    else 
    console.log('Something went wrong');
}