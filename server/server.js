const path = require('path');
const http = require('http');
const express = require('express');

const publicPath = path.join(__dirname, '../public'); // path takes away the .. from the end path. - to reach my frontend files
//console.log(publicPath);
const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(publicPath)); //renders index/html in public

app.listen(port , () => {
  console.log(`Server runs on - ${port}`);
});
