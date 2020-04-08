import React, { useEffect } from 'react'
import { PropType, RouterItemType } from '../../utils/interface'
import { connect } from 'react-redux'
import { CartAction } from '../../store/actions/cart'
import { RouteComponentProps } from 'react-router'

interface StateType {
    list: Array<{
        [key: string]: string,
        cartList: any
    }>
   
}

interface DispatchType {
    getCart: () => void
}

let CartPage: React.FC<StateType & DispatchType & RouteComponentProps & PropType> = props => {
    console.log(props.list)
    useEffect(() => {
        props.getCart()
    }, [])
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
                {
                    props.list && props.list.map((item, index) => {
                        return <div className="cartGoodsItem">
                        <div className="isCheckItem"></div>
                            <div className="isCheckItem"></div>
                            <div className="goodsImg">
                                <img src={item.list_pic_url} alt=""/>
                            </div>
                            <div className="cartGoodsMsg">
                                <div>{item.goods_name}</div>
                                <div className="cartNo"></div>
                                <div className="cartPrice">￥{item.market_price}</div>
                            </div>
                            <div className="cartGoodsNum">X{item.number}</div>
                        </div>
                    })
                }


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

const mapStateToProps = (state: any) => {
    return {
        list: state.cart.data.cartList
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        getCart: () => {
            dispatch(CartAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);