
//async - getting the json file
$.getJSON("./../json/courses_as_object2.json", (json) => {

// Gesamt - noch nicht die Real zahlen

json.forEach(function (course) {
  var mittleWert = (course.verst + course.stil + course.med + course.auf + course.tut + course.akt + course.sk + course.mot) / 8 ;
  course.mittleWert = mittleWert;
});

// Function is at the end of the document
// brings back x, y and colors
var arrays = BuildArrays(json, 'mittleWert');


var d3 = Plotly.d3;

var WIDTH_IN_PERCENT_OF_PARENT = 100,
    HEIGHT_IN_PERCENT_OF_PARENT = 100;

var gd3 = d3.select('#Gesamtbewertung')
    .append('div')
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

Plotly.newPlot(gd, data, layout);


// Zeit Zeitaufwand
var arrays = BuildArrays(json, 'auf');

var d4 = Plotly.d3;

var gd4 = d4.select('#Zeitaufwand')
    .append('div')
    .style({
        width: WIDTH_IN_PERCENT_OF_PARENT + '%',
        'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',

        height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
        'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
    });

 var gd = gd4.node();

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

//Plotly.newPlot('myDiv2', data, layout);

Plotly.newPlot(gd, data, layout);

var d4 = Plotly.d3;

var gd4 = d4.select('#myDiv3')
    .style({
        width: WIDTH_IN_PERCENT_OF_PARENT + '%',
        'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',

        height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
        'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
    });

var gd2 = gd4.node();
// Verständnis Graph

var arrays = BuildArrays(json, 'verst');

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
        l: 200,
        r: 50,
        b: 100,
        t: 100,
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

Plotly.newPlot(gd2, data, layout);

// Vorlesungsstil

var arrays = BuildArrays(json, 'stil');

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
      autosize: false,
      width: 950,
      height: 850,
      margin: {
        l: 200,
        r: 50,
        b: 100,
        t: 100,
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

    Plotly.newPlot('myDiv4', data, layout);

});

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
