//定义： copyWithin() 方法

//用法： 用于从数组的指定位置拷贝元素到数组的另一个指定位置中。

//语法： array.copyWithin(target, start, end)

//入参： 
// 参数      描述
// target   必需。复制到指定目标索引位置。
// start    可选。元素复制的起始位置。
// end      可选。停止复制的索引位置 (默认为 array.length)。如果为负值，表示倒数。 (开区间)

// 返回：返回改变后的现有数组。

// 版本：ES6

const arr = ['a', 'b', 'c', 'd', 'e', 'f']
console.log('arr: ', arr)

// const arr1 = arr.copyWithin(2)
// console.log('arr: ', arr)
// console.log('arr1: ', arr1)

// const arr2 = arr.copyWithin(2, 0)
// console.log('arr2: ', arr2)

// const arr3 = arr.copyWithin(2, 1)
// console.log('arr3: ', arr3)

const arr4 = arr.copyWithin(2, 1, 3)
console.log('arr4: ', arr4)

