import React from 'react'
import style from "../../css/my.module.scss"
import { RouteComponentProps } from 'react-router'


let MyPage: React.FC<RouteComponentProps> = props=>{

    let address = ()=>{
        props.history.push(`/address`)
    }

    let collect = ()=>{
        props.history.push(`/collect`)
    }
    return <>
        <div className={style.tabPageContent}>
            <div className={style.minePage}>
                <div className={style.userMsgWrap}>
                    <div className={style.userLogo}></div>
                    <div className={style.userMsgs}>
                        <div>15323807318</div>
                        <div>普通用户</div>
                    </div>
                </div>
                <div className={style.userPower}>
                    <div onClick={collect}>
                        <i className="iconfont icon-pingfen"></i>
                        <div>我的收藏</div>
                    </div>
                    <div onClick={address}>
                        <i className="iconfont icon-address"></i>
                        <div>地址管理</div>
                    </div>
                    <div>
                        <i className="iconfont icon-wodedingdan"></i>
                        <div>我的订单</div>
                    </div>
                    <div>
                        <i className="iconfont icon-riqixuanze"></i>
                        <div>周末拼单</div>
                    </div>
                    <div>
                        <i className="iconfont icon-youhuiquan-01"></i>
                        <div>优惠券</div>
                    </div>
                    <div>
                        <i className="iconfont icon-address"></i>
                        <div>优选购</div>
                    </div>
                    <div>
                        <i className="iconfont icon-31"></i>
                        <div>我的红包</div>
                    </div>
                    <div>
                        <i className="iconfont icon-address"></i>
                        <div>会员plus</div>
                    </div>
                    <div>
                        <i className="iconfont icon-address"></i>
                        <div>邀请返利</div>
                    </div>
                    <div>
                        <i className="iconfont icon-bianji"></i>
                        <div>意见反馈</div>
                    </div>
                    <div>
                        <i className="iconfont icon-kefu"></i>
                        <div>客服咨询</div>
                    </div>
                    <div>
                        <i className="iconfont icon-50"></i>
                        <div>账户安全</div>
                    </div>
                </div>
                <div className={style.loginOut}>退出用户</div>
            </div>
        </div>
    </>
}

export default MyPage;