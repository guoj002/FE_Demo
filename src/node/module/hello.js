// exports.world = function(){
	// console.log('hello world')
// }

//hello.js 
function Hello() { 
    let name; 
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('Hello ' + name); 
    }; 
}; 
module.exports = Hello;