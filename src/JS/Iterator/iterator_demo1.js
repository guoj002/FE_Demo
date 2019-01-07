
// const makeIterator = array => {
//   	let nextIndex = 0;
//   	return (
//   		{
// 	    	next: () => nextIndex < array.length ? {value: array[nextIndex++], done: false} : {value: undefined, done: true}
//   		}
//   	);
// }

const makeIterator = array => {
	let nextIndex = 0;
	return (
		{
			next: () => nextIndex < array.length ? {value: array[nextIndex++]} : {done: true}
		}
	);
}

const it = makeIterator(['a', 'b']);

console.log(it.next()) // { value: "a", done: false }
console.log(it.next()) // { value: "b", done: false }
console.log(it.next()) // { value: undefined, done: true }
