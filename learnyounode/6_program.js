var mymodule = require('./6_module.js');

mymodule(process.argv[2], process.argv[3], function(err, data) {
    if (err)
        return console.error('There is an error:', err);

    data.forEach(function(file) {
        console.log(file);
    });

});
