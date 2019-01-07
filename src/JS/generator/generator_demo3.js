var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

 // [1, 2, 3]
console.log('--> ', [...myIterable])