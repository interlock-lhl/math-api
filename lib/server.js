var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Math API!!!');
});

app.get('/add/:first/:second', function(req, res) {
  var sum = parseFloat(req.params.first) + parseFloat(req.params.second);
  res.send("" + sum);
});

app.get('/sub/:first/:second', function(req, res) {
  var sub = req.params.first - req.params.second;
  res.send("" + sub);
});

app.get('/mult/:first/:second', function(req, res) {
  var p = req.params.first * req.params.second;
  res.send("" + p);
});

app.get('/div/:first/:second', function(req, res) {
  var d = req.params.first / req.params.second;
  if (isFinite(d) === false) {
    res.sendStatus(500);
  } else {
    res.send("" + d);
  }
});


module.exports = app;
