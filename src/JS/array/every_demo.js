//定义： every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。

//用法： 
// every() 方法使用指定函数检测数组中的所有元素：
// 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
// 如果所有元素都满足条件，则返回 true。

// 注意： every() 不会对空数组进行检测。

// 注意： every() 不会改变原始数组。

//语法： array.every(function(currentValue,index,arr), thisValue)

//入参： 
// 参数	描述
// function(currentValue, index,arr)	必须。函数，数组中的每个元素都会执行这个函数
                                        // 函数参数:
                                        // 参数	描述
                                        // currentValue	必须。当前元素的值
                                        // index	可选。当前元素的索引值
                                        // arr	可选。当前元素属于的数组对象
// thisValue	                        可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。
                                        // 如果省略了 thisValue ，"this" 的值为 "undefined"


// 返回：布尔值。如果所有元素都通过检测返回 true，否则返回 false。

// 版本：1.6

var ages = [32, 33, 16, 40];
function checkAdult(age) {
    return age >= 18;
}
function myFunction() {
    document.getElementById("demo").innerHTML = ages.every(checkAdult);
}


const arr = [22, 33, 44, 55]

const checkAdult = age => age >= 18

const 