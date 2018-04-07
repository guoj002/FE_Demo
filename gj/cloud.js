import React from 'react'
import moment from 'moment'
import { Form, DatePicker, TimePicker, Select, Input, Row, Col } from 'antd'

import style from './modals.less'
import util from '../../../common/util'
import Constants from '../../../constants/workBench'
import Modal from '../../common/modal/Modal'

const FormItem = Form.Item
const { Option } = Select
const { TextArea } = Input

const PRICE_NUM = new RegExp(/^\d*$/) // 价格

const formItemLayout = {
    labelCol: {
        sm: { span: 7 },
    },
    wrapperCol: {
        sm: { span: 16 },
    },
}
const TextLayout = {
    labelCol: {
        sm: { span: 7 },
    },
    wrapperCol: {
        sm: { span: 21 },
    },
}

class orginalModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cityList: [], // 城市列表
            submitDisable: false, // 提交按钮是否不可用
            timeError: false, // 日期/时间是否有错误
            nowState: false, // 日期选择是否为当天
        }
    }

    componentWillReceiveProps = nextProps => {
        const { form: { getFieldError } } = this.props
        if (getFieldError('reservationDate') || getFieldError('reservationTime')) {
            this.setState({ timeError: true })
        } else if (!getFieldError('reservationDate') && !getFieldError('reservationTime')) {
            this.setState({ timeError: false })
        }
    }
    // 日期限制
    disabledStartDate = validityStart => {
        // 周一到周五只可以预约本周时间，周六周日可预约本周和下周一周的时间 (可能后续会添加的需求)
        // if(validityStart) {
        //     const day = (new Date()).getDay() < 6 ?  5 - (new Date()).getDay() : 14 - (new Date()).getDay();
        //     return !(validityStart.valueOf() >= Date.now() - 86400000 && validityStart.valueOf() <= Date.now() + 86400000*day)
        // }
        // return true;
        return validityStart && validityStart.valueOf() + 86400000 <= Date.now()
    }
    // 小时限制
    disabledHoursRange = () => {
        const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23]
        const { nowState } = this.state
        const now = new Date()
        const hours = now.getHours()
        const minutes = now.getMinutes()

        if (nowState) {
            console.log('当天')
            if (hours > 8 && hours < 22) {
                console.log('hours: ', hours,)
                for (let i = hours - 1; i > 8; i -= 1) {
                    console.log('i: ', i)
                    arr.push(i)
                }
                // if (minutes > 10) {
                //     arr.push(hours)
                // }
            }
        }
        return arr
    }
    // 分钟限制
    disabledMinutesRange = selectedHour => {
        const { nowState } = this.state
        const now = new Date()
        const hours = now.getHours()
        const minutes = now.getMinutes()

        // console.log('selectedHour: ', selectedHour)
        // console.log('hours: ', hours)
        // console.log('minutes: ', minutes)

        const arr = Array.from({ length: 60 }, (v, i) => i)
        if (nowState) {
            if (selectedHour === 21) {
                arr.splice(0, 1)
            } else if (hours === selectedHour) {
                if(minutes > 0) {
                    arr.splice(50, 1)
                } else if (minutes === 0) {
                    arr.splice(50, 1)
                    arr.splice(40, 1)
                }
            } else if (hours === selectedHour - 1) {
                if(minutes > 50) {
                    arr.splice(50, 1)
                    arr.splice(40, 1)
                } else if (minutes > 40) {
                    arr.splice(50, 1)
                    arr.splice(40, 1)
                    arr.splice(30, 1)
                } else if (minutes > 30) {
                    arr.splice(50, 1)
                    arr.splice(40, 1)
                    arr.splice(30, 1)
                    arr.splice(20, 1)
                } else if (minutes > 20) {
                    arr.splice(50, 1)
                    arr.splice(40, 1)
                    arr.splice(30, 1)
                    arr.splice(20, 1)
                    arr.splice(10, 1)
                } else {
                    arr.splice(50, 1)
                    arr.splice(40, 1)
                    arr.splice(30, 1)
                    arr.splice(20, 1)
                    arr.splice(10, 1)
                    arr.splice(0, 1)
                }
            } else {
                for (let i = 0; i < 6; i += 1) {
                    arr.splice(i * 10 - i, 1)
                }
            }
        } else {
            if (selectedHour === 21) {
                arr.splice(0, 1)
            } else {
                for (let i = 0; i < 6; i += 1) {
                    arr.splice(i * 10 - i, 1)
                }
            }
        }
        return arr
    }
    // 日期组件选择事件
    getReservationDate = time => {
        this.props.form.setFieldsValue({ reservationTime: undefined })
        // 保存 选择时间是否为当天
        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth()
        const date = now.getDate()
        this.setState({ nowState: year === time.get('year') && month === time.get('month') && date === time.get('date') })
        this.props.form.setFieldsValue({ reservationDate: time })
        this.getCloudDepartment()
    }
    // 时间组件选择事件
    getReservationTime = time => {
        if (time && (time.get('hour') === 21 || time.get('minute') % 10 !== 0)) {
            time.set('minute', 0)
        }
        // 第一次点击的时候没有保存数据，手动更新
        this.props.form.setFieldsValue({ reservationTime: time })
        this.getCloudDepartment()
    }
    // 省份选择联动城市列表事件
    handleProvinceChange = value => {
        const { provinceList, form: { setFieldsValue } } = this.props
        setFieldsValue({ cityId: undefined })
        this.setState({ cityList: util.getProvince(provinceList, value).cityList })
    }
    // 选择项目事件
    handleProjChange = value => {
        const { dispatch, form: { setFieldsValue } } = this.props
        setFieldsValue({ classId: undefined })
        setFieldsValue({ firstLevelProjectId: value })
        dispatch({ type: Constants.CLEAR_CLASS })
        dispatch({ type: Constants.GET_CLASS_REQUESTED, firstLevelProjectId: value })
        this.getCloudDepartment()
    }
    // 请求云中端数据
    getCloudDepartment = _ => {
        const { dispatch, form: { setFieldsValue, getFieldValue } } = this.props
        setFieldsValue({ cloudDepartmentId: undefined })
        if (getFieldValue('reservationDate') && getFieldValue('reservationTime') && getFieldValue('reservationDuration') && getFieldValue('firstLevelProjectId')) {
            const params = {
                reservationDate: getFieldValue('reservationDate').format('YYYY-MM-DD'),
                reservationTime: getFieldValue('reservationTime').format('HH:mm'),
                reservationDuration: getFieldValue('reservationDuration'),
                firstLevelProjectId: getFieldValue('firstLevelProjectId'),
            }
            dispatch({ type: Constants.GET_CLOUD_DEPARTMENT_LIST_REQUESTED, params })
        }
    }
    // 提交事件
    handleSubmit = e => {
        const { dispatch, refreshBox, needRefresh, form: { setFieldsValue, validateFields } } = this.props
        // e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                this.setState({ submitDisable: true })
                const { reservationDate, reservationTime } = values
                const tmpTime = moment().set({
                    year: reservationDate.get('year'),
                    month: reservationDate.get('month'),
                    date: reservationDate.get('date'),
                    hour: reservationTime.get('hour'),
                    minute: reservationTime.get('minute'),
                    second: reservationTime.get('second'),
                })
                // 云中端1.2迭代需求：点击确认的时候需要再次校验预约时间，这里校验的时间是创建预约单的时间是否是当前时间的半小时后
                if ((tmpTime.valueOf() - 1800000) < new Date()) {
                    alert('预约失败，请选择当前时间四十分钟后的时间重新提交')
                    this.setState({ submitDisable: false })
                    return
                }
                const params = {
                    ...values,
                    oid: parseInt(util.getURLParams().oid),
                    reservationDate: values.reservationDate.format('YYYY-MM-DD'),
                    reservationTime: values.reservationTime.format('HH:mm'),
                    reservationDuration: values.reservationDuration,
                }
                console.log('query form values: ', params)
                dispatch({
                    type: Constants.NEW_CLOUD_RESERVATION_REQUESTED,
                    payload: {
                        params,
                        successCallback: data => {
                            needRefresh && refreshBox('reserve')
                            this.onCancel()
                        },
                        failCallback: error => {
                            this.setState({ submitDisable: false })
                        },
                    },
                })
            }
        })
    }
    // 取消事件
    onCancel = () => {
        this.props.setVisible('reserveCloudVisible', false)
        const { dispatch } = this.props
        dispatch({ type: Constants.CLEAR_CLASS })
        this.props.form.resetFields()
        this.setState({ submitDisable: false })
    }

    render() {
        const { visible = false, locationList, firstProjectList, classList, provinceList, cloudDepartmentList, form: { getFieldDecorator, getFieldValue } } = this.props
        const { cityList, submitDisable, timeError } = this.state
        return (
            <Modal title="创建云中端预约单" visible={visible} width={600} onOk={this.handleSubmit} onCancel={this.onCancel} maskClosable={false} confirmLoading={submitDisable}>
                <Form className={style['reserveForm']} onSubmit={this.handleSubmit} hideRequiredMark>
                    <Row gutter={20} style={{ marginTop: 12 }}>
                        <Col span={10} key={99} >
                            <FormItem
                              {...formItemLayout}
                              label="预约时间"
                            >
                                {getFieldDecorator('reservationDate', {
                                    rules: [{
                                        required: true,
                                        validator: (rule, value, callback) => {
                                            if (!value) {
                                                callback('请选择预约时间')
                                            }
                                            if (value && (value.valueOf() + 86400000) < (new Date()).valueOf()) {
                                                callback('预约时间不可早于当天')
                                            }
                                            callback()
                                        }
                                    }],
                                })(
                                    <DatePicker onChange={this.getReservationDate} disabledDate={this.disabledStartDate} placeholder="请选择日期" />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={7} key={19} >
                            <FormItem
                              {...formItemLayout} className={style['reservation-time']}
                            >
                                {getFieldDecorator('reservationTime',{
                                    rules: [{ required: true,
                                            validator:(rule, value, callback)=>{
                                            if(!value){
                                                callback('请选择开始时间')
                                            }
                                            else{
                                                const reservationDate = getFieldValue('reservationDate')
                                                const tmpTime  = moment().set({'year': reservationDate.get('year'), 'month': reservationDate.get('month'), 'date':reservationDate.get('date')})
                                                tmpTime.set({'hour': value.get('hour'), 'minute': value.get('minute'), 'second':value.get('second')})
                                                if( tmpTime <= new Date()){
                                                    callback('预约时间不可早于当前')
                                                }
                                            }
                                            callback()
                                        }
                                    }],
                                })(
                                    <TimePicker
                                        disabled={!getFieldValue('reservationDate')}
                                        format="HH:mm"
                                        disabledHours={this.disabledHoursRange}
                                        disabledMinutes={this.disabledMinutesRange}
                                        placeholder="请选择开始时间"
                                        onChange={this.getReservationTime}
                                        hideDisabledOptions={true}
                                        // allowEmpty={false}
                                    />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={7} key={9} >
                            <FormItem
                              {...formItemLayout} className={style['reservation-duration']}
                            >
                                {getFieldDecorator('reservationDuration',{
                                    rules: [{ required: true, message: '请选择时长!' }],
                                    initialValue: 60,
                                })(
                                    <Select placeholder="请选择时长" dropdownMatchSelectWidth={true}>
                                        {Array.from({length:18}, (v,k) => (k+1)*10).map(interval => <Option key={interval} value={interval} >{interval}分钟</Option>)}
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row className={timeError ? style['reservation-prompt-bar-error'] : style['reservation-prompt-bar']} >
                        <Col span="3"></Col>
                        <Col span="18">
                            <div className={style['reservation-prompt']}>周一到周五只可以预约本周时间，周六周日可预约本周和下周一周的时间</div>
                        </Col>
                    </Row>
                    <Row style={{borderBottom:'1px solid #D3DCE6'}} gutter={20} >
                        <Col span={10} key={99} >
                            <FormItem
                              {...formItemLayout}
                              label="报考地区"
                            >
                                {getFieldDecorator('provinceId',{
                                rules: [{ required: true, message: '请选择省份!' }],
                              })(
                                    <Select
                                        placeholder="请选择省份"
                                        onChange={this.handleProvinceChange}
                                        showSearch
                                        optionFilterProp="children"
                                    >
                                        {provinceList && provinceList.map( province=>( <Option key={province.provinceId} value={province.provinceId}>{province.provinceName}</Option> ))}
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={7} key={19} >
                            <FormItem
                              {...formItemLayout}
                            >
                                {getFieldDecorator('cityId',{
                                rules: [{ required: true, message: '请选择市区!' }],
                              })(
                                    <Select
                                        disabled={!getFieldValue('provinceId')} 
                                        placeholder="请选择市区"
                                        showSearch
                                        optionFilterProp="children"
                                    >
                                        {cityList && cityList.map( city=>( <Option key={city.cityId} value={city.cityId}>{city.cityName}</Option> ))}
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <div className={style['row-title']} >
                        <div className={style['row-title-square']}></div>
                        <div className={style['row-title-text']} >沟通记录</div>
                    </div>
                    <Row >
                        <Col span={11} key={99} >
                            <FormItem
                              {...formItemLayout}
                              label="推荐项目"
                            >
                                {getFieldDecorator('firstLevelProjectId',{
                                rules: [{ required: true, message: '请选择项目!' }],
                              })(
                                    <Select
                                      placeholder="请选择项目"
                                      onChange={this.handleProjChange}
                                      showSearch
                                      optionFilterProp="children"
                                    >
                                        {firstProjectList && firstProjectList.map( proj=>( <Option key={proj.id} value={proj.id}>{proj.projectName}</Option> ))}
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={10} key={19} >
                            <FormItem
                              label="推荐班型"
                              {...formItemLayout}
                            >
                                {getFieldDecorator('classId',{
                                rules: [{ required: true, message: '请选择班型!' }],
                              })(
                                    <Select
                                      placeholder="请选择班型"
                                      onChange={this.handleSelectChange}
                                      showSearch
                                      optionFilterProp="children"
                                      dropdownMatchSelectWidth={false}
                                    >
                                        {classList && classList.map( clas=>( <Option key={clas.classId} value={clas.classId} >{clas.className}</Option> ))}
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={11} key={99} >
                            <FormItem
                              {...formItemLayout}
                              label="云中端"
                            >
                                {getFieldDecorator('cloudDepartmentId',{
                                rules: [{ required: true, message: '请选择云中端!' }],
                              })(
                                    <Select
                                      placeholder="请选择云中端"
                                      disabled={!getFieldValue('reservationDate')||!getFieldValue('reservationTime')||!getFieldValue('reservationDuration')||!getFieldValue('firstLevelProjectId')} 
                                      showSearch
                                      optionFilterProp="children"
                                    >
                                        {cloudDepartmentList && cloudDepartmentList.map( department=>( <Option key={department.id} value={department.id}>{department.name}</Option> ))}
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={10} key={19} >
                            <FormItem
                              label="推荐价格"
                              {...formItemLayout}
                            >
                              {getFieldDecorator('reservationPrice', {
                                rules: [{
                                        required: true,
                                        validator:(rule, value, callback)=>{
                                            if(!value){
                                                callback('请输入价格!')
                                            } else if(!PRICE_NUM.test(value)) {
                                                callback('请输入整数!')
                                            } else if(value.length > 6) {
                                                callback('推荐价格不可以超过6位数!')
                                            }
                                            callback()
                                        }
                                    }],
                              })(
                                <Input placeholder="请输入价格"/>
                              )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row >
                        <Col span={24} key={101} >
                            <FormItem
                              label="推荐原因"
                              {...TextLayout}
                              className={style['reservation-text']}
                            >
                              {getFieldDecorator('recommendReason', {
                                rules: [{ required: true,
                                    validator:(rule, value, callback)=>{
                                        if(!value){
                                            callback('请输入推荐原因!')
                                        }
                                        else if(value && value.length > 1000){
                                            callback('文本太长，请精简内容!')
                                        }
                                        else{
                                            callback()
                                        }
                                    }
                                }],
                              })(
                                <TextArea rows={4} placeholder="请输入原因"  />
                              )}
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(orginalModal)
