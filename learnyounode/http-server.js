var http = require('http')
var fs = require('fs');

var server = http.createServer(function (req, res) {
  // request handling logic...
  var buffer = '';
  var readable = fs.createReadStream(process.argv[3]);

  readable.on('data', function(data) {
    buffer += data;
  });

  readable.on('end', function () {
      res.writeHead(200, { 'content-type': 'text/plain' })
      res.end(buffer);
  });
});
server.listen(Number(process.argv[2]));


/**

Original solution

var http = require('http')
    var fs = require('fs')

    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })

      fs.createReadStream(process.argv[3]).pipe(res)
    })

    server.listen(Number(process.argv[2]))
*/
