import React from 'react'
import style from "../css/address.module.scss"
import { RouteComponentProps } from 'react-router'



let AddressPage: React.FC<RouteComponentProps> = props=>{

    let go = ()=>{
        props.history.push('/main/my')
    }

    return <>
        <div className={style.noTabPageContent}>
            <div className={style.addressPage}>
                <div className={style.header}>
                    <div className={style.left} onClick={go}>
                        <i className="iconfont icon-xiangzuo"></i>
                    </div>
                    <div className={style.right}></div>
                    <div className={style.title}>地址管理</div>
                </div>
                <div className={style.addressList}></div>
                <div className={style.addAddress}>
                    <button>新建地址</button>
                </div>


                {/* <div className={style.addressSetPage}>
                    <div className={style.addressHeader}>新增地址</div>
                    <div className={style.bottom}>
                        <input type="text" placeholder="姓名" className={style.addressInput}/>
                    </div>
                    <div className={style.bottom}>
                        <input type="text" placeholder="电话号码" className={style.addressInput}/>
                    </div>
                    <div className={style.bottom}>
                        <div className={style.chooseAddress}>
                            北京/北京市/东城区
                        </div>
                    </div>
                    <div className={style.bottom}>
                        <input type="text" placeholder="详细地址" className={style.addressInput}/>
                    </div>
                    <div className={style.bottom}>
                        <div className={style.isDefaultAddress}>
                            设置默认地址
                            <input type="checkbox" />
                        </div>
                    </div>
                    <div className={style.closeAddress}>
                        <div>取消</div>
                        <div>保存</div>
                    </div>
                </div> */}
            </div>
        </div>
    </>
}

export default AddressPage;