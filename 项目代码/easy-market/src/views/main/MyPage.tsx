import React from 'react'
import { PropType, RouterItemType } from '../../utils/interface'
import { RouteComponentProps } from 'react-router'
import { uploadAvatarAction, updateAvatarAction } from '../../store/actions/login'
import { Toast } from 'antd-mobile'
import { connect } from 'react-redux'

interface StateType {
    info: {
        avatar: string,
        username: string
    },
    uploadAvatar: string,
}
interface DispatchType {
    changeAvatar: (form: FormData) => void
    updateAvatar: (avatar: string) => void
    logout: () => void
}

let TopicDetailPage: React.FC<RouteComponentProps & DispatchType & StateType & PropType> = props => {
    let fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let file = e.target.files ? e.target.files[0] : null
        if (file) {
            let form = new FormData();
            form.append(file.name, file);
            props.changeAvatar(form)
        }
    }
    let updateAvatar = () => {
        console.log(props.uploadAvatar, '897987879797979')
        if (props.uploadAvatar) {
            console.log('111111')
            props.updateAvatar(props.uploadAvatar)
        } else {
            Toast.info('请先上传你的头像')
        }
    }
    let address = () => {
        props.history.push('/address')
    }
    let onFavor = () => {
        props.history.push('/favor')
    }

    return <div className="tabPageContent">
        <div id="minePage">
            <div className="userMsgWrap">
                
                <div className='userLogo'>
                    <img src={props.uploadAvatar ? props.uploadAvatar : props.info.avatar} alt="" />
                </div>
                <input type="file" onChange={fileChange} />
                {/* <span>{props.info.username}</span> */}
                <button onClick={() => { updateAvatar() }}>确定</button>
                <div className="userMsgs">
                    <div>13333567991</div>
                    <div>普通用户</div>
                </div>
            </div>
            <div onClick={() => onFavor()} className="userPower">
                <div className="div">
                    <i id="icon" className="iconfont icon-wodeshoucang"></i>
                    <div>我的收藏</div>
                </div>
                <div onClick={() => address()} className="div">
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

const mapStateToProps = (state: any) => {
    console.log('state...', state)
    return state.login
}
const mapDispatchToPros = (dispatch: Function) => {
    return {
        updateAvatar: (avatar: string) => {
            dispatch(updateAvatarAction(avatar))
        },
        changeAvatar: (form: FormData) => {
            dispatch(uploadAvatarAction(form))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToPros)(TopicDetailPage);