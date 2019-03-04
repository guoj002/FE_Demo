//定义： entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)。

//用法： 迭代对象中数组的索引值作为 key， 数组元素作为 value。

// [0, "Banana"]
// [1, "Orange"]
// [2, "Apple"]
// [3, "Mango"]

//语法： array.entries()

//入参： 无参

//返回： 数组的迭代对象

//版本：ES6

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.entries();

console.log('o: ', x)
console.log('oo: ', x.next())
console.log('a: ', x.next().value)
console.log('b: ', x.next().value)
console.log('c: ', x.next().value)
console.log('d: ', x.next().value)
console.log('e: ', x.next().value)