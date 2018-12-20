@testable
class MyTestableClass {
	// ...
}

testable = target => {
	target.isTestable = true
}

console.log(MyTestableClass.isTestable)