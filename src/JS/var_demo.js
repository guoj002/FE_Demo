var foo = function () {
    var a = 1, b = 2;
    var bar = function () {
        var b = 3, c = 4;
        a += b + c;
        console.log('a1: ', a)
    };
    console.log('a2: ', a)
    bar();
    console.log('a3: ', a)
}

foo()

// a2:  1
// a1:  8
// a3:  8