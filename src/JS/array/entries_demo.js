//定义： entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)。

//用法： 迭代对象中数组的索引值作为 key， 数组元素作为 value。

// [0, "Banana"]
// [1, "Orange"]
// [2, "Apple"]
// [3, "Mango"]



//语法： array1.concat(array2,array3,...,arrayX)

//入参： 必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。

//返回：返回一个新的数组。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。

//版本：1.2

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.entries();

console.log('o: ', x)
console.log('oo: ', x.next())
console.log('a: ', x.next().value)
console.log('b: ', x.next().value)
console.log('c: ', x.next().value)
console.log('d: ', x.next().value)
console.log('e: ', x.next().value)