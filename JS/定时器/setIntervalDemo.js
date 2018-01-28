let num = 0;
const i = setInterval(function() {
    num++;
    var date = new Date();
    console.log(date.getMinutes() + ':' + date.getSeconds() + ':' + date.getMilliseconds() + '<br>');
    if (num > 10)
        clearInterval(i);
}, 1000);