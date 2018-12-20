// 正常版本的readFile（多参数版本）
fs.readFile(fileName, callback);

// Thunk版本的readFile（单参数版本）
// var readFileThunk = Thunk(fileName);
// readFileThunk(callback);

// var Thunk = function (fileName){
//   return function (callback){
//     return fs.readFile(fileName, callback); 
//   };
// };

const readFileThunk = Thunk(fileName)
readFileThunk(callback)

const Thunk = fileName => callback => fs.readFile(fileName, callback)
