var WIDTH_IN_PERCENT_OF_PARENT = 100,
    HEIGHT_IN_PERCENT_OF_PARENT = 100;
    
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