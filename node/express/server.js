const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// 使用 Mock
const Mock = require('mockjs')
const Random = Mock.Random;

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

const obj = {'aa':'11', 'bb':'22', 'cc':'33', 'dd':'44'};

const data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }],
    'tableData|10': [{
        date: ()=>Random.date(),
        name: ()=>Random.cname(),
        address: ()=>Random.county(true)
    }],
    'name' : '@name',
    'age|1-100': 100,
    'color': '@color',
    'list2|4': [{
            'id|+1': 1,
            'number|1-10': 7,
            // 英文姓名
            'name' :'@name',
            // 颜色
            'color': '@color',
            // 英文标题
            'title': '@title',
            // 链接
            'url': '@url("http")',
            // 邮箱
            'email': '@email',
            // 图片
            'image': Random.image('200x200', '#50B347', '#FFF', 'Mock.js'),
            // 时间
            'date': '@date("yyyy-MM-dd HH:mm:ss")',
            'date2': '@dateTime',
            // 汉字
            'ctitle': '@ctitle(8)',
            // 汉字姓名
            'canme': '@cname()',
            // 地址
            'cadd': '@province' + '@city' + '@county',
            // 手机号
            'phone': /^1[385][1-9]\d{8}/
    }],
    "user|1-3": [{   // 随机生成1到3个数组元素
            'name': '@cname',  // 中文名称
            'id|+1': 88,    // 属性值自动加 1，初始值为88
            'age|18-28': 0,   // 18至28以内随机整数, 0只是用来确定类型
            'birthday': '@date("yyyy-MM-dd")',  // 日期
            'city': '@city(true)',   // 中国城市
            'color': '@color',  // 16进制颜色
            'isMale|1': true,  // 布尔值
            'isFat|1-2': true,  // true的概率是1/3
            'fromObj|2': obj,  // 从obj对象中随机获取2个属性
            'fromObj2|1-3': obj,  // 从obj对象中随机获取1至3个属性
            'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
            'sister|+1': ['jack', 'jim', 'lily'], // array中顺序选取元素作为结果
            'friends|2': ['jack', 'jim'] // 重复2次属性值生成一个新数组
        },{
            'gf': '@cname'
    }]
})

app.post('/process_post', urlencodedParser, function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    // 输出 JSON 格式
    res.end(JSON.stringify(data, null, 4));
})

const server = app.listen(8081, function () {
    const host = server.address().address
    const port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})