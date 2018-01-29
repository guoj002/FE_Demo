// javascript对象添加、删除、修改对象的属性

function Person(){};
const person = new Person();
person.name = 'name';
person.age = 26;
person['sex'] = 'girl';
console.log(person);
delete person.name;
console.log(person);
