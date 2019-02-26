//定义： concat() 方法用于连接两个或多个数组。

//用法： 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。

//语法： array1.concat(array2,array3,...,arrayX)

//入参： 必需。该参数可以是具体的值，也可以是数组对象。可以是任意多个。

//返回：返回一个新的数组。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。

//版本：1.2

const hege = ["a", "b"];
const stale = ["c", "d", "e"];
const children = hege.concat(stale);
console.log('children: ', children)

const children2 = [1, 2, 3].concat(hege, stale)
console.log('children2: ', children2)

const children3 = [1, 2, 3].concat(4, 5, 6)
console.log('children3: ', children3)

const children4 = [1, 2, 3].concat(4, [5, 5, 5], 6)
console.log('children4: ', children4)

const children5 = [1, 2, 3].concat(4, [5, [5.1, 5.2, 5.3], 5], 6)
console.log('children5: ', children5)