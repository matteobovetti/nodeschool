var path = require('path');
var fs = require('fs');

module.exports = function (dirname, fileext, callback) {
    
    fs.readdir(dirname, function (err, list) {
        if (err) 
            return callback(err);
        
        flist = [];
        
        list.forEach(function(file) {
            if (path.extname(file) === "." + fileext) {
                flist.push(file);
                callback(null, file);
            }
        });
        return flist;
    });
    
    // callback(null, flist);
}