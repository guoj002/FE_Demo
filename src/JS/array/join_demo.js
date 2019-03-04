let str = ''

const arr1 = []
str = arr1.join(',')
console.log('str: ', str) // ''

const arr2 = [1]
str = arr2.join(',')
console.log('str: ', str) // '1'

const arr3 = [1, 2]
str = arr3.join(',')
console.log('str: ', str) // '1,2'