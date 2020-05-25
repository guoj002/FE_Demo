const someAsyncThing = function() {
    return new Promise(function(resolve, reject) {
        // 下面一行会报错，因为x没有声明
        resolve(x + 2);
    });
};

someAsyncThing()
    .then(str => console.log('everything is great: ', str))
    .catch(str => console.log(str))

setTimeout(() => { console.log(123) }, 2000);