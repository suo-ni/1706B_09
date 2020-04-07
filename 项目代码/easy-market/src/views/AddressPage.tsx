import React, { useEffect } from 'react';
import styles from './Address.module.scss';
import { connect } from 'react-redux';
import { AddressAction } from '../store/actions/address';
import { removeAddress } from '../api/address';
import { RouteComponentProps } from 'react-router-dom'

interface dispatchType {
    getAddressList: Function
}

interface stateType {
    list: Array<{
        [key: string]: number | string
    }>
}

let Address: React.FC<dispatchType & stateType & RouteComponentProps<{ push: "" }>> = (props) => {

    useEffect(() => {
        props.getAddressList()
    }, [])

    let changeRemove = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => {
        e.stopPropagation();
        let res = await removeAddress(id);
        console.log(res)
        if (res.data === "删除成功") {
            props.getAddressList()
        }
    }

    let toAddAddress = (item: object) => {
        console.log(props.history.push)
        // props.history.push("/addressAdd")
        props.history.push({
            pathname: "/addressAdd",
            state: item
        })

    }

    return (
        <div className="noTabPageContent">
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
                            props.list && props.list.map((item: any, index: number) => {
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
            </div>

            <div onClick={() => { props.history.replace("/addressAdd") }} className={styles.addAddress} >新建地址</div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        list: state.address.data
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        getAddressList() {
            dispatch(AddressAction())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Address)
