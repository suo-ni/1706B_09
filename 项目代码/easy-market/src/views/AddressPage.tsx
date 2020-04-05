import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { AddressAction } from '../store/actions/address'

interface StateType {
    
}

interface DispatchType {
    getAddress:() => void
}

let TopicDetailPage: React.FC<DispatchType> = props=>{
    console.log(props)
    useEffect(() => {
        props.getAddress()
    }, [])
    return <div className="noTabPageContent">
        <div id="addressPage">
            <div className="header">
                <div className="left">
                    <i className="iconfont icon-fanhui"></i>
                </div>
                <div className="title">地址管理</div>
                <div className="right"></div>
            </div>
            <div className="addressList">
                <div className="addressItem">
                    <div className="addressMsg">
                        <div className="concatName">吴世勋</div>
                        <div className="addressDetail">
                            <div className="concatPhone">17335145023</div>
                            <div className="concatAddress">韩国首尔市</div>
                            <div className="concatAddress">韩国首尔市明洞</div>
                        </div>
                        <div className="deleteAddress">

                        </div>
                    </div>
                </div>
            </div>
            <div className="addAddress">
                <a href="#">
                    <span>新建地址</span>
                </a>
            </div>
        </div>
    </div>
}

const mapStateToProps = (state: any) => {
    return {
        list: state.address.list
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        getAddress: () => {
            dispatch(AddressAction())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TopicDetailPage);