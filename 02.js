//process.stdout.write('hello node\n');

var log = function (message){
	process.stdout.write(message+'\n');
};
var msg = 'hello world',
	a = 1;
process.stdout.write(`${msg} hahahaah ${a}`);