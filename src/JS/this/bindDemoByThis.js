this.x = 44

const obj = {
    x: 4,
    getX: function () {
        return this.x
    }
}

const retrieveX = obj.getX

console.log('retrieveX(): ', retrieveX()) // node: undefined  bom: 44

console.log('obj.getX(): ', obj.getX())

const boundGetX = retrieveX.bind(obj)
console.log('boundGetX(): ', boundGetX())