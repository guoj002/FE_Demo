const promise = new Promise(
	(resolve, reject) => {
		console.log('Peomise')
		const str1 = 'love'
		const str2 = 'sorry'
		resolve(str1)
		console.log('done1')
		// reject(str2)
		console.log('done2')
	}
)

promise
.then(
	(str) => { console.log('this is1 :', str) },
	// (str) => { console.log('I am so :', str) }
)
.then(
	(str) => { console.log('this is2 :', str) },
	(str) => { console.log('I am so2 :', str) }
)
.then(
	null,
	(str) => { console.log('I am so3 :', str) }
)
.then(
	(str) => { console.log('this is4 :', str) },
	(str) => { console.log('I am so4 :', str) }
)