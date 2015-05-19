var http = require('http');
var buffer1 = '';
var buffer2 = '';
var buffer3 = '';

// Let's go with the first URL.
http.get(process.argv[2], function(res) {
    res.setEncoding('utf8');
    res.on('data', function(data){
        // buffering...
        buffer1 += data;
    });
    res.on('end', function(){
        
        // First URL is complete!
        console.log(buffer1);
        
        // Let's go with the second URL.
        http.get(process.argv[3], function(res) {
            res.setEncoding('utf8');
            res.on('data', function(data){
                // buffering...
                buffer2 += data;
            });
            res.on('end', function(){
                
                // Second URL is complete!
                console.log(buffer2);
                
                // Let's go with the third URL.
                http.get(process.argv[4], function(res) {
                    res.setEncoding('utf8');
                    res.on('data', function(data){
                        // buffering...
                        buffer3 += data;
                    });
                    res.on('end', function(){

                        // Third URL is complete!
                        console.log(buffer3);
                        
                    });
                    res.on('error', console.error);
                });
            });
            res.on('error', console.error);
        });
    });
    res.on('error', console.error);
});