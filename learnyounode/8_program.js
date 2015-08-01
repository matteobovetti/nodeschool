var http = require('http');
var buffer = '';

http.get(process.argv[2], function(res) {
    res.setEncoding('utf8');
    res.on('data', function(data){
        buffer += data;
    });
    res.on('end', function(){
        console.log(buffer.length);
        console.log(buffer);
    });
    res.on('error', console.error);
});