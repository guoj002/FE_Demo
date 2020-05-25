let promise = new Promise((resolve, reject) => {
    // throw new Error('test')
    console.log('init')
    resolve('ok')
    setTimeout(() => { throw new Error('test') }, 0)
    reject('no')
})
console.log('---')

promise
.then(
    value => console.log(value)
)
// .then(
//     value => console.log(value),
//     error => {
//         console.log(1, error)
//         throw new Error('test2')
//     }
// )
.catch(
    error => console.log(2, error)
)