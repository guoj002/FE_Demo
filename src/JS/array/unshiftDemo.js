// 定义和用法
// unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。

// 语法 
// arrayObject.unshift(newelement1,newelement2,....,newelementX)

// 参数
// newelement1	必需。向数组添加的第一个元素。
// newelement2	可选。向数组添加的第二个元素。
// newelementX	可选。可添加若干个元素。

// 返回值
// arrayObject 的新长度。

// 说明
// unshift() 方法将把它的参数插入 arrayObject 的头部，并将已经存在的元素顺次地移到较高的下标处，以便留出空间。
// 该方法的第一个参数将成为数组的新元素 0，如果还有第二个参数，它将成为新的元素 1，以此类推。

// 请注意，unshift() 方法不创建新的创建，而是直接修改原有的数组。

let arr = new Array();
arr[0] = '0';
arr[1] = '1';
arr[2] = '2';
arr[3] = '3';
console.log(arr);
arr.unshift('4','5','6','7');
console.log(arr)