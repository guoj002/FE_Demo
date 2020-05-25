// // 参数为含有then()方法的对象
// var obj = {
//     then: function() {
//       console.log('obj 里面的then()方法');
//     }
//   };
  
//   var p5 = Promise.resolve(obj);
//   p5.then(function(data) {
//     // 这里的值时obj方法里面返回的值
//     console.log(data); // obj 里面的then()方法
//   });

//   // 参数为Promise实例
// var p6 = Promise.resolve(7);
// var p7 = Promise.resolve(p6);

// p7.then(function(data) {
//   // 这里的值时Promise实例返回的值
//   console.log(data); // 7
// });

// // 参数为Promise实例,但参数是rejected态
// var p8 = Promise.reject(8);
// var p9 = Promise.resolve(p8);

// p9.then(function(data) {
//   // 这里的值时Promise实例返回的值
//   console.log('fulfilled:'+ data); // 不执行
// }).catch(function(err) {
//   console.log('rejected:' + err); // rejected: 8
// });

// 参数为Promise实例,但参数是rejected态
var p10 = new Promise(
    (resolve, reject) => {
        resolve('aaa')
    }
);
var p11 = Promise.resolve(p10);

p10
.then(
    function(data) {
        // 这里的值时Promise实例返回的值
        console.log('fulfilled1:'+ data); // 不执行
        return Promise.reject()
    }
)
.then(
    function(data) {
        // 这里的值时Promise实例返回的值
        console.log('fulfilled-success2:'+ data); // 不执行
    },
    function(data) {
        // 这里的值时Promise实例返回的值
        console.log('fulfilled1-fail2:'+ data); // 不执行
    },
)
.catch(
    function(err) {
        console.log('rejected:' + err); // rejected: 8
    }
);

p11
.then(
    function(data) {
        // 这里的值时Promise实例返回的值
        console.log('fulfilled2:'+ data); // 不执行
    }
)
.catch(
    function(err) {
        console.log('rejected:' + err); // rejected: 8
    }
);