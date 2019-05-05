console.log('>>>>>>>> c module')

import { a } from './a.mjs'

// console.log('a: ', a)

let c = false

export { c }

c = true

console.log('<<<<<<<< c module end')