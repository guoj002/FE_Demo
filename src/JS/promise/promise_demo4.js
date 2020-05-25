const promise = new Promise((resolve, rejest) => {
	// resolve()
	console.log('22')
	// console.log(x)
	// resolve(x+'111')
	// resolve('111')
	setTimeout(()=>{resolve('111')}, 1000)
	// rejest('111')
	// rejest('111')
})

setTimeout(()=>{console.log('timeout')}, 1000)

promise
.then((src)=>{console.log('---: ', src)})
// .then((s)=>{
// 	// throw new Error('llll')
// 	console.log(s)
// }, (err) => { console.log('e1: ', err) })
.then(() => { console.log('333') })
// .catch((err)=>{ console.log('err: ', err) })