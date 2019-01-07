const promise = new Promise(function (resolve, reject) {
  // setTimeout(function () { throw new Error('test') }, 0)
  resolve('ok');
});

promise
.then(value => console.log(value) )
.catch(err => console.log(err) )
.finally(() => {console.log('over')});


// const someAsyncThing = function() {
//   return new Promise(function(resolve, reject) {
//     // 下面一行会报错，因为x没有声明
//     // resolve(x + 2);
//     // resolve('ok');
//   	setTimeout(() => throw new Error('test'), 0)
//   });
// };

// someAsyncThing()
// .catch(function(error) {
//   console.log('oh no', error);
// })
// .then(function() {
//   console.log('carry on');
// });