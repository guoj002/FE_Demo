import React from 'react'
import { Tooltip, Tabs } from 'antd'
import PropTypes from 'prop-types'
import { hashHistory } from 'react-router'
import classnames from 'classnames'
import { getJSON } from '@sunl-fe/dataservice'

import Constants from 'constants/header'
import URLS from '../../../constants/URLS'
import style from './newMsgBox.less'
import { MsgSquare } from '../../msgSys/Index'


const { TabPane } = Tabs

class MsgBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            boxVisible: false,
            isLoading: false,
            activeKey: '1',
            tabDataStructure: [
                {
                    tabKey: '1',
                    hasUnRead: false,
                    messageType: -2,
                    tabName: '关注',
                },
                {
                    tabKey: '2',
                    hasUnRead: false,
                    messageType: -1,
                    tabName: '全部',
                },
            ],
        }
    }

    componentDidMount = _ => {
    }

    onVisibleChange = visible => {
        // console.log('visible', visible)
        this.setState({ boxVisible: visible, activeKey: '1' })
        if (visible) {
            this.setState({ isLoading: true }, this.fetchMessagesBox(-2))
        }
    }

    getUnreadCounts = index => {
        const { tabDataStructure } = this.state
        getJSON(URLS.GET_UNREAD_COUNTS, messageType: tabDataStructure[index].messageType)
            .then(data => {
                this.setState({ tabDataStructure[index].hasUnRead: data.unreadMessageCount !== 0 })
            })
            .catch(c => {
                alert(c)
            })
    }

    fetchMessagesBox = (type = -1) => {
        const boxDiv = document.getElementById('new_msg_box')
        if (boxDiv) {
            boxDiv.scrollTop = 0
        }
        const { dispatch } = this.props
        dispatch({
            type: Constants.GET_BOX_MESSAGES_REQUESTED,
            payload: {
                messageType: type,
                pageNumber: 1,
                pageSize: 50,
            },
            callback: () => this.setState({ isLoading: false }),
            // callback: () => {},
        })
    }

    closeBox = _ => this.setState({ boxVisible: false })

    viewAllMsg = _ => {
        hashHistory.push('/newdragnet/account/message')
        this.closeBox()
    }

    tabSelected = activeKey => {
        const type = activeKey === '2' ? -1 : -2 // 全部 -1 、关注 -2
        this.setState({ activeKey, isLoading: true }, this.fetchMessagesBox(type))
    }

    renderTabPane = () => {
        const { boxMsg } = this.props
        const { isLoading } = this.state
        if (isLoading) {
            return <span style={{ color: '#545454' }} className={style['view-all-msg']} >努力加载中...</span>
        }
        return (
            <div className={style['msg-scroll']}>
                {boxMsg.map((msg, index) => <MsgSquare style={{ width: 'auto' }} clickCallback={this.closeBox} key={index} message={msg} />)}
                {(boxMsg.length > 0) && <a className={style['view-all-msg']} onClick={this.viewAllMsg} >查看全部消息</a>}
                {(boxMsg.length === 0) && <span style={{ color: '#545454' }} className={style['view-all-msg']} >暂无消息</span>}
            </div>
        )
    }

    render() {
        const {
            wrappedIcon,
            activeWrappedIcon,
            unreadCounts = 0,
            importForm,
            // msgBoxStyle,
            // msgWrapperIconStyle,
        } = this.props
        const unreadNum = unreadCounts * 1
        const {
            boxVisible,
            activeKey,
            tabDataStructure,
        } = this.state
        const ttt = (
            <div id="new_msg_box" className={style['msg-box']}>
                <Tabs activeKey={activeKey} onChange={this.tabSelected}>
                    {tabDataStructure.map((item, index) => (
                        <TabPane
                            tab={<div style={{ position: 'relative' }}>{item.tabName}{ this.getUnreadCounts(index) ? <span className={style['square-title-circle']} /> : null }</div>}
                            key={item.tabKey}
                        >
                            {this.renderTabPane()}
                        </TabPane>
                    ))}
                </Tabs>
            </div>
        )
        return (
            <Tooltip
                visible={boxVisible}
                trigger="click"
                onVisibleChange={this.onVisibleChange}
                overlayClassName={importForm === 'old' ? style['msg-box-tooltip--old'] : style['msg-box-tooltip']}
                placement="bottomLeft"
                title={ttt}
            >
                <div className={classnames({ [style['msg-wrapper-icon']]: true, [style['msg-wrapper-icon--old']]: importForm === 'old' })}>
                    { boxVisible ? activeWrappedIcon : wrappedIcon }
                    {unreadNum > 0 && <span className={style['msg-unread']}>{unreadNum <= 50 ? unreadNum : '50+'}</span>}
                </div>
            </Tooltip>
        )
    }
}

MsgBox.propTypes = {
    wrappedIcon: PropTypes.object,
    activeWrappedIcon: PropTypes.object,
    boxMsg: PropTypes.array,
    unreadCounts: PropTypes.number,
    importForm: PropTypes.string,
    // msgBoxStyle: PropTypes.object,
    // msgWrapperIconStyle: PropTypes.object,
}

MsgBox.defaultProps = {
    wrappedIcon: null,
    activeWrappedIcon: null,
    boxMsg: [],
    unreadCounts: 0,
    importForm: '',
    // msgBoxStyle: {},
    // msgWrapperIconStyle: {},
}

export default MsgBox
