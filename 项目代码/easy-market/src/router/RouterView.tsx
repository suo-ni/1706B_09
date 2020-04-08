import React, {useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {PropType} from '../utils/interface'
import {getToken} from '../utils/index'
import { connect } from 'react-redux'
import {userInfoAction} from '../store/actions/login'

interface StateType{
    info:{}
}
interface DispatchType{
    getUserInfo:()=>void
}
// let RouterView:React.FC<PropType & StateType & DispatchType>=props=>{
//     useEffect(() => {
//         props.getUserInfo()
//     }, [])
let RouterView: React.FC<StateType & DispatchType & PropType> = props=>{
    useEffect(() => {
                props.getUserInfo()
            }, [])
    return <Switch>{
        props.routes.map((item, index)=>{
            if (item.redirect){
                if (item.path == '*'){
                    return <Redirect key={item.path} to={item.redirect}/>
                // }else{
                //     return <Redirect key={item.path} to={item.redirect} exact from={item.path}/>
                }
            }
            return <Route key={item.path} path={item.path} render={renderProps=>{
                // 路由拦截
                let {match: {path}} = renderProps;
                if (path !== '/login' && !getToken()){
                    return <Redirect to={`/login?redirect=${encodeURIComponent(path)}`}/>
                }

                if(getToken() && !Object.keys(props.info).length){//
                    props.getUserInfo();
                }

                if (item.children){
                    return <item.component routes={item.children} {...renderProps}/>
                }else{
                    return <item.component {...renderProps}/>
                }
            }}></Route>
        })
    }</Switch>
}
const mapStateToPros = (state:any)=>{
    return {
        info:state.login.info
    }
}
const mapDispatchToPros = (dispatch:Function)=>{
    return {
        getUserInfo:()=>dispatch(userInfoAction())
    }
}
  
  export default connect(mapStateToPros, mapDispatchToPros)(RouterView)