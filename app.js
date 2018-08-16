

var express = require('express');
var path = require('path');

var app = express(); // better instead

app.use(express.static(path.join(__dirname, 'docs')));

app.listen(1234);
console.log("Listening on port 1234");
