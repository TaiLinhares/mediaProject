
//async - getting the json file
$.getJSON("./../json/courses_as_object2.json", (json) => {

// Gesamt - noch nicht die Real zahlen
json.sort(function(a, b){return a.verst - b.verst});

var x1 = [];
var y1 = [];
var colors = [];

json.forEach(function (course) {
  x1.push(course.verst);
  y1.push(course.vlid);
  if (course.verst < 2) {
    colors.push('rgb(255,0,0)');
  } else if (course.verst < 2.5) {
      colors.push('rgb(255,128,0)');
  } else if (course.verst < 3) {
      colors.push('rgb(255,255,0)');
  } else if (course.verst < 3.5) {
      colors.push('rgb(153,255,51)');
  } else
      colors.push('rgb(0,255,0)');
});
var data = [{
  type: 'bar',
  x: x1,
  y: y1,
  orientation: 'h',
  marker:{
    color: colors
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

Plotly.newPlot('myDiv1', data, layout);

// Zeit Zeitaufwand
json.sort(function(a, b){return a.auf - b.auf});

var x1 = [];
var y1 = [];
var colors = [];
json.forEach(function (course) {
    x1.push(course.auf);
    y1.push(course.vlid);
    if (course.auf < 2) {
      colors.push('rgb(255,0,0)');
      } else if (course.auf < 2.5) {
            colors.push('rgb(255,128,0)');
      } else if (course.auf < 3) {
            colors.push('rgb(255,255,0)');
      } else if (course.auf < 3.5) {
            colors.push('rgb(153,255,51)');
      } else
            colors.push('rgb(0,255,0)');
    });
    var data = [{
      type: 'bar',
      x: x1,
      y: y1,
      orientation: 'h',
      marker:{
        color: colors
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

Plotly.newPlot('myDiv2', data, layout);

// Verständnis Graph

json.sort(function(a, b){return a.verst - b.verst});
var x1 = [];
var y1 = [];
var colors = [];
json.forEach(function (course) {
    x1.push(course.verst);
    y1.push(course.vlid);
    if (course.verst < 2) {
        colors.push('rgb(255,0,0)');
    } else if (course.verst < 2.5) {
          colors.push('rgb(255,128,0)');
      } else if (course.verst < 3) {
          colors.push('rgb(255,255,0)');
      } else if (course.verst < 3.5) {
          colors.push('rgb(153,255,51)');
      } else
          colors.push('rgb(0,255,0)');
    });
    var data = [{
      type: 'bar',
      x: x1,
      y: y1,
      orientation: 'h',
      marker:{
        color: colors
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

Plotly.newPlot('myDiv3', data, layout);

// Vorlesungsstil

json.sort(function(a, b){return a.stil - b.stil});
var x1 = [];
var y1 = [];
var colors = [];
json.forEach(function (course) {
  x1.push(course.stil);
  y1.push(course.vlid);
  if (course.stil < 2) {
      colors.push('rgb(255,0,0)');
  } else if (course.stil < 2.5) {
          colors.push('rgb(255,128,0)');
      } else if (course.stil < 3) {
          colors.push('rgb(255,255,0)');
      } else if (course.stil < 3.5) {
          colors.push('rgb(153,255,51)');
      } else
          colors.push('rgb(0,255,0)');
    });
    var data = [{
      type: 'bar',
      x: x1,
      y: y1,
      orientation: 'h',
      marker:{
        color: colors
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
