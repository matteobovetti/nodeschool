var total = 0;
// starting from 2 because first is "node" process and second is "program name".
for(var i = 2; i < process.argv.length; i++) {
	total += +process.argv[i];
}
console.log(total);