var express = require('express');
var cors = require('cors');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT);


app.get('/airhorn', function(req, res, next) {
   io.emit('airhorn');
   res.send(200);
});

io.on('airhorn', function(a) {
  console.log('airhorn!')
})
