var Foo=(function () {
    var instance = null
    return function () {
        if (instance == null) {
            return instance = new Bar()
        }
        return instance
    }
})()

var Bar = function (){}
var o1 = new Foo()
var o2 = new Foo()
alert(o1===02)
alert(ol instanceof Foo)
alert(o2 instanceof Bar)