var fs = require('fs');
var buff = fs.readFileSync(process.argv[2]);
var line = buff.toString().split('\n').length - 1;
console.log(line);