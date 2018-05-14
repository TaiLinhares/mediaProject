TESTER = document.getElementById('tester');
Plotly.plot( TESTER, [{
  x: [1, 2, 3, 4, 5],
  y: [1, 2, 4, 8, 16] }], {
  margin: {
    t: 0
   }
 },
 {displayModeBar: false}
);

var trace1 = {
  x: ['Verstöndnis', 'Relevant', 'zufriedenheit','Nochwas' , 'nochwas2'],
  y: [1, 2, 3 , 2.4 , 3.1],
  name: 'SS2017',
  type: 'bar'
};

var trace2 = {
  x: ['Verstöndnis', 'Relevant', 'zufriedenheit' , 'Nochwas' , 'nochwas2'],
  y: [1.5, 2.3, 2 , 1.1 , 4],
  name: 'WS2018',
  type: 'bar'
};

var data = [trace1, trace2];

var layout = {barmode: 'group'};


Plotly.newPlot('myDiv', data, layout,{displayModeBar: false});

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
