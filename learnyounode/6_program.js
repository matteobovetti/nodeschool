var mymodule = require('./6_module.js');


mymodule(process.argv[2], process.argv[3], function(err, data) {
    if (err) console.log(err);
    console.log(data);
});