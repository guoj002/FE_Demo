console.log('>>>>>>>> b module')

import { c } from './c.mjs'

console.log('c: ', c)

let b = false

export { b }

b = true

console.log('<<<<<<<< b module end')