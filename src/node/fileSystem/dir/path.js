const fs = require('fs');

// 异步读取文件
fs.readFile('../../route/index.js', (err, data) => {
	if (err) {return console.error(err); }

	console.log('异步读取: ', data.toString())
})