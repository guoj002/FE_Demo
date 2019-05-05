console.log('this is b module')

import { a } from './a.js'

console.log('a: ', a)

let b = 5

export {
    b,
}

b = 6

console.log('b module end')
