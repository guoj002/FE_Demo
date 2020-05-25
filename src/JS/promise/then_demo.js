Promise.prototype.then = function(onFulfilled, onRejected) {
    var promise = this
    return new Promise(function(resolve, reject) {
        function handle(value) {
            var ret = typeof onFulfilled === 'function' && onFulfilled(value) || value
            if (ret && typeof ret['then'] == 'function') {
                ret.then(
                    function(value) {
                        resolve(value)
                    },
                    function(reason) {
                        reject(reason)
                    }
                );
            } else {
                resolve(ret)
            }
        }
        function errback(reason) {
            reason = typeof onRejected === 'function' && onRejected(reason) || reason
            reject(reason)
        }
        if (promise._status === 'PENDING') {
            promise._resolves.push(handle)
            promise._rejects.push(errback)
         } else if (promise._status === FULFILLED) { 
            handle(promise._value)
        } else if (promise._status === REJECTED) {
            errback(promise._reason)
        }
    })
}