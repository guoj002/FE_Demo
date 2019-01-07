function* demo() {
  // console.log('Hello' + yield); // SyntaxError
  // console.log('Hello' + yield 123); // SyntaxError

  console.log('Hello1' + (yield)); // OK
  console.log('Hello2' + (yield 123)); // OK
}

const d = demo()

console.log('--> ', d.next())
console.log('--> ', d.next())
// console.log('--> ', d.next())
// console.log('--> ', d.next())