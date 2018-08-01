const fs = require("fs");
//path模块，可以生产相对和绝对路径
const path = require("path");

//获取当前目录绝对路径，这里resolve()不传入参数
const filePath = path.resolve();
// const filePath = "C:/Users/guojia/workspace/nodejs/nodeWork";

console.log("==============查看" + filePath + "目录下所有图片代码=================");

function findImgs(pathUrl){
    console.log("准备打开" + pathUrl + "目录！");
    fs.readdirSync(pathUrl,function(err, files){
        if(err){
            return console.error(err);
        }
        console.log("files: ", files);
        console.log("------------------------------------------------------");
        files.forEach(function(file){
            const imgjRegExp= /^.*\.(bmp|jpg|png|tiff|gif|pcx|tga|exif|fpx|svg|psd|cdr|pcd|js)$/; 
            console.log("file: ", file);
            fs.statSync(path.join(filePath, file), function (err, stats) {
                console.log("stats: ", stats);
                if(stats.isFile() && imgjRegExp.test(file)){
                    console.log("img-->", file);
                }else if(stats.isDirectory()){
                    console.log("文件夹： ", file);
                    const name = file;
                    findImgs1(path.join(pathUrl,file));
                }else{
                   console.log("file: ", file); 
                }
            })      
        });
    });
}

findImgs(filePath);