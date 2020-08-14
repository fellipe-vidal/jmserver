var rn_bridge = require('rn-bridge');

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000, function() {
  rn_bridge.channel.send('Node was initialized on port 3000!');
});
