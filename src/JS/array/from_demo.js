console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]


//实现方法六：
const arr6 = Array.from({length:100},(v,i) => i);
// console.log(arr6);

//实现方法七：
const arr7 = Array.from(Array(100),(v,i) => i);
// console.log(arr7);

//实现方法八：
const arr8 = Array.from(Array(100).keys());
// console.log(arr8);

const f = () => Array.from(arguments)

f(1,2,3)

// [1,2,3]

const o = {
    name: 'gj'
}
const age = 12
o[age] = 13
console.log(o)