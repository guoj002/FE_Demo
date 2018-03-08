const fs = require('fs')

let files = []
function ScanDir(path) {
  let that = this
  const imgjRegExp= /^.*\.(bmp|jpg|png|tiff|gif|pcx|tga|exif|fpx|svg|psd|cdr|pcd)$/
  if (fs.statSync(path).isFile() && imgjRegExp.test(path)) {
    return console.log(path);
    // return files.push(path)
  }
  try {
    fs.readdirSync(path).forEach(function (file) {
      ScanDir.call(that, path + '/' + file)
    })
  } catch (e) {
  }
}

ScanDir(process.cwd())
// console.log(files)