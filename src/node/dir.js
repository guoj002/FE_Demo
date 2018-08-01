const fs = require("fs");

const Path = "C:/Users/guojia/workspace/nodejs";

console.log("==============查看" + Path + "目录下所有图片代码=================");

function findImgs(path){
	console.log("准备打开" + path + "目录！");
	fs.readdir(path,function(err, files){
		if(err){
			return console.error(err);
		}
		console.log("files: ", files);
		console.log("------------------------------------------------------");
		files.forEach(function(file){
			fs.stat(file, function (err, stats) {
				console.log("文件： ", file);
			   	// console.log(stats);
			   	console.log("读取文件信息成功！");
			   
			   	// 检测文件类型
			   	console.log("是否为文件(isFile) ? " + stats.isFile());
			   	console.log("是否为目录(isDirectory) ? " + stats.isDirectory()); 
			   	console.log("------------------------------------------------------");
			})
		});
	});
}

findImgs(Path);