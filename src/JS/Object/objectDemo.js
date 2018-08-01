// let o = {
//     // method = () => 'hello'
//     method () { return 'hello'}
// }
// console.log(o)
// 
// 

let o1 = {a: 1}
let o2 = {b: 2, c: 3}

Object.setPrototypeOf(o2, o1)
// o2 = Object.create(o1)
console.log(o2)
o1.a = 4
console.log(o2.a)
console.log(o2.b)



console.log('===========================================')

var o = Object.create({x: 1, y: 2})
o.z = 3
console.log(o)
let { x, ...mm } = o
console.log(x)
console.log(mm.y)
console.log(mm.z)