// fib = max => {
//     var a = 0, b = 1, arr = [0, 1]
//     while(arr.length < max){
//         [a, b] = [b, a + b]
//         arr.push(b)
//     }
//     return arr
// }

// function* fib_generator(max) {
//     var a = 0, b = 1, n = 0
//     while(n < max){
//         yield a
//         [a, b] = [b, a + b]
//         n++
//     }
//     return
// }

// console.log(fib(5))

// console.log(fib_generator(10))


function* fibonacci() {
  let [prev, curr] = [0, 1];
  for (;;) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

for (let n of fibonacci()) {
  if (n > 1000) break;
  console.log(n);
}
