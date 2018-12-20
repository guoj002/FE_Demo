const p1 = new Promise(
	(resolve, reject) => {
		console.log('111')
		setTimeout(() => reject(new Error('fail---')), 3000)
	}
)

const p2 = new Promise(
	(resolve, reject) => {
		console.log('222')
		resolve(p1)
		setTimeout(() => resolve(p1), 1000)
	}
)

// const p3 = new Promise(
// 	(resolve, reject) => {
// 		console.log('333')
// 		setTimeout(() => resolve(p2), 1000)
// 	}
// )

p2
.then(
	result => { console.log('this is :', result) },
)
.catch(
	error => { console.log('I am so :', error) }
)