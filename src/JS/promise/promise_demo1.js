const promise = new Promise(
	(resolve, reject) => {
		console.log('Promise')
		resolve('111')
		// reject('222')
	}
)

promise
.then(
	(str) => {
		console.log('success-1 :', str)
		return new Promise(
			(func1, func2) => {
				func2('222')
			}
		)
	},
	// (str) => { console.log('fail-1 :', str) }
)
.then(
	(str) => { console.log('success-2 :', str) },
	(str) => { console.log('fail-2 :', str) }
)
.then(
	null,
	(str) => { console.log('fail-3 :', str) }
)
.catch(
	(str) => { console.log('fail-3.5 :', str) }
)
.then(
	(str) => { console.log('success-4 :', str) },
	(str) => { console.log('fail-4 :', str) }
)
