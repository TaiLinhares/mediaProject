var jsonFile = {
  name : "WebTech" ,
  Verständnis : [1, 2] ,
  Relevant : [2, 3] ,
  nochWas : [1 ,2]
};

console.log(jsonFile.Verständnis[0]);
console.log(jsonFile.Relevant[1]);
console.log(jsonFile.nochWas[1]);
var x1 = [];
var y1 = [];

for (const key of Object.keys(jsonFile)) {
    console.log(key, jsonFile[key]);
    if (key != 'name') {
      x1.push(key);
      y1.push(jsonFile[key][0]);
    }
}

console.log(x1);
console.log(y1);
