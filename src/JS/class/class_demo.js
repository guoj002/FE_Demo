const MyClass = class Me {
	getClassName() {
		return Me.name;
	}
}

let inst = new MyClass();
console.log(inst.getClassName());

console.log('inst-name: ', inst.name)
// console.log('me-name: ', Me.name)
console.log('myclass-name: ', MyClass.name)