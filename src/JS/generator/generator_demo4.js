function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

const f = foo()
console.log('--> ', f.next())
console.log('--> ', f.next())
console.log('--> ', f.next())
console.log('--> ', f.next())
console.log('--> ', f.next())
console.log('--> ', f.next())
console.log('--> ', f.next())
// for (let v of foo()) {
//   console.log(v);
// }
// 1 2 3 4 5