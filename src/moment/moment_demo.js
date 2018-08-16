const moment = require('moment');

// 1.当前时间
const now = moment();

// 2.字符串
const day = moment("1995-12-25");

console.log(moment())
console.log(moment().format())

console.log(now)
console.log(now.format())

console.log(day)
console.log(day.format())

// 3.字符串 + 格式
// moment(String, String);
// moment(String, String, String);
// moment(String, String, Boolean);
// moment(String, String, String, Boolean);

