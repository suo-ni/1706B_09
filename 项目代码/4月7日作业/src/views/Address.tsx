import React from 'react';
import address from './Address.module.scss'
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux';
interface StateProps {

}
interface DispatchProps {

}
let Address: React.FC<DispatchProps & StateProps & RouteComponentProps> = (props) => {
  return <div className={address.wrap}>
  <div className={address.header}>
    <p>地址管理</p>
  </div>
  <span className={address.add}>新建地址</span>
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
export default connect(mapStateToProps, mapDispatchToProps)(Address);
