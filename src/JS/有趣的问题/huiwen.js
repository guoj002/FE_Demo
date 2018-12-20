// 回文判断
const str = 'asdsa'
func = str => {
	if (typeof(str) !== 'string') {
		return false
	}
	return str.split('').reverse().join('') === str
}

console.log(func(str))
