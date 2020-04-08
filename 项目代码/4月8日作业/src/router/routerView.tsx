import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { routerConfigType } from '../utils/interface'
import {connect} from 'react-redux'
import { getToken } from '../utils'
// import {getUserInfo} from '../store/actions/login'
// interface StateType{
//   info:{}
// }
// interface DispatchType{
//   getuserInfo:()=>void
// }
const routerView: React.FC <routerConfigType> = (props) => {
  let arr = props.routers;
  let routerArr = arr.filter((item) => !item.to);
  let redirectArr = arr.filter(item => item.to).map(item => { return <Redirect path={item.path} to={`${item.to}`} key={item.path}></Redirect> });
  return (
    <Switch>
      {
        routerArr.map((item) => {
          return (
            <Route path={item.path} render={(props) => {
              let { match: { path } } = props;
              // if (path !== '/login' && path !== '/home' && !getToken() && path !== "/home/index" && path !== "/home/classify" && path !== "/home/subject") {
              //   return <Redirect to={`/login?redirect=${encodeURIComponent(path)}`} />
              // }
              
              //判断是否登录或者有用户信息
            // if(getToken()&&!Object.keys(props.info).length){
            //  props.getUserInfo();
            // }






              return <item.component routers={item.children} {...props} key={item.path} ></item.component>
            }} key={item.path}></Route>
          )
        }).concat(redirectArr)
      }
    </Switch>
  )
}
const mapStateToProps=(state:any)=>{
  return {
  //  info:state.user.info
  }
}
// const mapDispatchToProps=(dispatch:Function)=>{
//   return{
//     getUserInfo:()=>dispatch(userInfoAction())
//   }
// }
export default connect(mapStateToProps)(routerView)
