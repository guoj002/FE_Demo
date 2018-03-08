    
const typeInfo = {
    legionId: {
        url: URLS.GET_LEGION_LIST_STATISTICS,
        nextAction: "saleIds",
        id: "legionId",
        list: "legionList",
    },
    saleIds: {
        url: URLS.GET_SALE_LIST_STATISTICS,
        nextAction: "groupIds",
        id: "saleId",
        list: "saleList",
    },
    groupIds: {
        url: URLS.GET_GROUP_LIST_STATISTICS,
        nextAction: "consultants",
        id: "groupId",
        list: "groupList",
    },
    consultants: {
        url: URLS.GET_CONSULTANT_LIST_STATISTICS,
        nextAction: null,
        id: "id",
        list: "consultantList",
    }
}


    //获取军团列表数据
    fetchLegionList = _ => {
        const { form: { setFieldsValue } } = this.props
        getJSON(URLS.GET_LEGION_LIST_STATISTICS)
        .then(data => {
            //当返回数据只包含一个是默认选中
            if(data.length == 1){
                setFieldsValue({ legionId: data[0].legionId })
                this.fetchDepartmentList([data[0].legionId])
            }
            this.setState({legionList: data})
        })
        .catch(e => alert(e))
    }
    //获取销售部列表数据
    fetchDepartmentList = legionList => {
        const { form: { setFieldsValue } } = this.props
        this.setState({saleList: [], groupList: [], consultantList: []}, ()=> {
                getJSON(URLS.GET_SALE_LIST_STATISTICS, JSON.stringify({legionList}))
                    .then(data => {
                        //当返回数据只包含一个是默认选中
                        if(data.length == 1){
                            this.fetchGroupList([data[0].saleId])
                            setFieldsValue({ saleIds: data[0].saleId })
                        }else{
                            setFieldsValue({ saleIds: [], groupIds: [], consultants: [] })
                        }
                        this.setState({ saleList: data })
                    })
                    .catch(e => alert(e))
            }
        )
    }
    //获取销售组列表数据
    fetchGroupList = saleList => {
        const { form: { setFieldsValue } } = this.props
        //当所选销售部为空时，清空销售组，咨询师下拉框列表
        if(saleList.length == 0){
            console.log('清空时进来！')
            this.setState({ groupList: [], consultantList: [] })
            setFieldsValue({ groupIds: [], consultants: [] })
            return
        }
        //选择至少一个销售部时查询销售部下对应销售组
        this.setState({groupList: [], consultantList: []}, ()=> {
            getJSON(URLS.GET_GROUP_LIST_STATISTICS, JSON.stringify({ saleList }))
                .then(data => {
                    //当返回数据只包含一个是默认选中
                    if(data.length == 1){
                        this.fetchGroupUserList([data[0].groupId])
                        setFieldsValue({ groupIds: data[0].groupId })
                    }else{
                        setFieldsValue({ groupIds: [], consultants: [] })
                    }
                    this.setState({ groupList: data })
                })
                .catch(e => alert(e))
            }
        )
    }
    //获取咨询师列表数据
    fetchGroupUserList = groupList => {
        const { form: { setFieldsValue } } = this.props
        //当所选销售组为空时，清空咨询师下拉框列表
        if(groupList.length == 0){
            this.setState({consultantList: []})
            setFieldsValue({ consultants: [] })
            return
        }
        //选择至少一个销售组时查询销售部下对应咨询师
        this.setState({consultantList: []}, ()=> {
            getJSON(URLS.GET_CONSULTANT_LIST_STATISTICS, JSON.stringify({ groupList }))
                .then(data => {
                    //格式化返回数据
                    const consultantList = data.map(item => {
                        const consultant = {}
                        consultant.id = item
                        consultant.value = item
                        return consultant
                    })
                    // if(consultantList.length == 1){
                        // setFieldsValue({ consultants: consultantList[0].id })
                    // } else {
                        // setFieldsValue({ consultants: [] })
                    // }
                    // consultantList.length == 1 ? setFieldsValue({ consultants: consultantList[0].id }) : setFieldsValue({ consultants: [] })
                    // setFieldsValue({ consultants: consultantList.length == 1 ? consultantList[0].id : [] })
                    this.setState({consultantList})
                })
                .catch(e => alert(e))
            }
        )
    }



    onChange = (type, list) => {
        console.log('type: ', type, 'list: ', list)
        // todo clear
        const { form: { setFieldsValue } } = this.props
        const typeList = Object.keys(typeInfo)
        console.log('typeList', typeList)
        let typeIndex = typeList.indexOf(type)
        console.log('type', type)
        console.log('typeIndex', typeIndex)
        let tmpObj = {}
        for(let i = typeIndex + 1; i <= 3; i++ ){
            tmpObj[typeInfo[typeList[i]].list] = []
            setFieldsValue({ type: [] });
        }
        console.log('tmpObj', tmpObj)
        this.setState( tmpObj, _ => {
            if(list instanceof Array && list.length !== 0){
                console.log('发送请求') 
                let nextAction = typeInfo[type].nextAction
                nextAction && this.fetchList(nextAction, list)
            }
        })
        // switch(type){
        //     case 'legionId':
        //         this.setState({saleList: [], groupList: [], consultantList: []});
        //         setFieldsValue({ 'saleIds': [], 'groupIds': [], 'consultants': [] });
        //         console.log('清空一大堆')
        //         break;
        //     case 'saleIds':
        //         this.setState({groupList: [], consultantList: []});
        //         setFieldsValue({'groupIds': [], 'consultants': [] });
        //         console.log('清空销售部')
        //         break;
        //     case 'groupIds':
        //         this.setState({consultantList: []});
        //         setFieldsValue({'consultants': [] });
        //         console.log('清空销售组')
        //         break;
        //     case 'consultants':
        //         // this.setState({consultantList: []});
        //         // setFieldsValue({ 'consultants': [] });
        //         // console.log('清空咨询师')
        //         break;
        // }
        // if(list instanceof Array && list.length !== 0){
        //     console.log('发送请求') 
        //     typeInfo[type].nextAction && this.fetchList(typeInfo[type].nextAction, list)
        // }
    }

    fetchList = (type, list) => {
        const { form: { setFieldsValue } } = this.props
        getJSON(typeInfo[type].url, list)
            .then(data => {
                console.log('typeInfo[type].url: ', typeInfo[type].url)
                console.log('list: ', list)
                console.log('data: ', data)
                
                //格式化返回数据
                if(type == 'consultants'){
                    const consultantList = data.map(item => ({ id: item, value: item }))
                    this.setState({consultantList})
                    data = consultantList
                }
                this.setState({[typeInfo[type].list]: data})
                // if(data.length == 1){
                //    setFieldsValue({ [type]: data[0][typeInfo[type].id] }) 
                // }
                // switch(type){
                //     case 'legionId':
                //         this.setState({[typeInfo[type].list]: data})
                //         // if(data.length == 1){
                //         //     setFieldsValue({ 'legionId': data[0].legionId })
                //         //     this.fetchList('saleIds', [data[0].legionId])
                //         // }
                //         break;
                //     case 'saleIds':
                //         this.setState({saleList: data})
                //         // if(data.length == 1){
                //         //     setFieldsValue({ 'saleIds': data[0].saleId })
                //         //     this.fetchList('groupIds', [data[0].saleId])
                //         // }
                //         break;
                //     case 'groupIds':
                //         this.setState({groupList: data})
                //         // if(data.length == 1){
                //         //     setFieldsValue({ 'groupIds': data[0].groupId })
                //         //     this.fetchList('consultants', [data[0].groupId])
                //         // }
                //         break;
                //     case 'consultants':
                //     //格式化返回数据
                //         const consultantList = data.map(item => ({ id: item, value: item }))
                //         this.setState({consultantList})
                //         // if(data.length == 1){setFieldsValue({ 'consultants': consultantList[0].id })}
                //         break;
                // }
            })
            .catch(e => alert(e))
            // return
    }
    //全选操作
    normalizeAll = (value = [], preValue = [], dataType, dataList) => {
        if(value.indexOf('all') != -1) {
            //全选或者取消全选
            value = preValue.length == dataList.length ? [] : dataList.map(item => item[typeInfo[dataType].id])
        }
        if(preValue && preValue.length < value.length && value.length != 1) {
            value.unshift(value.pop())
        }
        return value
    }








     onChange = (type, list) => {
        console.log('type: ', type, 'list: ', list)
        // todo clear
        const { form: { setFieldsValue } } = this.props
        const typeList = Object.keys(typeInfo)

        console.log('typeList', typeList)

        let typeIndex = typeList.indexOf(type)

        console.log('type', type)
        console.log('typeIndex', typeIndex)

        let tmpObj = {}
        for(let i = typeIndex + 1; i <= 3; i++ ){
            tmpObj[typeInfo[typeList[i]].list] = []
            setFieldsValue({ type: [] });
        }
        console.log('tmpObj', tmpObj)
        this.setState( tmpObj, _ => {
            if(list instanceof Array && list.length !== 0){
                console.log('发送请求') 
                typeInfo[type].nextAction && this.fetchList(typeInfo[type].nextAction, list)
            }
        })
    }
    //请求函数
    fetchList = (type, list) => {
        const { form: { setFieldsValue } } = this.props
        getJSON(typeInfo[type].url, list)
            .then(data => {
                console.log('typeInfo[type].url: ', typeInfo[type].url)
                console.log('list: ', list)
                console.log('data: ', data)
                
                //格式化返回数据
                if(type == 'consultants'){
                    const consultantList = data.map(item => ({ id: item, value: item }))
                    this.setState({consultantList})
                    data = consultantList
                }
                this.setState({[typeInfo[type].list]: data})
                // if(data.length == 1){
                //    setFieldsValue({ [type]: data[0][typeInfo[type].id] }) 
                // }
            })
            .catch(e => alert(e))
    }