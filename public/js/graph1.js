// const {jsonFile1} = require('./json.js');
// var jsonFile = jsonFile1();//
// //alert(jsonFile1.name);

var jsonFile = {
  name : "WebTech" ,
  Verständnis : [1, 2],
  Relevant : [2, 3],
  Zufriedenheit : [2.4, 2],
  NochWas : [2.3 , 1.1],
  NochWas2 : [3.1, 4]
};

var x1 = [];
var y1 = [];
var y2 = [];
for (const key of Object.keys(jsonFile)) {
    if (key != 'name') {
      x1.push(key);
      y1.push(jsonFile[key][0]);
      y2.push(jsonFile[key][1]);
    }
}

var trace1 = {
  x: x1,
  y: y1,
  name: jsonFile.name + ' SS2018',
  type: 'bar'
};

var trace2 = {
  x: x1,
  y: y2,
  name: jsonFile.name + ' WS2018',
  type: 'bar'
};

var data = [trace1, trace2];

var layout = {barmode: 'group'};


// Plotly.newPlot('myDiv2', data, layout,{displayModeBar: false});

// var data = [4, 8, 15, 16, 23, 42];
// // var body = d3.select("body");
// // d3.select("body")
// //     .style("color", "blue")
// //     .style("background-color", "white");
// // var div = body.append("div");
// // div.html("Hello, world!");
//
// var x = d3.scaleLinear()
//     .domain([0, d3.max(data)])
//     .range([0, 420]);
//
//     d3.select(".chart")
//       .selectAll("div")
//         .data(data)
//       .enter().append("div")
//         .style("width", function(d) { return x(d) + "px"; })
//         .text(function(d) { return d; });
//
// // d3.select(".chart")
// //   .selectAll("div")
// //     .data(data)
// //   .enter().append("div")
// //     .style("width", function(d) { return d * 10 + "px"; })
// //     .text(function(d) { return d; });


////------------------------------------- Simple graph 1 ---------------
// TESTER = document.getElementById('tester');
// Plotly.plot( TESTER, [{
//   x: [1, 2, 3, 4, 5],
//   y: [1, 2, 4, 8, 16] }], {
//   margin: {
//     t: 0
//    }
//  },
//  {displayModeBar: false}
// );

//var jsonFile = require('json.js');


////------------------------------------- Simple graph 2 - before my json changes ---------------
// var trace1 = {
//   x: ['Verständnis', 'Relevant', 'Zufriedenheit','Noch-was' , 'noch-was2'],
//   y: [1, 2, 3 , 2.4 , 3.1],
//   name: 'SS2017',
//   type: 'bar'
// };
//
// var trace2 = {
//   x: ['Verständnis', 'Relevant', 'Zufriedenheit' , 'Noch-was' , 'noch-was2'],
//   y: [1.5, 2.3, 2 , 1.1 , 4],
//   name: 'WS2018',
//   type: 'bar'
// };
