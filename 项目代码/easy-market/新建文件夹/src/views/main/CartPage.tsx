import React from 'react'
import { PropType, RouterItemType } from '../../utils/interface'

let CartPage: React.FC<PropType> = props=>{
    return <div className="tabPageContent">
        <div id="cart">
            <ul className="serviceList">
                <li>
                    <span>★</span>30天无忧退货
                </li>
                <li>
                    <span>★</span>48小时快速退款
                </li>
                <li>
                    <span>★</span>满88元免邮费
                </li>
            </ul>
            <div className="cartGoodsListWrap">
                <div className="cartGoodsItem">
                    <div className="isCheckItem"></div>
                    <div className="goodsImg"></div>
                    <div className="cartGoodsMsg"></div>
                    <div></div>
                </div>
                
            </div>
            <div className="cartGoodsDo">
                <div className="isCheckItem">

                </div>
                <div className="cartMsgAll">已选</div>
                <div className="编辑"></div>
                <div className="cartAllDoButton pay">下单</div>
            </div>
        </div>
    </div>
}

export default CartPage;