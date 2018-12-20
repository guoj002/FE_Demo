const fs = require('fs');

// 异步读取文件
fs.readFile('input.txt', (err, data) => {
	if (err) {return console.error(err); }

	console.log('异步读取: ', data.toString())
})

// 异步打开文件
fs.open('input.txt', 'r+', (err, fd) => {
	if (err) {return console.error(err); }

	console.log("文件打开成功！", fd);     
});

// 获取文件信息
fs.stat('input.txt', (err, stats) => {
	if (err) {return console.error(err); }

    console.log(stats);
   	console.log("读取文件信息成功！");
   	console.log("是否为文件(isFile) ? " + stats.isFile());
   	console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
})

// 写入文件
fs.writeFile('input.txt', '我是通 过fs.writeFile 写入文件的内容', {flag: 'a'}, err => {
   if (err) {return console.error(err); }

   console.log("数据写入成功！");
   console.log("--------我是分割线-------------")
   console.log("读取写入的数据！");
   fs.readFile('input.txt', (err, data) => {
      if (err) {return console.error(err); }

      console.log("异步读取文件数据: " + data.toString());
   });
});

