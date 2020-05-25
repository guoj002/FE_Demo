const arr = [8,4,3,2,2,2,1]

let indexArr = []

let total = 0

const limit = 7

const demo = limit => arr.some((n, index) => {
    if ((total + n) <= limit) {
        total = total + n
        indexArr.push(index)
        if (total === limit) {
            return true
        }
    }
    // console.log('index: ', index)
    return false
})

demo(limit)

console.log('--> ', limit, indexArr)
