// 定义主函数，回调函数作为参数
A = (callback) => {
    console.log('我是主函数'); 
    callback();     
}

//定义回调函数
B = _ => {
	console.log('this is B');
    // setTimeout("console.log('我是回调函数')", 3000);//模仿耗时操作  
}

//调用主函数，将函数B传进去
A(B);
// B()

//=====================================================

// say = value => {
//     console.log(value);
// }

// console.log(say);
// say('hello world!')
// console.log(say('hello world!'));

//=====================================================

// say = (value) => {
//     console.log(value);
// }
// execute = (someFunction, value) => {
//     someFunction(value);
// }
// execute(say, 'hi js.');

//=====================================================

// execute = (someFunction, value) => {
//     someFunction(value);
// }
// execute((value) =>{console.log(value);}, 'hi js.');

//=====================================================

