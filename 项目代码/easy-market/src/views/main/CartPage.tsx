import React from 'react'
import style from "../../css/cart.module.scss"

let CartPagePage: React.FC = props=>{
    return <>
        <div className={style.tabPageContent}>
            <div className={style.cart}>
                <div className={style.serviceList}>
                    <div>
                        <span>★</span>
                        30天无忧退货
                    </div>
                    <div>
                        <span>★</span>
                        48小时快速退款
                    </div>
                    <div>
                        <span>★</span>
                        满88元免邮费
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CartPagePage;