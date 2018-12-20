// 装饰器经典实现
const Person = function(name) {
    this.name = name;
};

Person.prototype.speak = function() {
    console.log('你好!');
};

const SpeakEnglish = function(person) {
    this.person = person;       
};

SpeakEnglish.prototype.speak = function() {
    this.person.speak();
    console.log('hello!');
};

const SpeakJapanese = function(person) {
    this.person = person;       
};

SpeakJapanese.prototype.speak = function() {
    this.person.speak();
    console.log('こんにちは!');
};

const lufy = new Person('lufy');
const engLufy = new SpeakEnglish(lufy);
const japanLufy = new SpeakJapanese(engLufy);
japanLufy.speak();