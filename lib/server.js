var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Math API');
});

module.exports = app;