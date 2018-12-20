console.log('filename: ', __filename);


console.log('dirname: ', __dirname);

printHello = () => {
	console.log('hello world')
}

const t = setTimeout(printHello, 2000);

clearTimeout(t);

const tt = setInterval(printHello, 2000);

clearTimeout(tt);