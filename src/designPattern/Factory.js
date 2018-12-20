function createPerson (name, age) {
	const person = new Object();
	person.name = name;
	person.age = age;
	person.say = function () {
		console.log(this.name, this.age);
	}
	return person;
}


class createPerson {
	constructor (val) {
		this.current = val
    	console.log('singleton: ', this.current)
	}
}


const person1 = createPerson('小明', 10);
console.log(person1);
console.log(person1 instanceof Object)
console.log(person1 instanceof Function)
console.log(typeof person1)
person1.say();
const person2 = createPerson('小强', 15);
console.log(person2);
person2.say();
