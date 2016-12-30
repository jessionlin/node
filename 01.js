var argvs = process.argv.slice(2);
switch(argvs[0]){
	case 'init':
		console.log('你需要INIT');
	break;
	case 'install':
	var installPackageName = argvs[1];
		console.log('你在安装'+installPackageName);
	break
	case 'unstall':
		console.log('你在卸载');
	break;
}