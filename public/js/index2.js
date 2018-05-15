data = [
  {
    type: 'bar',
    x: ['WebTech','Algodat','Ana2' , 'ITPDG'],
    y: [1,-5,10 , -10],
    base: 0,
    marker: {
      color: ['blue' , 'red' , 'blue' , 'red']
    },
    name: 'expenses'
  }];

Plotly.plot("myDiv2", data,{displayModeBar: false});
