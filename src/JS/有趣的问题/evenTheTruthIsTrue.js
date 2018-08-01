// (a ==1 && a== 2 && a==3) 为true 代码实现

// https://stackoverflow.com/questions/48270127/can-a-1-a-2-a-3-ever-evaluate-to-true



// 自定义 toString（或者 valueOf）方法，每次调用改变一次返回值，从而满足判断条件。
const a = {  
  i: 1,  
  toString: function () {  
    return a.i++;  
  }  
}  
  
if(a == 1 && a == 2 && a == 3) {  
  console.log('Hello World!');  
}  


// 当使用 == 时，如果两个参数的类型不一样，那么 JS 会尝试将其中一个的类型转换为和另一个相同。
// 在这里左边对象，右边数字的情况下，会首先尝试调用 valueOf（如果可以调用的话）来将对象转换为数字，
// 如果失败，再调用 toString。
// 
// 
// 一个很黑科技但更有趣的解法是：(此解法需要注意if里面的格式)
var bﾠ = 1;  
var b = 2;  
var b = 3;  
if(bﾠ==1 && b== 2 &&ﾠb==3) {  
    console.log("Why hello there!")  
}  