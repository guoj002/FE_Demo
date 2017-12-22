// Immediately Invoked Function Expression

// function(){console.log('a')}	//VM124111:1 Uncaught SyntaxError: Unexpected token (
console.log('=================================================')

const foo = function(){console.log('b')}	//undefined

console.log('=================================================')

const foo1 = function(){console.log('c')}()	//I

console.log('=================================================')

// function foo2(){console.log('d')}()	//Uncaught SyntaxError: Unexpected token )

console.log('=================================================')

function foo3(){console.log('e')}(1)	//1

console.log('=================================================')

// (function(){console.log('f')}())


// (function(){console.log('f')}())	//nodejs中会报错，TypeError: console.log(...) is not a function

console.log('=================================================')

// (function foo(){console.log('g')}());	//报错同上

console.log('=================================================')

// (function(){console.log('h')})()	//报错同上

console.log('=================================================')