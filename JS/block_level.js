// function f(){ console.log('1')}

// (
// 	function(){
// 		if(false){
// 			function f(){ console.log('2'); }
// 		}
// 		f();
// 	}()

// )


// let x = do {
// 	console.log('a')
// }

// const a = []
// a.length = 2

// window.a =1
// console.log(a)

// a= 2
// console.log(window.a)

// global.a =1
// console.log(a)

// a= 2
// console.log(global.a)

let [a,b,c] = [1,2,3]
console.log(a)
console.log(b)
console.log(c)

let [state,file] = [{},{}]
state.a = 'a'
state.b = 'b'
console.log(state)
console.log(file)

let [foo] = []
let [bar, ttt] = [1]
console.log(foo)
console.log(bar)
console.log(ttt)





