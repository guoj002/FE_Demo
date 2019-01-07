const promise = new Promise((resolve, rejest) => {
	// resolve()
	console.log('22')
	// console.log(x)
	resolve(x+'111')
	rejest('111')
	rejest('111')
})

setTimeout(()=>{console.log('timeout')}, 1000)

promise
.then(()=>{console.log('---')})
// .then((s)=>{
// 	// throw new Error('llll')
// 	console.log(s)
// }, (err) => { console.log('e1: ', err) })
.then(() => { console.log('333') })
// .catch((err)=>{ console.log('err: ', err) })