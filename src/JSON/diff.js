const dict1 = {
    "name":"runoob",
    "alexa":10000,
    "sites": {
        "site1":"www.runoob.com",
        "site2":"m.runoob.com",
        "site3":"c.runoob.com"
    },
    "arr": [
        { "name":"Google", "info":[ "Android", "Google 搜索", "Google 翻译" ] },
        { "name":"Runoob", "info":[ "菜鸟教程", "菜鸟工具", "菜鸟微信" ] },
        { "name":"Taobao", "info":[ "淘宝", "网购" ] }
    ]
}
const dict2 = {"id": "50356270565167104", "name": "班级优化2"}

for (x in dict1) {
    console.log(x ,': ', dict1[x])
}

const propArr = Object.getOwnPropertyNames(dict1)
console.log(propArr)