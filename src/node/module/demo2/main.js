
// CommonJS模块
let { count } = require('./counter.js');
// 或
// let count = require("./counter.js").count

// 等同于
// let counter = require('./counter.js');
// let count = counter.count;
// 或
// let { count } = counter;

console.log(count)

exports.message = 'hello gj'