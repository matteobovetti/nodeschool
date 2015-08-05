var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {

  if (req.method != 'GET')
    return res.end('send me a GET\n')

  var parsedurl = url.parse(req.url, true);
  var d = new Date(parsedurl.query.iso);

  res.writeHead(200, {'Content-Type' : 'application/json'})

  if (parsedurl.pathname === '/api/parsetime') {

    res.end(JSON.stringify({
      hour : d.getHours(),
      minute : d.getMinutes(),
      second : d.getSeconds()
    }));

  } else if (parsedurl.pathname === '/api/unixtime') {

    res.end(JSON.stringify({
      unixtime : d.getTime()
    }));

  } else {
    res.end();
  }

});

server.listen(Number(process.argv[2]))
