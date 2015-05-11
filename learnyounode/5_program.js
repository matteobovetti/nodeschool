var path = require('path');
var fs = require('fs');

fs.readdir(process.argv[2], function callback (err, list) {
    list.forEach(function(file) {
        if (path.extname(file) === "." + process.argv[3]) {
            console.log(file);
        }
    });
});