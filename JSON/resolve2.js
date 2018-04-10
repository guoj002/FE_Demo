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
        }, {
            "key": "21",
            "level": 2,
            "hasChildren": false,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "aaa",
            "paramType": "1",
            "notes": "该条记录数组",
            "isHide": false,
            "paramNameHtml": "arr"
        }, {
            "key": "22",
            "level": 1,
            "hasChildren": false,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "bbb",
            "paramType": "1",
            "notes": "该条记录数组",
            "isHide": false,
            "paramNameHtml": "arr"
        }, {
            "key": "23",
            "level": 1,
            "hasChildren": true,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "ccc",
            "paramType": "3",
            "notes": "该条记录数组",
            "isHide": false,
            "paramNameHtml": "arr"
        }, {
            "key": "24",
            "level": 2,
            "hasChildren": false,
            "isUnfolded": true,
            "isRequired": false,
            "paramName": "ddd",
            "paramType": "1",
            "notes": "该条记录数组",
            "isHide": false,
            "paramNameHtml": "arr"
        }
    ]
}

let index = 0

getNameOrValue = (paramType, paramName, notes, state) => {
    let name = ''
    let value = 0
    name = paramName + '|1'
    return state === 0 ? name : value
}

// 转换函数
serializeJsonToMock = (preType, preLevel) => {
    let o = {}
    while(index < obj.paramsArr.length && obj.paramsArr[index].level > preLevel){
        const { level, hasChildren, paramName, paramType, notes } = obj.paramsArr[index]
        if(hasChildren){
            o[getNameOrValue(paramType, paramName, notes, 0)] = serializeJsonToMock(paramType, obj.paramsArr[index++].level)
        } else {
            o[getNameOrValue(paramType, paramName, notes, 0)] = getNameOrValue(paramType, paramName, notes, 1)
            index++
        }
    }
    if(preType === 5 || preType === '5'){
        const oo = []
        oo[0] = o
        return oo
    }
    return o
}

const mockData = serializeJsonToMock(0, 0)

console.log(JSON.stringify(mockData, null, 4))

const data = Mock.mock(mockData)
// 输出结果
console.log(JSON.stringify(data, null, 4))
