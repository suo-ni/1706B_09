import React from 'react'
import { PropType, RouterItemType } from '../../utils/interface'
import { RouteComponentProps } from 'react-router'

let TopicDetailPage: React.FC<RouteComponentProps & PropType> = props=>{

    let address = () => {
        props.history.push('/address')
    }
    

    return <div className="tabPageContent">
        <div id="minePage">
            <div className="userMsgWrap">
                <div className="userLogo">

                </div>
                <div className="userMsgs">
                    <div>13333567991</div>
                    <div>普通用户</div>
                </div>
            </div>
            <div className="userPower">
                <div className="div">
                    <i id="icon" className="iconfont icon-wodeshoucang"></i>
                    <div>我的收藏</div>
                </div>
                <div onClick={address} className="div">
                    <i id="icon" className="iconfont icon-dizhiguanli"></i>
                    <div>地址管理</div>
                </div>
                <div>
                    <i className="iconfont icon-wode_icon_wodedingdan"></i>
                    <div>我的订单</div>
                </div>
                <div>
                    <i className="iconfont icon-rili"></i>
                    <div>周末拼单</div>
                </div>
                <div>
                    <i className="iconfont icon-youhuiquan"></i>
                    <div>优惠券</div>
                </div>
                <div>
                    <i className="iconfont icon-youxuangou"></i>
                    <div>优选购</div>
                </div>
                <div>
                    <i className="iconfont icon-Shape"></i>
                    <div>我的红包</div>
                </div>
                <div>
                    <i className="iconfont icon-Shape"></i>
                    <div>会员plus</div>
                </div>
                <div>
                    <i className="iconfont icon-yaoqingfanli"></i>
                    <div>邀请返利</div>
                </div>
                <div>
                    <i className="iconfont icon-yijianfankui"></i>
                    <div>意见反馈</div>
                </div>
                <div>
                    <i className="iconfont icon-kefuzixun"></i>
                    <div>客服咨询</div>
                </div>
                <div>
                    <i className="iconfont icon-zhanghuanquan"></i>
                    <div>账户安全</div>
                </div>
            </div>
        </div>
    </div>
}

export default TopicDetailPage;