var express = require('express');
var app = express();

var jsonSubscribe={
"id": 2,
"command": "subscribe",
"accounts": [],
"streams": [
  "server",
  "ledger"
]
}
var WebSocket = require('ws');
var ws = new WebSocket('wss://s1.ripple.com:443');
ws.onopen = function() {
  var jsonSubscribe={
  "id": 2,
  "command": "subscribe",
  // "accounts": [],
  // "streams": [
  //   "server",
  //   "ledger"
  // ]
  }
  ws.send(JSON.stringify(jsonSubscribe));
      console.log('Message sent to server');
      var jsonSubscribeT={
      "id": 1,
      "command": "ledger_closed",
      // "accounts": [],
      // "streams": [
      //   "server",
      //   "ledger"
      // ]
      }
      ws.send(JSON.stringify(jsonSubscribeT));
          console.log('Message ledger sent to server');
  };
  ws.onmessage = function(evt) {
    var received_msg = evt.data;
    console.log('Message received from server: ' + received_msg);
};
ws.on('subscribe', function open() {
  ws.send('subscribe');
});

ws.on('message', function(data, flags) {
  // flags.binary will be set if a binary data is received.
  // flags.masked will be set if the data was masked.
});






app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
