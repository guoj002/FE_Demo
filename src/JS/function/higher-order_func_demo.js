let isString = obj => Object.prototype.toString.call(obj) === '[object String]'

let isArray = obj => Object.prototype.toString.call(obj) === '[object Array]'

let isNumber = obj => Object.prototype.toString.call(obj) === '[object Number]'

const str = '123'

console.log('--> ', isString(str))

// =====================================

let isType = type => obj => Object.prototype.toString.call(obj) === `[object ${type}]`


console.log('--> ', isType('String')('abc'))

console.log('--> ', isType('Array')([1,2,3]))

console.log('--> ', isType('Number')('33'))