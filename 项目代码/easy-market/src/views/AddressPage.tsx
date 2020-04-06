import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { AddressAction } from '../store/actions/address'
import { RouteComponentProps } from 'react-router'
import { Item } from 'rc-menu';

interface StateType {
    list: Array<{
        [key: string]: number | string
    }>
}

interface DispatchType {
    getAddress: () => void
}

let TopicDetailPage: React.FC<StateType & DispatchType & RouteComponentProps> = props => {
    let goAdd = () => {
        props.history.push('/addaddress')
    }
    console.log(props.list)
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
                    {
                        props.list.map((item, index) => {
                            return <div key={index} className="addressMsg">
                                <div className="concatName">{item.name}</div>
                                <div className="addressDetail">
                                    <div className="concatPhone">{item.mobile}</div>
                                    <div className="concatAddress">{item.city_name}</div>
                                    <div className="concatAddress">{item.full_region}</div>
                                </div>
                                <div className="deleteAddress">
                                    <i className="iconfont icon-shanchu"></i>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div onClick={goAdd} className="addAddress">
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

export default connect(mapStateToProps, mapDispatchToProps)(TopicDetailPage);