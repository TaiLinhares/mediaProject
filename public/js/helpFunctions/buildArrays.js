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