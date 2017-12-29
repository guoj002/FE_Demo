let arrNum = [1,2,3,4,5,6]
let arrColor = ['red', 'blue', 'yellow', 'green']
let arrLetter = ['A', 'B', 'c', 'D']

//删除
arrNum.splice(2,1)
//插入
arrColor.splice(2,0,'white','black')
//替换
arrLetter.splice(2,1,'C')

console.log(arrNum)
console.log(arrColor)
console.log(arrLetter)
// groupIds.splice(groupIds.indexOf(value), 1)