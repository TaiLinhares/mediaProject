var data = [{
  type: 'bar',
  x: [1, 14, 19, 5, 3, 4, 9, 15, 16, 2],
  y: ['course10', 'course9', 'course8','course7','course6', 'course5', 'course4','course3', 'course2','course1'],
  orientation: 'h'
}];

Plotly.newPlot('myDiv4', data);


var data = [{
  type: 'bar',
  x: [1, 14, 19, 5, 3, 4, 9, 15, 16, 2, 1, 14, 19, 5, 3, 4, 9, 15, 16, 2, 5, 5, 4, 1],
  y: ['course24','course23', 'course22','course21','course20', 'course19', 'course18','course17','course16', 'course15', 'course14','course13', 'course12','course11','course10', 'course9', 'course8','course7','course6', 'course5', 'course4','course3', 'course2','course1'],
  orientation: 'h'
}];

var layout = {
  autosize: false,
  width: 850,
  height: 800,
  margin: {
    l: 100,
    r: 50,
    b: 100,
    t: 100,
    pad: 4
  }
};

Plotly.newPlot('myDiv5', data, layout);

var data = [{
  type: 'bar',
  x: [20, 14, 19, 5, 3, 4, 9, 15, 16, 2, 1, 14, 19, 5, 3, 4, 9, 15, 16, 2, 5, 5, 4, 1],
  y: ['course24','course23', 'course22','course21','course20', 'course19', 'course18','course17','course16', 'course15', 'course14','course13', 'course12','course11','course10', 'course9', 'course8','course7','course6', 'course5', 'course4','course3', 'course2','course1'],
  orientation: 'h'
}];



Plotly.newPlot('myDiv6', data);
