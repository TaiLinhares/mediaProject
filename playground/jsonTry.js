var {jsonFile} = require('./json.js');
var json = jsonFile();

console.log(json);

var jsonFile2 = {
  name : "WebTech" ,
  Verständnis : [1, 2] ,
  Relevant : [2, 3] ,
  nochWas : [1 ,2]
};

console.log(jsonFile2.Verständnis[0]);
console.log(jsonFile2.Relevant[1]);
console.log(jsonFile2.nochWas[1]);
var x1 = [];
var y1 = [];

for (const key of Object.keys(jsonFile2)) {
    console.log(key, jsonFile2[key]);
    if (key != 'name') {
      x1.push(key);
      y1.push(jsonFile2[key][0]);
    }
}

console.log(x1);
console.log(y1);
