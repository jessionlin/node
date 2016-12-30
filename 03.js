var frames = [];
frames[frames.length] = `
╭~~~╮
(o^.^o)
`;
frames[frames.length] = `
╭~~~╮
(o@.@o) 
`;
frames[frames.length] = `
╭~~~╮
(o~.~o)
`;
frames[frames.length] = `
╭ ﹌╮
(o'.'o)
`;
var fps = 10;
var current=0;
var render = () => {
	//将当前控制台清空
	//var height = process.stdout.getWindowSize()[1];
	//for(var i=0;i<height;i++){
	//	process.stdout.write('\n');
	//}
	process.stdout.write('\033[2J');
	process.stdout.write('\033[0f');
	//输出新的内容
	if(current===frames.length){current = 0;} 
	process.stdout.write(frames[current++]);
};

setInterval(render,1000/fps);