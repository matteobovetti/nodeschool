var fs = require('fs');
var buff = fs.readFile(process.argv[2], function(err, data){
	if (err) console.log(err);
	var line = data.toString().split('\n').length - 1;
	console.log(line);
});