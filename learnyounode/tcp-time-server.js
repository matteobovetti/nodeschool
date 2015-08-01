var net = require('net');
var strftime = require('strftime');
var server = net.createServer(function (socket) {
  // socket handling logic
  var date = new Date();
  socket.end(strftime('%Y-%m-%d %H:%M', date));
})
server.listen(Number(process.argv[2]));
