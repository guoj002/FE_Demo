console.log('>>>>>>>> a module')

import { b } from './b.mjs'

console.log('b: ', b)

let a = false

export { a }

a = true

console.log('<<<<<<<< a module end')