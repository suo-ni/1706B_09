import React from 'react';
import shop from './Cart.module.scss'
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux';
interface StateProps {

}
interface DispatchProps {

}
let cart: React.FC<DispatchProps & StateProps & RouteComponentProps> = (props) => {
  return <div className={shop.wrap}>
    <div className={shop.header}>
      <p>30天无忧退货</p>
      <p>48小时快速退款</p>
      <p>满88元免邮费</p>
    </div>
  <div className={shop.bottom}>
    <input type="radio"/>
   <span className={shop.ad}>已选</span>
   <span className={shop.ad}>编辑</span>
   <span className={shop.pay}>下单</span>
  </div>
  </div>

}
const mapStateToProps = (state: any) => {
  return {

  }
}
const mapDispatchToProps = (dispatch: Function) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(cart);
