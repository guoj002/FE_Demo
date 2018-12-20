const Folder = function(folder) {
  this.folder = folder;
  this.lists = [];
}

Folder.prototype.add = function(resource) {
  this.lists.push(resource);
}

Folder.prototype.scan = function() {
  console.log('开始扫描文件夹：', this.folder);
  this.lists.forEach(function (folder) {
    folder.scan();
  });
}

const File = function(file) {
  this.file = file;
  // this.lists = [];
}

File.prototype.add = function() {
  throw Error('文件下不能添加其它文件夹或文件');
}

File.prototype.scan = function() {
  console.log('开始扫描文件：', this.file);
}

const folder = new Folder('根文件夹');
const folder1 = new Folder('JS');
const folder2 = new Folder('life');

const file1 = new File('深入React技术栈.pdf');
const file2 = new File('JavaScript权威指南.pdf');
const file3 = new File('小王子.pdf');

folder1.add(file1);
folder1.add(file2);

folder2.add(file3);

folder.add(folder1);
folder.add(folder2);

folder.scan()