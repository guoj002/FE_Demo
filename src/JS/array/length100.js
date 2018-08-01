//实现方法一： 循环赋值
let arr1 = new Array(100);
for(let i=0; i<arr1.length; i++){
	arr1[i] = i;
}
// console.log(arr1);

//实现方法二： push方法实现
const arr2 = new Array();
for(let i=0; i<100; i++){
	arr2.push(i);
}
// console.log(arr2);

//实现方法三： while方法实现
const arr3 = new Array();
let i = 0;
while(i < 100){
	arr3.push(i);
	i++;
}
// console.log(arr3);

//实现方法四： do while方法实现
const arr4 = new Array();
i = 0;
do{
	arr4.push(i);
	i++;
}while(i < 100)
// console.log(arr4);

//实现方法五：
// const arr5 = Object.keys(Array.apply(null, { length:100 })).map(function(item){ return +item; });
const arr5 = Array.apply(null, { length:100 }).map((v, i) => i);
// console.log(arr5);

//实现方法六：
const arr6 = Array.from({length:100},(v,i) => i);
// console.log(arr6);

//实现方法七：
const arr7 = Array.from(Array(100),(v,i) => i);
// console.log(arr7);

//实现方法八：
const arr8 = Array.from(Array(100).keys());
// console.log(arr8);

//实现方法十三：
const arr13 = Array(100).fill(1).map((v, i) => i);
// console.log(arr13);

//实现方法九：
// const arr9 = new Array(100).toString().split(',').map((v, i) => i);
const arr9 = Array(100).toString().split(',').map((v, i) => i);
// console.log(arr9);

//实现方法十二：
const arr12 = new Array(101).join(' ').split(' ').map((v, i) => i);
arr12.length = arr12.length -1;
// console.log(arr12);

//实现方法十:
const arr10 = [];
i = 0;
MakeArray = num => {
	if(i<num){
		arr10[i] = i++;
		MakeArray(num);
	}
	return arr10;
};
// console.log(MakeArray(100));

//实现方法十一：
const arr11 = [];
i =0;
const timer = setInterval(function(){
	arr11[i] = i++;
	if(i >= 100){
		clearInterval(timer);
		// console.log(arr11);
	}
},0);

//Generator
const arr14 = Array.from(angry(0));
function* angry(i) {
  yield {number: i};
  if (i < 10) { yield* angry(i + 1); }
};
// console.log(arr14);


// 递归
const arr15 = (function wallace (i) { return (i < 0) ? [] : wallace(i - 1).concat({number: i}); })(10);
// console.log(arr15);

//尾递归
const arr16 = (function mistake (i, acc) { return (i < 10) ? mistake(i + 1, acc.concat({number: i})) : acc; })(0, []);
console.log(arr16);


// console.log(new Date().getTime());

// console.log(new Date().getTime());




