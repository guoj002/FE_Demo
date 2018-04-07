// 使用 Mock
const Mock = require('mockjs')

const obj = {
    "paramsArr": [
        {
            "key": "1",
            "level": 1,
            "hasChildren": false,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "age",
            "paramType": "1",
            "notes": "0异常，1正常",
            "isHide": false,
            "paramNameHtml": "age"
        }, {
            "key": "2",
            "level": 1,
            "hasChildren": false,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "name",
            "paramType": "2",
            "notes": "错误信息描述",
            "isHide": false,
            "paramNameHtml": "name"
        }, {
            "key": "3",
            "level": 1,
            "hasChildren": true,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "resultMessage",
            "paramType": "3",
            "notes": "",
            "isHide": false,
            "paramNameHtml": "resultMessage"
        }, {
            "key": "4",
            "level": 2,
            "hasChildren": false,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "countPerPage",
            "paramType": "1",
            "notes": "每页记录数",
            "isHide": false,
            "paramNameHtml": "countPerPage"
        }, {
            "key": "5",
            "level": 2,
            "hasChildren": false,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "pageIndex",
            "paramType": "1",
            "notes": "当前页码",
            "isHide": false,
            "paramNameHtml": "pageIndex"
        }, {
            "key": "6",
            "level": 2,
            "hasChildren": false,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "pageCount",
            "paramType": "1",
            "notes": "总页数",
            "isHide": false,
            "paramNameHtml": "pageCount"
        }, {
            "key": "7",
            "level": 2,
            "hasChildren": false,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "totalCount",
            "paramType": "1",
            "notes": "总记录数",
            "isHide": false,
            "paramNameHtml": "totalCount"
        }, {
            "key": "8",
            "level": 2,
            "hasChildren": true,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "resultList",
            "paramType": "5",
            "notes": "",
            "isHide": false,
            "paramNameHtml": "resultList"
        }, {
            "key": "9",
            "level": 3,
            "hasChildren": false,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "userId",
            "paramType": "1",
            "notes": "推荐对象id",
            "isHide": false,
            "paramNameHtml": "userId"
        }, {
            "key": "10",
            "level": 3,
            "hasChildren": false,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "userIdentity",
            "paramType": "1",
            "notes": "1学员，2老师",
            "isHide": false,
            "paramNameHtml": "userIdentity"
        }, {
            "key": "11",
            "level": 3,
            "hasChildren": false,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "position",
            "paramType": "1",
            "notes": "推荐位置",
            "isHide": false,
            "paramNameHtml": "position"
        }, {
            "key": "12",
            "level": 3,
            "hasChildren": false,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "creater",
            "paramType": "2",
            "notes": "创建人",
            "isHide": false,
            "paramNameHtml": "creater"
        }, {
            "key": "13",
            "level": 3,
            "hasChildren": false,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "createTime",
            "paramType": "2",
            "notes": "创建时间",
            "isHide": false,
            "paramNameHtml": "createTime"
        }, {
            "key": "14",
            "level": 3,
            "hasChildren": false,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "operator",
            "paramType": "2",
            "notes": "操作人",
            "isHide": false,
            "paramNameHtml": "operator"
        }, {
            "key": "15",
            "level": 3,
            "hasChildren": false,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "operateTime",
            "paramType": "2",
            "notes": "操作时间",
            "isHide": false,
            "paramNameHtml": "operateTime"
        }, {
            "key": "16",
            "level": 3,
            "hasChildren": false,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "status",
            "paramType": "1",
            "notes": "vip推荐1展示中，2展示结束；非付费用户推荐1展示中，2是未推荐",
            "isHide": false,
            "paramNameHtml": "status"
        }, {
            "key": "17",
            "level": 3,
            "hasChildren": false,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "id",
            "paramType": "1",
            "notes": "该条记录Id",
            "isHide": false,
            "paramNameHtml": "id"
        }, {
            "key": "18",
            "level": 3,
            "hasChildren": false,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "state",
            "paramType": "4",
            "notes": "该条记录状态",
            "isHide": false,
            "paramNameHtml": "state"
        }, {
            "key": "19",
            "level": 3,
            "hasChildren": false,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "obj",
            "paramType": "3",
            "notes": "该条记录对象",
            "isHide": false,
            "paramNameHtml": "obj"
        }, {
            "key": "20",
            "level": 3,
            "hasChildren": false,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "arr",
            "paramType": "6",
            "notes": "该条记录数组",
            "isHide": false,
            "paramNameHtml": "arr"
        }
    ]
}
const TYPE = ['0-','1-number','2-string','3-object','4-boolean','5-array<object>','6-array<number>','7-array<string>']
const mockData = {}
for (let i = 0 ; i < obj.paramsArr.length ; i += 1) {
    console.log(i ,': level ==>', obj.paramsArr[i].level, ' hasChildren==>', obj.paramsArr[i].hasChildren, ' paramType==>', TYPE[obj.paramsArr[i].paramType-0])
    // console.log(i ,': ')
    // if(obj.paramsArr[i].level === 1){
        // console.log(i ,': ', obj.paramsArr[i].level)
        // if(!obj.paramsArr[i].hasChildren){
            
            if(obj.paramsArr[i].paramType == 1){
                mockData[`${obj.paramsArr[i].paramName}|1-3`] = 1
            }else if(obj.paramsArr[i].paramType == 2){
                mockData[`${obj.paramsArr[i].paramName}|1-3`] = 'string'
            }else if(obj.paramsArr[i].paramType == 3){
                mockData[`${obj.paramsArr[i].paramName}|0`] = text()
                console.log('this: ', this)
            }else if(obj.paramsArr[i].paramType == 4){
                mockData[`${obj.paramsArr[i].paramName}|1`] = false
            }else if(obj.paramsArr[i].paramType == 5){
                mockData[`${obj.paramsArr[i].paramName}|0`] = []
            }else if(obj.paramsArr[i].paramType == 6){
                mockData[`${obj.paramsArr[i].paramName}|0`] = []
            }else if(obj.paramsArr[i].paramType == 7){
                mockData[`${obj.paramsArr[i].paramName}|0`] = []
            }
        // }
    // }
}

add = (n,type) => { // n 当前位置   type 类型  
    return 
}

text = () => {
    return {
            'name' :'@name',
            // 颜色
            'color': '@color',
        }
}

// mockData['list|1-10'] = []
// mockData['list|1-10'][0] = {}
// mockData['list|1-10'][0]['id|+1'] = 1

const data = Mock.mock(mockData)
// 输出结果
console.log(JSON.stringify(data, null, 4))