var path = require('path');
var fs = require('fs');

module.exports = function (dirname, fileext, callback) {
    
    fs.readdir(dirname, function (err, list) {
        if (err) 
            return callback(err);
        
        list = list.filter(function(file) {
            return (path.extname(file) === "." + fileext);
        });

        return callback(null, list);

    });
}
